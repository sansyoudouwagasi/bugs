import { CaughtInsectRecord, InsectDatabase } from '../insects/InsectData';
import { InventoryManager } from '../inventory/InventoryManager';
import { AudioManager } from '../audio/AudioManager';

export interface ShopItem {
  id: string;
  name: string;
  category: 'tool' | 'equipment' | 'consumable';
  icon: string;
  price: number;
  description: string;
  isPurchased?: boolean;
}

export class ShopManager {
  public money: number = 0;
  private inventory: InventoryManager;
  private audio?: AudioManager;
  private moneyBadgeVal: HTMLElement | null = null;

  // Upgrades & Inventory state
  public equippedNet: 'standard' | 'silver' | 'gold' = 'standard';
  public hasSneakers: boolean = false;
  public hasLargeBasket: boolean = false;
  public honeyCount: number = 0;
  public bananaHoneyCount: number = 0;
  public medicineCount: number = 0;
  public redJellyCount: number = 0;
  public greenJellyCount: number = 0;

  public onUpgradeChange?: () => void;

  public readonly catalog: ShopItem[] = [
    {
      id: 'net_silver',
      name: 'ぎんのあみ',
      category: 'tool',
      icon: '🥈',
      price: 300,
      description: '銀色に輝く丈夫な網。虫を捕まえるリーチと範囲が20%アップ！',
    },
    {
      id: 'net_gold',
      name: 'きんのあみ',
      category: 'tool',
      icon: '🥇',
      price: 800,
      description: '黄金に輝く究極の虫取り網。捕獲リーチと角度が大幅に拡大！',
    },
    {
      id: 'sneakers',
      name: 'はやいスニーカー',
      category: 'equipment',
      icon: '👟',
      price: 350,
      description: '軽量でグリップ力の高い靴。歩き＆ダッシュの移動速度が20%アップ！',
    },
    {
      id: 'basket_large',
      name: 'おおきなかご',
      category: 'equipment',
      icon: '🧺',
      price: 250,
      description: '収納力抜群の大きめ虫かご。持てる虫の数が24匹から36匹に増加！',
    },
    {
      id: 'honey',
      name: 'あまいミツ',
      category: 'consumable',
      icon: '🍯',
      price: 60,
      description: '木に塗ると甘い香りでレアなクワガタやセミを惹きつける！（1回使い切り）',
    },
    {
      id: 'banana_honey',
      name: 'とくせいバナナ蜜',
      category: 'consumable',
      icon: '🍌',
      price: 120,
      description: '熟成バナナを発酵させた高級蜜。ヘラクレスやオオクワガタ、ギフチョウなどの最上級レア虫を引き寄せる！',
    },
    {
      id: 'medicine',
      name: 'きずぐすり',
      category: 'consumable',
      icon: '💊',
      price: 40,
      description: 'ハチに刺された時の応急手当て薬。体力を50回復する。',
    },
    {
      id: 'jelly_red',
      name: 'ちからの赤ゼリー',
      category: 'consumable',
      icon: '🔴',
      price: 120,
      description: '樹液を濃縮した特製ゼリー。甲虫に食べさせると相撲パワーが永続+2アップ！',
    },
    {
      id: 'jelly_green',
      name: 'ふんばりの緑ゼリー',
      category: 'consumable',
      icon: '🟢',
      price: 120,
      description: '薬草エキス入りの特製ゼリー。甲虫に食べさせると相撲スタミナが永続+2アップ！',
    },
  ];

  constructor(inventory: InventoryManager, audio?: AudioManager) {
    this.inventory = inventory;
    this.audio = audio;
    this.moneyBadgeVal = document.querySelector('.money-badge .badge-val');
    this.loadFromStorage();
    this.updateHUD();
    this.applyBasketUpgrade();
  }

  public setAudio(audio: AudioManager): void {
    this.audio = audio;
  }

