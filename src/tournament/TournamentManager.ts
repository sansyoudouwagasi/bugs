import { CaughtInsectRecord } from '../insects/InsectData';
import { ShopManager } from '../shop/ShopManager';
import { AudioManager } from '../audio/AudioManager';

export interface TournamentCatchEntry {
  record: CaughtInsectRecord;
  points: number;
  comboMultiplier: number;
}

export interface TournamentResult {
  score: number;
  rank: 'gold' | 'silver' | 'bronze' | 'participant';
  rankTitle: string;
  prizeMoney: number;
  trophyName: string;
  catches: TournamentCatchEntry[];
  isNewBest: boolean;
}

export class TournamentManager {
  public isRunning: boolean = false;
  public timeRemaining: number = 0;
  public totalDuration: number = 180; // 3 minutes
  public currentScore: number = 0;
  public comboCount: number = 0;
  public comboTimer: number = 0;
  public readonly comboMaxWindow: number = 25; // 25s combo window

  public catches: TournamentCatchEntry[] = [];
  public bestScore: number = 0;
  public bestRank: string = 'なし';

  private shopManager: ShopManager;
  private audio?: AudioManager;

  private onTickCallback?: (timeRemaining: number, score: number, combo: number) => void;
  private onFinishCallback?: (result: TournamentResult) => void;

  constructor(shopManager: ShopManager, audio?: AudioManager) {
    this.shopManager = shopManager;
    this.audio = audio;
    this.loadFromStorage();
  }

  public startTournament(): void {
    this.isRunning = true;
    this.timeRemaining = this.totalDuration;
    this.currentScore = 0;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.catches = [];

    this.audio?.playFanfare();
  }

  public onInsectCaught(record: CaughtInsectRecord): number {
    if (!this.isRunning) return 0;

    // 1. Combo calculation
    if (this.comboTimer > 0) {
      this.comboCount++;
    } else {
      this.comboCount = 1;
    }
    this.comboTimer = this.comboMaxWindow;

    const comboMultiplier = Math.min(2.0, 1.0 + (this.comboCount - 1) * 0.15);

    // 2. Base points by rarity
    let base = 100;
    if (record.rarity === 2) base = 200;
    else if (record.rarity === 3) base = 350;
    else if (record.rarity === 4) base = 600;
    else if (record.rarity === 5) base = 1200;

    // 3. Size bonus
    let sizeBonus = 0;
    if (record.isGiant) sizeBonus = 300;
    else if (record.isBig) sizeBonus = 120;

    const points = Math.round((base + sizeBonus) * comboMultiplier);
    this.currentScore += points;

    this.catches.push({
      record,
      points,
      comboMultiplier
    });

    return points;
  }

  public update(delta: number): void {
    if (!this.isRunning) return;

    this.timeRemaining -= delta;

    if (this.comboTimer > 0) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.comboCount = 0;
      }
    }

    if (this.onTickCallback) {
      this.onTickCallback(Math.max(0, Math.ceil(this.timeRemaining)), this.currentScore, this.comboCount);
    }

    if (this.timeRemaining <= 0) {
      this.finishTournament();
    }
  }

  public finishTournament(): TournamentResult {
    this.isRunning = false;
    this.timeRemaining = 0;

    // Calculate Rank
    let rank: 'gold' | 'silver' | 'bronze' | 'participant' = 'participant';
    let rankTitle = '参加賞';
    let prizeMoney = 200;
    let trophyName = '参加記念バッジ';

    if (this.currentScore >= 2500) {
      rank = 'gold';
      rankTitle = '🥇 ゴールドマスター賞';
      prizeMoney = 1500;
      trophyName = '黄金の虫網トロフィー🏆';
    } else if (this.currentScore >= 1600) {
      rank = 'silver';
      rankTitle = '🥈 シルバーマスター賞';
      prizeMoney = 800;
      trophyName = '白銀の虫網バッジ🥈';
    } else if (this.currentScore >= 800) {
      rank = 'bronze';
      rankTitle = '🥉 ブロンズ賞';
      prizeMoney = 400;
      trophyName = '銅の虫網バッジ🥉';
    }

    // Award prize money
    this.shopManager.earnMoney(prizeMoney);

    // Check Best Score
    let isNewBest = false;
    if (this.currentScore > this.bestScore) {
      this.bestScore = this.currentScore;
      this.bestRank = rankTitle;
      isNewBest = true;
      this.saveToStorage();
    }

    const result: TournamentResult = {
      score: this.currentScore,
      rank,
      rankTitle,
      prizeMoney,
      trophyName,
      catches: this.catches,
      isNewBest
    };

    if (this.onFinishCallback) {
      this.onFinishCallback(result);
    }

    return result;
  }

  public onTick(cb: (timeRemaining: number, score: number, combo: number) => void): void {
    this.onTickCallback = cb;
  }

  public onFinish(cb: (result: TournamentResult) => void): void {
    this.onFinishCallback = cb;
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('bug_island_tourney_best', this.bestScore.toString());
      localStorage.setItem('bug_island_tourney_rank', this.bestRank);
    } catch {
      // Ignore
    }
  }

  private loadFromStorage(): void {
    try {
      this.bestScore = parseInt(localStorage.getItem('bug_island_tourney_best') || '0', 10) || 0;
      this.bestRank = localStorage.getItem('bug_island_tourney_rank') || 'なし';
    } catch {
      this.bestScore = 0;
      this.bestRank = 'なし';
    }
  }
}
