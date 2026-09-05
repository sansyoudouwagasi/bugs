export type TimePeriod = 'morning' | 'day' | 'evening' | 'night';

export class TimeManager {
  // Game clock: represented in total game seconds (0 .. 86400)
  // Default start at 14:00 (daytime)
  private timeInSeconds: number = 14 * 3600;

  // Rate: 1 real second = 120 game seconds (2 game minutes per real second -> ~12 mins full 24h cycle)
  public timeSpeed: number = 120;

  private currentPeriod: TimePeriod = 'day';
  private onPeriodChangeCallbacks: ((period: TimePeriod) => void)[] = [];

  // DOM element for HUD badge
  private timeBadgeVal: HTMLElement | null = null;
  private timeBadgeIcon: HTMLElement | null = null;

  constructor() {
    this.timeBadgeVal = document.querySelector('.time-badge .badge-val');
    this.timeBadgeIcon = document.querySelector('.time-badge .badge-icon');

    this.currentPeriod = this.calculatePeriod();
    this.updateHUD();
  }

  public update(delta: number): void {
    this.timeInSeconds = (this.timeInSeconds + delta * this.timeSpeed) % 86400;

    const newPeriod = this.calculatePeriod();
    if (newPeriod !== this.currentPeriod) {
      this.currentPeriod = newPeriod;
      for (const cb of this.onPeriodChangeCallbacks) {
        cb(newPeriod);
      }
    }

    this.updateHUD();
  }

  public onPeriodChange(callback: (period: TimePeriod) => void): void {
    this.onPeriodChangeCallbacks.push(callback);
  }

  public getPeriod(): TimePeriod {
    return this.currentPeriod;
  }

  public getTime(): { hours: number; minutes: number; totalHours: number } {
    const totalHours = this.timeInSeconds / 3600;
    const hours = Math.floor(totalHours);
    const minutes = Math.floor((this.timeInSeconds % 3600) / 60);
    return { hours, minutes, totalHours };
  }

  public getTimeString(): string {
    const { hours, minutes } = this.getTime();
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    return `${h}:${m}`;
  }

  public getTimeIcon(): string {
    switch (this.currentPeriod) {
      case 'morning': return '🌄';
      case 'day': return '☀️';
      case 'evening': return '🌅';
      case 'night': return '🌙';
    }
  }

  /**
   * Fast forward time by given hours (useful for player sleep or debug)
   */
  public advanceHours(hours: number): void {
    this.timeInSeconds = (this.timeInSeconds + hours * 3600) % 86400;
    this.currentPeriod = this.calculatePeriod();
    for (const cb of this.onPeriodChangeCallbacks) {
      cb(this.currentPeriod);
    }
    this.updateHUD();
  }

  public setTime(hours: number, minutes: number = 0): void {
    this.timeInSeconds = (hours * 3600 + minutes * 60) % 86400;
    this.currentPeriod = this.calculatePeriod();
    for (const cb of this.onPeriodChangeCallbacks) {
      cb(this.currentPeriod);
    }
    this.updateHUD();
  }

  private calculatePeriod(): TimePeriod {
    const totalHours = this.timeInSeconds / 3600;
    if (totalHours >= 6 && totalHours < 10) return 'morning';
    if (totalHours >= 10 && totalHours < 16.5) return 'day';
    if (totalHours >= 16.5 && totalHours < 19.5) return 'evening';
    return 'night';
  }

  private updateHUD(): void {
    if (this.timeBadgeVal) {
      this.timeBadgeVal.textContent = this.getTimeString();
    }
    if (this.timeBadgeIcon) {
      this.timeBadgeIcon.textContent = this.getTimeIcon();
    }
  }
}