  public buyItem(itemId: string): { success: boolean; message: string } {
    const item = this.catalog.find(i => i.id === itemId);
    if (!item) return { success: false, message: '商品が見つかりません。' };

    // Check already owned unique items
    if (itemId === 'net_silver' && (this.equippedNet === 'silver' || this.equippedNet === 'gold')) {
      return { success: false, message: 'すでに銀以上の網を持っています！' };
    }
    if (itemId === 'net_gold' && this.equippedNet === 'gold') {
      return { success: false, message: 'すでに金の網を持っています！' };
    }
    if (itemId === 'sneakers' && this.hasSneakers) {
      return { success: false, message: 'すでにスニーカーを所持しています！' };
    }
    if (itemId === 'basket_large' && this.hasLargeBasket) {
      return { success: false, message: 'すでにおおきなかごを持っています！' };
    }

    if (this.money < item.price) {
      return { success: false, message: 'ゴールドが足りません！' };
    }

    // Deduct money
    this.money -= item.price;
    this.updateHUD(true);

    // Apply upgrade
    if (itemId === 'net_silver') {
      this.equippedNet = 'silver';
    } else if (itemId === 'net_gold') {
      this.equippedNet = 'gold';
    } else if (itemId === 'sneakers') {
      this.hasSneakers = true;
    } else if (itemId === 'basket_large') {
      this.hasLargeBasket = true;
      this.applyBasketUpgrade();
    } else if (itemId === 'honey') {
      this.honeyCount += 1;
    } else if (itemId === 'banana_honey') {
      this.bananaHoneyCount += 1;
    } else if (itemId === 'medicine') {
      this.medicineCount += 1;
    } else if (itemId === 'jelly_red') {
      this.redJellyCount += 1;
    } else if (itemId === 'jelly_green') {
      this.greenJellyCount += 1;
    }

    if (this.audio) {
      this.audio.playPurchase();
    }
    this.saveToStorage();

    if (this.onUpgradeChange) {
      this.onUpgradeChange();
    }

    return { success: true, message: `${item.name} を購入しました！` };
  }

  public feedJelly(
    record: CaughtInsectRecord,
    type: 'red' | 'green'
  ): { success: boolean; message: string } {
    if (!InsectDatabase.isSumoFighter(record.id)) {
      return { success: false, message: 'この昆虫は相撲に出場できないためゼリーを食べません。' };
    }

    if (type === 'red') {
      if (this.redJellyCount <= 0) {
        return { success: false, message: 'ちからの赤ゼリーを持っていません！' };
      }
      this.redJellyCount -= 1;
      record.power = (record.power || 0) + 2;
      record.level = (record.level || 1) + 1;
      this.saveToStorage();
      if (this.audio) this.audio.playPurchase();
      return { success: true, message: `${record.name} に赤ゼリーを食べさせた！パワーが +2 強化された！` };
    } else {
      if (this.greenJellyCount <= 0) {
        return { success: false, message: 'ふんばりの緑ゼリーを持っていません！' };
      }
      this.greenJellyCount -= 1;
      record.stamina = (record.stamina || 0) + 2;
      record.level = (record.level || 1) + 1;
      this.saveToStorage();
      if (this.audio) this.audio.playPurchase();
      return { success: true, message: `${record.name} に緑ゼリーを食べさせた！スタミナが +2 強化された！` };
    }
  }

  public useMedicine(): boolean {
    if (this.medicineCount <= 0) return false;
    this.medicineCount -= 1;
    this.saveToStorage();
    if (this.onUpgradeChange) {
      this.onUpgradeChange();
    }
    return true;
  }

  public useHoney(): boolean {
    if (this.honeyCount <= 0) return false;
    this.honeyCount -= 1;
    this.saveToStorage();
    if (this.onUpgradeChange) {
      this.onUpgradeChange();
    }
    return true;
  }

  private applyBasketUpgrade(): void {
    if (this.hasLargeBasket) {
      this.inventory.maxCapacity = 36;
    }
  }

