import { CaughtInsectRecord, InsectDatabase } from '../insects/InsectData';
import { InventoryManager } from '../inventory/InventoryManager';

export interface DonatedInsectRecord {
  id: string;
  name: string;
  icon: string;
  rarity: number;
  size: number;
  donatedAt: string;
}

export class MuseumManager {
  private donations: Map<string, DonatedInsectRecord> = new Map();
  private inventory: InventoryManager;
  public onDonationChange?: () => void;

  constructor(inventory: InventoryManager) {
    this.inventory = inventory;
  }

  /**
   * Check if a specific insect species has already been donated
   */
  public isDonated(insectId: string): boolean {
    return this.donations.has(insectId);
  }

  /**
   * Get all currently donated species
   */
  public getDonations(): DonatedInsectRecord[] {
    return Array.from(this.donations.values());
  }

  /**
   * Get total number of distinct donated species
   */
  public get donationCount(): number {
    return this.donations.size;
  }

  /**
   * Total species in database
   */
  public get totalSpeciesCount(): number {
    return InsectDatabase.getAll().length;
  }

  /**
   * Percentage of museum completion (0 - 100%)
   */
  public get completionPercentage(): number {
    if (this.totalSpeciesCount === 0) return 0;
    return Math.round((this.donationCount / this.totalSpeciesCount) * 100);
  }

  /**
   * Get current Curator title based on progress
   */
  public getCuratorRank(): { title: string; badge: string; color: string } {
    const count = this.donationCount;
    if (count >= 15) {
      return { title: '名誉館長 (グランドマスター)', badge: '👑', color: '#f1c40f' };
    } else if (count >= 12) {
      return { title: '上級学芸員 (エキスパート)', badge: '🥇', color: '#e67e22' };
    } else if (count >= 8) {
      return { title: '熟練学芸員 (シニア)', badge: '🥈', color: '#3498db' };
    } else if (count >= 4) {
      return { title: '見習い学芸員 (ジュニア)', badge: '🥉', color: '#2ecc71' };
    } else {
      return { title: '新米コレクター', badge: '🌱', color: '#95a5a6' };
    }
  }

  /**
   * Donate an insect from player's inventory
   */
  public donate(item: CaughtInsectRecord): boolean {
    if (this.isDonated(item.id)) {
      return false; // Already donated this species
    }

    // Remove from player's inventory basket
    const idx = this.inventory.items.indexOf(item);
    if (idx === -1) return false;
    const removed = this.inventory.removeItem(idx);
    if (!removed) return false;

    const record: DonatedInsectRecord = {
      id: item.id,
      name: item.name,
      icon: item.icon,
      rarity: item.rarity,
      size: item.size,
      donatedAt: new Date().toLocaleDateString('ja-JP')
    };

    this.donations.set(item.id, record);

    if (this.onDonationChange) {
      this.onDonationChange();
    }
    return true;
  }

  /**
   * Serialize for save
   */
  public serialize(): DonatedInsectRecord[] {
    return Array.from(this.donations.values());
  }

  /**
   * Load from saved data
   */
  public deserialize(saved: DonatedInsectRecord[]): void {
    this.donations.clear();
    if (!saved || !Array.isArray(saved)) return;
    for (const item of saved) {
      this.donations.set(item.id, item);
    }
    if (this.onDonationChange) {
      this.onDonationChange();
    }
  }
}
