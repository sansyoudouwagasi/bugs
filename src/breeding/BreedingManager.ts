import { CaughtInsectRecord, InsectDatabase } from '../insects/InsectData';
import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';

export type BreedingStage = 'empty' | 'mating' | 'egg' | 'larva' | 'pupa' | 'ready';

export interface BreedingSession {
  parentA: CaughtInsectRecord;
  parentB: CaughtInsectRecord;
  stage: BreedingStage;
  progress: number; // 0 to 100%
  itemUsed: string | null; // 'fungus_bottle' | 'protein_jelly' | null
  predictedSpeciesId: string;
  resultInsect: CaughtInsectRecord | null;
}

export class BreedingManager {
  private inventory: InventoryManager;
  private shop: ShopManager;
  public currentSession: BreedingSession | null = null;
  private onChangeCallbacks: ((session: BreedingSession | null) => void)[] = [];

  constructor(inventory: InventoryManager, shop: ShopManager) {
    this.inventory = inventory;
    this.shop = shop;
    this.loadFromStorage();
  }

  public addChangeListener(callback: (session: BreedingSession | null) => void): void {
    this.onChangeCallbacks.push(callback);
  }

  private notifyChange(): void {
    this.saveToStorage();
    for (const cb of this.onChangeCallbacks) {
      cb(this.currentSession);
    }
  }

  /**
   * Start pairing two insects
   */
  public startPairing(insectA: CaughtInsectRecord, insectB: CaughtInsectRecord): boolean {
    if (this.currentSession && this.currentSession.stage !== 'ready') {
      return false; // already running
    }

    // Determine target offspring species (usually parent species, or stronger of the two)
    let offspringId = insectA.id;
    if (insectA.id !== insectB.id) {
      offspringId = insectA.rarity >= insectB.rarity ? insectA.id : insectB.id;
    }

    this.currentSession = {
      parentA: insectA,
      parentB: insectB,
      stage: 'mating',
      progress: 0,
      itemUsed: null,
      predictedSpeciesId: offspringId,
      resultInsect: null
    };

    this.notifyChange();
    return true;
  }

  /**
   * Apply breeding item (e.g. Fungus Bottle or Protein Jelly)
   */
  public applyItem(itemId: 'fungus_bottle' | 'protein_jelly'): { success: boolean; message: string } {
    if (!this.currentSession || this.currentSession.stage === 'ready') {
      return { success: false, message: '現在育成中の昆虫がいません。' };
    }

    const itemNames = {
      fungus_bottle: 'ブリード菌糸ビン',
      protein_jelly: '特製プロテインゼリー'
    };

    const count = this.shop.getItemCount(itemId);
    if (count <= 0) {
      return { success: false, message: `${itemNames[itemId]}を持っていません。` };
    }

    // Deduct item
    this.shop.consumeItem(itemId, 1);
    this.currentSession.itemUsed = itemId;

    if (itemId === 'protein_jelly') {
      // Instantly advance progress by +45%
      this.advanceProgress(45);
      return { success: true, message: `特製プロテインゼリーを与えました！成長がグンと進みました！(+45%)` };
    } else {
      // Fungus bottle boosts size and speeds up slightly
      this.advanceProgress(25);
      return { success: true, message: `ブリード菌糸ビンにセットしました！超大型化の可能性が高まりました！` };
    }
  }

  /**
   * Advance breeding progress (e.g. by time, resting in bed, or feeding)
   */
  public advanceProgress(amount: number): void {
    if (!this.currentSession || this.currentSession.stage === 'ready') return;

    this.currentSession.progress = Math.min(100, this.currentSession.progress + amount);

    // Update stage based on progress
    if (this.currentSession.progress >= 100) {
      this.currentSession.stage = 'ready';
      this.generateResult();
    } else if (this.currentSession.progress >= 70) {
      this.currentSession.stage = 'pupa';
    } else if (this.currentSession.progress >= 35) {
      this.currentSession.stage = 'larva';
    } else if (this.currentSession.progress >= 15) {
      this.currentSession.stage = 'egg';
    }

    this.notifyChange();
  }

  /**
   * Advance breeding through in-game time delta or sleeping in bed
   */
  public update(deltaSeconds: number): void {
    if (!this.currentSession || this.currentSession.stage === 'ready') return;
    // Slow natural growth: 100% takes about 2.5 minutes of active play, or boosted by bed/items
    const rate = 100 / 150; // ~0.66% per sec
    this.advanceProgress(rate * deltaSeconds);
  }