  public earnMoney(amount: number): void {
    this.money += amount;
    this.updateHUD(true);
    this.saveToStorage();
  }

  public calculatePrice(record: CaughtInsectRecord): number {
    const base = InsectDatabase.getById(record.id)?.basePrice || 50;
    let multiplier = 1.0;
    if (record.isGiant) {
      multiplier = 1.6;
    } else if (record.isBig) {
      multiplier = 1.3;
    }
    return Math.round(base * multiplier);
  }

  public sellItem(index: number): number {
    const item = this.inventory.items[index];
    if (!item) return 0;

    const price = this.calculatePrice(item);
    this.inventory.removeItem(index);
    this.addMoney(price);
    this.playCoinSound();
    return price;
  }

  public sellAll(): { totalG: number; count: number } {
    const count = this.inventory.getCount();
    if (count === 0) return { totalG: 0, count: 0 };

    let totalG = 0;
    for (const item of this.inventory.items) {
      totalG += this.calculatePrice(item);
    }

    this.inventory.clearAll();
    this.addMoney(totalG);
    this.playCoinSound();
    return { totalG, count };
  }

  public addMoney(amount: number): void {
    this.money += amount;
    this.updateHUD(true);
    this.saveToStorage();
  }

  public addGold(amount: number): void {
    this.addMoney(amount);
  }

  public updateHUD(animate: boolean = false): void {
    if (this.moneyBadgeVal) {
      this.moneyBadgeVal.textContent = `${this.money.toLocaleString()} G`;
      if (animate) {
        this.moneyBadgeVal.parentElement?.classList.remove('badge-pop');
        void this.moneyBadgeVal.parentElement?.offsetWidth;
        this.moneyBadgeVal.parentElement?.classList.add('badge-pop');
      }
    }
  }

  public playCoinSound(): void {
    if (this.audio) {
      this.audio.playPurchase();
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('bug_island_money', this.money.toString());
      localStorage.setItem('bug_island_net', this.equippedNet);
      localStorage.setItem('bug_island_sneakers', this.hasSneakers ? 'true' : 'false');
      localStorage.setItem('bug_island_basket_large', this.hasLargeBasket ? 'true' : 'false');
      localStorage.setItem('bug_island_honey', this.honeyCount.toString());
      localStorage.setItem('bug_island_banana_honey', this.bananaHoneyCount.toString());
      localStorage.setItem('bug_island_medicine', this.medicineCount.toString());
      localStorage.setItem('bug_island_jelly_red', this.redJellyCount.toString());
      localStorage.setItem('bug_island_jelly_green', this.greenJellyCount.toString());
    } catch {
      // Ignore
    }
  }

  private loadFromStorage(): void {
    try {
      const savedMoney = localStorage.getItem('bug_island_money');
      if (savedMoney) this.money = parseInt(savedMoney, 10) || 0;

      const savedNet = localStorage.getItem('bug_island_net');
      if (savedNet === 'silver' || savedNet === 'gold') this.equippedNet = savedNet;

      this.hasSneakers = localStorage.getItem('bug_island_sneakers') === 'true';
      this.hasLargeBasket = localStorage.getItem('bug_island_basket_large') === 'true';
      this.honeyCount = parseInt(localStorage.getItem('bug_island_honey') || '0', 10) || 0;
      this.bananaHoneyCount = parseInt(localStorage.getItem('bug_island_banana_honey') || '0', 10) || 0;
      this.medicineCount = parseInt(localStorage.getItem('bug_island_medicine') || '0', 10) || 0;
      this.redJellyCount = parseInt(localStorage.getItem('bug_island_jelly_red') || '0', 10) || 0;
      this.greenJellyCount = parseInt(localStorage.getItem('bug_island_jelly_green') || '0', 10) || 0;
    } catch {
      this.money = 0;
    }
  }
}
