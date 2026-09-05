import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';
import { HealthManager } from '../player/HealthManager';

export class ShopUI {
  private inventory: InventoryManager;
  private shop: ShopManager;
  private healthManager?: HealthManager;
  private overlay: HTMLElement | null = null;
  private isOpen: boolean = false;
  private currentTab: 'sell' | 'buy' = 'sell';

  public onUseHoney?: () => void;

  constructor(inventory: InventoryManager, shop: ShopManager, healthManager?: HealthManager) {
    this.inventory = inventory;
    this.shop = shop;
    this.healthManager = healthManager;

    this.createDOM();
    this.inventory.onChange(() => {
      if (this.isOpen) {
        this.renderContent();
      }
    });

    this.shop.onUpgradeChange = () => {
      if (this.isOpen) {
        this.renderContent();
      }
    };
  }

  public setHealthManager(hm: HealthManager): void {
    this.healthManager = hm;
  }

  private createDOM(): void {
    const overlay = document.createElement('div');
    overlay.id = 'shop-modal';
    overlay.className = 'shop-modal-overlay';
    overlay.style.display = 'none';

    overlay.innerHTML = `
      <div class="shop-container">
        <!-- Header -->
        <header class="shop-header">
          <div class="shop-title-row">
            <span class="shop-header-icon">🏪</span>
            <h2 class="shop-title">島の買い取り屋台＆道具屋</h2>
            <span class="shop-capacity-tag" id="shop-capacity">0 / 24</span>
          </div>
          <button class="shop-close-btn" id="btn-close-shop" aria-label="閉じる">✕</button>
        </header>

        <!-- Subbar (Tabs & Money) -->
        <div class="shop-subbar-row">
          <div class="shop-tabs">
            <button class="shop-tab-btn active" id="tab-sell" data-tab="sell">🧺 うりば (売却)</button>
            <button class="shop-tab-btn" id="tab-buy" data-tab="buy">🛍️ かいもの (購入)</button>
          </div>
          <div class="shop-money-display">
            <span class="subbar-label">所持金:</span>
            <span class="subbar-money" id="shop-current-money">0 G</span>
          </div>
        </div>

        <!-- Scrollable Content Area -->
        <div class="shop-items-scroll" id="shop-items-list">
          <!-- Dynamically populated -->
        </div>

        <!-- Footer for Sell Tab -->
        <footer class="shop-footer" id="shop-sell-footer">
          <div class="shop-footer-summary">
            <span class="summary-label">すべて売却時の合計:</span>
            <span class="summary-val" id="shop-total-val">0 G</span>
          </div>
          <button class="shop-sell-all-btn" id="btn-sell-all">ぜんぶ売る</button>
        </footer>

        <!-- Footer for Buy Tab (Consumables Quick Bag) -->
        <footer class="shop-footer shop-buy-footer" id="shop-buy-footer" style="display: none;">
          <div class="bag-summary">
            <span class="bag-label">手持ちアイテム:</span>
            <span class="bag-badge" id="bag-honey-count">🍯 ミツ: 0個</span>
            <span class="bag-badge" id="bag-med-count">💊 薬: 0個</span>
          </div>
          <button class="shop-use-med-btn" id="btn-use-medicine">💊 薬を飲む (+50 HP)</button>
        </footer>
      </div>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;

    // Close button
    const btnClose = overlay.querySelector('#btn-close-shop');
    btnClose?.addEventListener('click', () => this.close());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close();
      }
    });

    // Tab buttons
    const tabSell = overlay.querySelector('#tab-sell') as HTMLButtonElement;
    const tabBuy = overlay.querySelector('#tab-buy') as HTMLButtonElement;

    tabSell?.addEventListener('click', () => {
      this.currentTab = 'sell';
      tabSell.classList.add('active');
      tabBuy.classList.remove('active');
      this.renderContent();
    });

    tabBuy?.addEventListener('click', () => {
      this.currentTab = 'buy';
      tabBuy.classList.add('active');
      tabSell.classList.remove('active');
      this.renderContent();
    });

    // Bulk sell button
    const btnSellAll = overlay.querySelector('#btn-sell-all') as HTMLButtonElement;
    btnSellAll?.addEventListener('click', () => {
      if (this.inventory.getCount() === 0) return;
      const result = this.shop.sellAll();
      this.renderContent();
      this.showToast(`${result.count}匹の虫を売って ${result.totalG.toLocaleString()} G を手に入れた！💰`);
    });

    // Use medicine button
    const btnUseMed = overlay.querySelector('#btn-use-medicine') as HTMLButtonElement;
    btnUseMed?.addEventListener('click', () => {
      if (this.shop.medicineCount <= 0) {
        this.showToast('きずぐすりを持っていません！');
        return;
      }
      if (this.healthManager && this.healthManager.currentHealth >= this.healthManager.maxHealth) {
        this.showToast('体力はすでに満タンです！❤️');
        return;
      }
      if (this.shop.useMedicine()) {
        this.healthManager?.heal(50);
        this.renderContent();
        this.showToast('💊 きずぐすりを使って体力を50回復した！');
      }
    });
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(tab: 'sell' | 'buy' = 'sell'): void {
    if (!this.overlay) return;
    this.isOpen = true;
    this.currentTab = tab;

    const tabSell = this.overlay.querySelector('#tab-sell');
    const tabBuy = this.overlay.querySelector('#tab-buy');
    if (tab === 'buy') {
      tabBuy?.classList.add('active');
      tabSell?.classList.remove('active');
    } else {
      tabSell?.classList.add('active');
      tabBuy?.classList.remove('active');
    }

    this.overlay.style.display = 'flex';
    this.renderContent();
  }

  public close(): void {
    if (!this.overlay) return;
    this.isOpen = false;
    this.overlay.style.display = 'none';
  }

  private renderContent(): void {
    if (!this.overlay) return;

    const capEl = this.overlay.querySelector('#shop-capacity');
    const moneyEl = this.overlay.querySelector('#shop-current-money');
    const sellFooter = this.overlay.querySelector('#shop-sell-footer') as HTMLElement;
    const buyFooter = this.overlay.querySelector('#shop-buy-footer') as HTMLElement;

    if (capEl) capEl.textContent = `${this.inventory.getCount()} / ${this.inventory.maxCapacity}`;
    if (moneyEl) moneyEl.textContent = `${this.shop.money.toLocaleString()} G`;

    if (this.currentTab === 'sell') {
      sellFooter.style.display = 'flex';
      buyFooter.style.display = 'none';
      this.renderSellList();
    } else {
      sellFooter.style.display = 'none';
      buyFooter.style.display = 'flex';
      this.renderBuyList();
    }
  }

  private renderSellList(): void {
    if (!this.overlay) return;
    const listEl = this.overlay.querySelector('#shop-items-list');
    const totalEl = this.overlay.querySelector('#shop-total-val');
    const btnSellAll = this.overlay.querySelector('#btn-sell-all') as HTMLButtonElement;
    if (!listEl || !totalEl) return;

    let totalG = 0;
    for (const item of this.inventory.items) {
      totalG += this.shop.calculatePrice(item);
    }
    totalEl.textContent = `${totalG.toLocaleString()} G`;
    if (btnSellAll) btnSellAll.disabled = this.inventory.getCount() === 0;

    listEl.innerHTML = '';

    if (this.inventory.getCount() === 0) {
      listEl.innerHTML = `
        <div class="shop-empty-state">
          <span class="empty-icon">🧺</span>
          <p class="empty-text">虫かごは空っぽです！<br>島で虫をあみで捕まえましょう。</p>
        </div>
      `;
      return;
    }

    this.inventory.items.forEach((item, index) => {
      const price = this.shop.calculatePrice(item);
      const card = document.createElement('div');
      card.className = 'shop-item-card';

      let sizeTag = '';
      if (item.isGiant) sizeTag = '<span class="shop-size-tag tag-giant">特大!</span>';
      else if (item.isBig) sizeTag = '<span class="shop-size-tag tag-big">大物!</span>';

      card.innerHTML = `
        <div class="item-card-left">
          <span class="item-card-icon">${item.icon}</span>
          <div class="item-card-info">
            <div class="item-card-name-row">
              <span class="item-card-name">${item.name}</span>
              ${sizeTag}
            </div>
            <div class="item-card-size">${item.size.toFixed(1)} mm</div>
          </div>
        </div>
        <div class="item-card-right">
          <span class="item-card-price">${price} G</span>
          <button class="item-card-sell-btn" data-index="${index}">売る</button>
        </div>
      `;

      const sellBtn = card.querySelector('.item-card-sell-btn') as HTMLButtonElement;
      sellBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const earned = this.shop.sellItem(index);
        this.renderContent();
        this.showToast(`${item.name} を売って ${earned} G を獲得！`);
      });

      listEl.appendChild(card);
    });
  }

  private renderBuyList(): void {
    if (!this.overlay) return;
    const listEl = this.overlay.querySelector('#shop-items-list');
    const honeyCountEl = this.overlay.querySelector('#bag-honey-count');
    const medCountEl = this.overlay.querySelector('#bag-med-count');

    if (honeyCountEl) honeyCountEl.textContent = `🍯 ミツ: ${this.shop.honeyCount}個`;
    if (medCountEl) medCountEl.textContent = `💊 薬: ${this.shop.medicineCount}個`;

    if (!listEl) return;
    listEl.innerHTML = '';

    this.shop.catalog.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'shop-buy-card';

      let isOwned = false;
      if (item.id === 'net_silver') isOwned = this.shop.equippedNet === 'silver' || this.shop.equippedNet === 'gold';
      else if (item.id === 'net_gold') isOwned = this.shop.equippedNet === 'gold';
      else if (item.id === 'sneakers') isOwned = this.shop.hasSneakers;
      else if (item.id === 'basket_large') isOwned = this.shop.hasLargeBasket;

      const canAfford = this.shop.money >= item.price;

      card.innerHTML = `
        <div class="buy-card-left">
          <span class="buy-card-icon">${item.icon}</span>
          <div class="buy-card-info">
            <div class="buy-card-name-row">
              <span class="buy-card-name">${item.name}</span>
              ${isOwned ? '<span class="buy-owned-badge">所持中</span>' : ''}
            </div>
            <p class="buy-card-desc">${item.description}</p>
          </div>
        </div>
        <div class="buy-card-right">
          <span class="buy-card-price">${item.price} G</span>
          <button class="buy-action-btn ${isOwned ? 'btn-owned' : ''}" ${isOwned || !canAfford ? 'disabled' : ''}>
            ${isOwned ? '所持済' : '購入'}
          </button>
        </div>
      `;

      const buyBtn = card.querySelector('.buy-action-btn') as HTMLButtonElement;
      if (!isOwned) {
        buyBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          const res = this.shop.buyItem(item.id);
          this.renderContent();
          this.showToast(res.message);
        });
      }

      listEl.appendChild(card);
    });
  }

  private showToast(msg: string): void {
    const existing = document.querySelector('.shop-toast');
    existing?.remove();

    const toast = document.createElement('div');
    toast.className = 'shop-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }
}
