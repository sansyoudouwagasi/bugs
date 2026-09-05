import { InsectDatabase, InsectData, CaughtInsectRecord } from '../insects/InsectData';

export interface InsectBookEntry {
  data: InsectData;
  discovered: boolean;
  catchCount: number;
  maxSize: number; // in mm
  firstCaughtAt?: Date;
}

export class CollectionManager {
  private entries: Map<string, InsectBookEntry> = new Map();

  constructor() {
    this.initializeEntries();
  }

  private initializeEntries(): void {
    const allInsects = InsectDatabase.getAll();
    for (const insect of allInsects) {
      this.entries.set(insect.id, {
        data: insect,
        discovered: false,
        catchCount: 0,
        maxSize: 0,
      });
    }
  }

  /**
   * Register a newly caught insect.
   * Returns true if this is the first time catching this insect.
   */
  public registerCatch(record: CaughtInsectRecord): boolean {
    let entry = this.entries.get(record.id);
    if (!entry) {
      const data = InsectDatabase.getById(record.id);
      if (!data) return false;
      entry = {
        data,
        discovered: false,
        catchCount: 0,
        maxSize: 0,
      };
      this.entries.set(record.id, entry);
    }

    const isFirstTime = !entry.discovered;
    entry.discovered = true;
    entry.catchCount += 1;
    if (record.size > entry.maxSize) {
      entry.maxSize = record.size;
    }
    if (isFirstTime) {
      entry.firstCaughtAt = new Date();
    }

    return isFirstTime;
  }

  public getEntry(id: string): InsectBookEntry | undefined {
    return this.entries.get(id);
  }

  public getAllEntries(): InsectBookEntry[] {
    return Array.from(this.entries.values());
  }

  public getDiscoveredCount(): number {
    let count = 0;
    for (const entry of this.entries.values()) {
      if (entry.discovered) count++;
    }
    return count;
  }

  public getTotalCount(): number {
    return this.entries.size;
  }
}
