import { CaughtInsectRecord } from '../insects/InsectData';

export class InventoryManager {
  public items: CaughtInsectRecord[] = [];
  public maxCapacity: number = 24;

  private onChangeCallbacks: ((items: CaughtInsectRecord[]) => void)[] = [];

  constructor() {
    this.loadFromStorage();
  }

  public addItem(item: CaughtInsectRecord): boolean {
    if (this.isFull()) {
      return false;
    }
    this.items.push(item);
    this.notifyChange();
    return true;
  }

  public removeItem(index: number): CaughtInsectRecord | null {
    if (index >= 0 && index < this.items.length) {
      const removed = this.items.splice(index, 1)[0];
      this.notifyChange();
      return removed;
    }
    return null;
  }

  public clearAll(): CaughtInsectRecord[] {
    const cleared = [...this.items];
    this.items = [];
    this.notifyChange();
    return cleared;
  }

  public isFull(): boolean {
    return this.items.length >= this.maxCapacity;
  }

  public getCount(): number {
    return this.items.length;
  }

  public onChange(callback: (items: CaughtInsectRecord[]) => void): void {
    this.onChangeCallbacks.push(callback);
  }

  private notifyChange(): void {
    this.saveToStorage();
    for (const cb of this.onChangeCallbacks) {
      cb(this.items);
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('bug_island_inventory', JSON.stringify(this.items));
    } catch {
      // Ignore storage quota
    }
  }

  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem('bug_island_inventory');
      if (data) {
        this.items = JSON.parse(data);
      }
    } catch {
      this.items = [];
    }
  }
}
