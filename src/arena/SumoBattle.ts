import { CaughtInsectRecord, InsectDatabase, SumoStats } from '../insects/InsectData';

export interface TournamentTier {
  id: string;
  name: string;
  entryFee: number;
  rewardMoney: number;
  trophyId: string;
  opponents: Array<{
    id: string;
    name: string;
    icon: string;
    power: number;
    stamina: number;
    weight: number;
    title: string;
  }>;
}

export const TOURNAMENTS: TournamentTier[] = [
  {
    id: 'beginner',
    name: '🌱 ビギナー杯',
    entryFee: 0,
    rewardMoney: 150,
    trophyId: 'trophy_bronze',
    opponents: [
      {
        id: 'stag_beetle_sawtooth',
        name: '若武者ノコギリ',
        icon: '🪲',
        power: 35,
        stamina: 32,
        weight: 30,
        title: '前頭'
      },
      {
        id: 'rhinoceros_beetle',
        name: '黒鉄のカブト',
        icon: '🪲',
        power: 45,
        stamina: 42,
        weight: 40,
        title: '小結'
      }
    ]
  },
  {
    id: 'expert',
    name: '⚡ エキスパート杯',
    entryFee: 50,
    rewardMoney: 450,
    trophyId: 'trophy_silver',
    opponents: [
      {
        id: 'stag_beetle_miyama',
        name: '金毛のミヤマ',
        icon: '🪲',
        power: 52,
        stamina: 48,
        weight: 42,
        title: '関脇'
      },
      {
        id: 'stag_beetle_giant',
        name: '不動のオオクワ',
        icon: '🪲',
        power: 62,
        stamina: 58,
        weight: 52,
        title: '大関'
      }
    ]
  },
  {
    id: 'championship',
    name: '👑 チャンピオンシップ',
    entryFee: 150,
    rewardMoney: 1200,
    trophyId: 'trophy_gold',
    opponents: [
      {
        id: 'rainbow_stag',
        name: '七彩のニジイロ',
        icon: '🪲',
        power: 68,
        stamina: 66,
        weight: 48,
        title: '大関'
      },
      {
        id: 'platinum_beetle',
        name: '白銀のプラチナ',
        icon: '🪙',
        power: 74,
        stamina: 80,
        weight: 55,
        title: '大関'
      },
      {
        id: 'hercules_beetle',
        name: '森の覇王ヘラクレス',
        icon: '👑',
        power: 90,
        stamina: 88,
        weight: 75,
        title: '横綱'
      }
    ]
  }
];

export class SumoBattle {
  public playerInsect: CaughtInsectRecord;
  public playerStats: SumoStats;
  public opponent: {
    id: string;
    name: string;
    icon: string;
    power: number;
    stamina: number;
    weight: number;
    title: string;
  };

  // State
  public position: number = 0; // -100 to +100
  public playerStamina: number = 100;
  public opponentStamina: number = 100;
  public isFinished: boolean = false;
  public winner: 'player' | 'opponent' | null = null;
  public winReason: string = '';

  // AI & Action timing
  private opponentPushTimer: number = 0;
  public opponentChargeTelegraph: boolean = false;
  private telegraphTimer: number = 0;

  constructor(
    playerInsect: CaughtInsectRecord,
    opponent: {
      id: string;
      name: string;
      icon: string;
      power: number;
      stamina: number;
      weight: number;
      title: string;
    }
  ) {
    this.playerInsect = playerInsect;
    this.playerStats = InsectDatabase.getSumoStats(playerInsect);
    this.opponent = opponent;
    this.position = 0;
  }

  /**
   * Player taps / presses button to push forward
   */
  public playerPush(): { moved: number; critical: boolean } {
    if (this.isFinished) return { moved: 0, critical: false };

    let pushForce = (this.playerStats.power / 22) + Math.random() * 2;

    // Counter / Utchari chance if opponent is telegraphing
    let critical = false;
    if (this.opponentChargeTelegraph) {
      pushForce *= 2.8; // Huge counter push!
      critical = true;
      this.opponentChargeTelegraph = false;
      this.telegraphTimer = 0;
      this.opponentStamina = Math.max(0, this.opponentStamina - 20);
    }

    // Stamina effect
    if (this.playerStamina <= 20) {
      pushForce *= 0.6; // Tired
    } else {
      this.playerStamina = Math.max(0, this.playerStamina - 1.2);
    }

    this.position += pushForce;
    this.checkWinner();

    return { moved: pushForce, critical };
  }

  /**
   * Update battle tick (60fps)
   */
  public update(delta: number): void {
    if (this.isFinished) return;

    // Stamina natural slow recovery
    this.playerStamina = Math.min(100, this.playerStamina + delta * 2.5);
    this.opponentStamina = Math.min(100, this.opponentStamina + delta * 2.5);

    // Opponent AI behavior
    this.opponentPushTimer += delta;
    if (this.opponentChargeTelegraph) {
      this.telegraphTimer -= delta;
      if (this.telegraphTimer <= 0) {
        // Telegraph complete! Unleash heavy push!
        this.opponentChargeTelegraph = false;
        const heavyPush = (this.opponent.power / 18) * 2.5;
        this.position -= heavyPush;
        this.checkWinner();
      }
    } else {
      // Normal continuous AI push
      const pushInterval = 0.25 + Math.random() * 0.2;
      if (this.opponentPushTimer > pushInterval) {
        this.opponentPushTimer = 0;

        // Chance to start telegraphing a giant charge
        if (Math.random() < 0.18 && !this.opponentChargeTelegraph) {
          this.opponentChargeTelegraph = true;
          this.telegraphTimer = 0.85; // 0.85s reaction window
        } else {
          // Regular push
          const oppPush = (this.opponent.power / 26) + Math.random() * 1.5;
          this.position -= oppPush;
          this.checkWinner();
        }
      }
    }
  }

  private checkWinner(): void {
    if (this.position >= 100) {
      this.isFinished = true;
      this.winner = 'player';
      this.winReason = '寄り切り！ 見事土俵の外へ押し出した！';
    } else if (this.position <= -100) {
      this.isFinished = true;
      this.winner = 'opponent';
      this.winReason = '押し出し！ 相手の怪力に押し切られた…';
    }
  }
}
