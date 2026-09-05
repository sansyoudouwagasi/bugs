import { CollectionManager } from '../collection/CollectionManager';
import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';
import { TimeManager } from '../time/TimeManager';
import { MuseumManager, DonatedInsectRecord } from '../building/MuseumManager';
import { QuestManager, Quest } from '../quest/QuestManager';

export interface GameSaveData {
  version: number;
  money: number;
  inventory: any[];
  collection: any;
  timeHours: number;
  donations?: DonatedInsectRecord[];
  quests?: Quest[];
  savedAt: string;
}

export class SaveManager {
  private static readonly SAVE_KEY = 'bug_island_save_data_v8';
  private static readonly OLD_SAVE_KEY_V7 = 'bug_island_save_data_v7';
  private static readonly OLD_SAVE_KEY_V5 = 'bug_island_save_data_v5';

  public static save(
    shop: ShopManager,
    inventory: InventoryManager,
    collection: CollectionManager,
    time: TimeManager,
    museum?: MuseumManager,
    questManager?: QuestManager
  ): void {
    try {
      const data: GameSaveData = {
        version: 8,
        money: shop.money,
        inventory: inventory.items,
        collection: (collection as any).caughtHistory || {},
        timeHours: time.getTime().totalHours,
        donations: museum?.serialize(),
        quests: questManager?.serialize(),
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(this.SAVE_KEY, JSON.stringify(data));
    } catch {
      // Ignore quota errors
    }
  }

  public static load(): GameSaveData | null {
    try {
      let raw = localStorage.getItem(this.SAVE_KEY);
      if (!raw) {
        raw = localStorage.getItem(this.OLD_SAVE_KEY_V7);
      }
      if (!raw) {
        raw = localStorage.getItem(this.OLD_SAVE_KEY_V5);
      }
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  public static clear(): void {
    localStorage.removeItem(this.SAVE_KEY);
    localStorage.removeItem(this.OLD_SAVE_KEY_V7);
    localStorage.removeItem(this.OLD_SAVE_KEY_V5);
  }
}