  /**
   * Produce the final adult insect upon 100% metamorphosis
   */
  private generateResult(): void {
    if (!this.currentSession) return;
    const { parentA, parentB, predictedSpeciesId, itemUsed } = this.currentSession;
    const baseData = InsectDatabase.getById(predictedSpeciesId) || InsectDatabase.getById('rhinoceros_beetle')!;

    // Size calculation: Inherit larger parent + bonus
    const maxParentSize = Math.max(parentA.size, parentB.size);
    const avgParentSize = (parentA.size + parentB.size) / 2;
    
    // Fungus bottle increases giant/king roll chance
    const fungusBonus = itemUsed === 'fungus_bottle' ? 0.35 : 0.0;
    const roll = Math.random();

    let isKing = false;
    let isGiant = false;
    let isBig = false;
    let finalSize = 0;

    if (roll < 0.20 + fungusBonus) {
      // KING CROWN (👑 Apex size)
      isKing = true;
      isGiant = true;
      isBig = true;
      finalSize = Math.round(baseData.maxSize * (1.20 + Math.random() * 0.15) * 10) / 10;
    } else if (roll < 0.55 + fungusBonus) {
      // Giant crown
      isGiant = true;
      isBig = true;
      finalSize = Math.round(Math.max(maxParentSize * 1.05, baseData.maxSize * (1.08 + Math.random() * 0.10)) * 10) / 10;
    } else {
      // Big size
      isBig = true;
      finalSize = Math.round(Math.max(avgParentSize * 1.02, baseData.maxSize * (1.01 + Math.random() * 0.06)) * 10) / 10;
    }

    // Color mutation (Shiny variant)
    const colorRoll = Math.random();
    let shinyColor: string | undefined;
    let shinyName: string | undefined;

    if (colorRoll < 0.14) {
      shinyColor = '#f9ca24';
      shinyName = '黄金変異 (Gold Shiny)';
    } else if (colorRoll < 0.24) {
      shinyColor = '#f5f6fa';
      shinyName = '白化変異 (Albino White)';
    } else if (colorRoll < 0.32) {
      shinyColor = '#10ac84';
      shinyName = '翠玉変異 (Emerald Green)';
    }

    const generation = Math.max(parentA.generation || 1, parentB.generation || 1) + 1;

    this.currentSession.resultInsect = {
      id: baseData.id,
      name: shinyName ? `${shinyName.split(' ')[0]}・${baseData.name}` : baseData.name,
      icon: isKing ? '👑' : baseData.icon,
      rarity: Math.min(5, baseData.rarity + (isKing ? 1 : 0)),
      size: finalSize,
      isBig,
      isGiant,
      isKing,
      isBred: true,
      generation,
      shinyColor,
      shinyName,
      caughtAt: new Date(),
      level: 1,
      power: isKing ? 15 : 8,
      stamina: isKing ? 15 : 8
    };
  }

  /**
   * Claim the newly emerged insect into player inventory
   */
  public claimInsect(): { success: boolean; insect: CaughtInsectRecord | null; message: string } {
    if (!this.currentSession || this.currentSession.stage !== 'ready' || !this.currentSession.resultInsect) {
      return { success: false, insect: null, message: '羽化した昆虫がいません。' };
    }

    if (this.inventory.isFull()) {
      return { success: false, insect: null, message: '虫かごがいっぱいです！スペースを空けてください。' };
    }

    const insect = this.currentSession.resultInsect;
    this.inventory.addItem(insect);

    // Reset session
    this.currentSession = null;
    this.notifyChange();

    return {
      success: true,
      insect,
      message: `🎉 羽化完了！【${insect.name}】（${insect.size}mm${insect.isKing ? ' 👑キング冠' : ''}）を受け取りました！`
    };
  }

  private saveToStorage(): void {
    try {
      if (this.currentSession) {
        localStorage.setItem('bug_island_breeding_session', JSON.stringify(this.currentSession));
      } else {
        localStorage.removeItem('bug_island_breeding_session');
      }
    } catch {}
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem('bug_island_breeding_session');
      if (raw) {
        this.currentSession = JSON.parse(raw);
      }
    } catch {}
  }
}
