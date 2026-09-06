import insectsJson from './insects.json';

export interface InsectData {
  id: string;
  name: string;
  description: string;
  modelType: 'butterfly' | 'grasshopper' | 'ladybug' | string;
  icon: string;
  rarity: number; // 1 to 5
  minSize: number; // in mm
  maxSize: number; // in mm
  basePrice: number;
  moveSpeed: number;
  alertDistance: number;
  flightHeight: number;
  habitats: string[];
  activeTime: string[];
  weather: string[];
  primaryColor: string;
  secondaryColor: string;
}

export interface CaughtInsectRecord {
  id: string;
  name: string;
  icon: string;
  rarity: number;
  size: number; // actual caught size in mm
  isBig: boolean;
  isGiant: boolean;
  caughtAt: Date;
  // Phase 8: Sumo & Training stats
  level?: number;
  power?: number;
  stamina?: number;
  // Phase 10: Breeding & Variants
  isKing?: boolean;
  isBred?: boolean;
  generation?: number;
  shinyColor?: string;
  shinyName?: string;
}

export interface SumoStats {
  power: number; // 押し出し力
  stamina: number; // ふんばり持久力
  weight: number; // 重さ・耐性
  level: number;
  title: string;
}

export class InsectDatabase {
  private static insects: Map<string, InsectData> = new Map();

  public static readonly SUMO_FIGHTER_IDS = [
    'rhinoceros_beetle',
    'stag_beetle_sawtooth',
    'stag_beetle_miyama',
    'stag_beetle_giant',
    'hercules_beetle',
    'rainbow_stag',
    'platinum_beetle',
    'giant_water_bug',
    'caucasus_beetle',
    'golden_stag',
    'meganeura'
  ];

  public static isSumoFighter(id: string): boolean {
    return this.SUMO_FIGHTER_IDS.includes(id);
  }

  public static getSumoStats(record: CaughtInsectRecord): SumoStats {
    return this.calculateSumoStats(record);
  }

  /**
   * Phase 8: Calculate beetle combat attributes for Insect Sumo Tournament
   */
  public static calculateSumoStats(record: CaughtInsectRecord): SumoStats {
    let basePower = 30;
    let baseStamina = 30;
    let baseWeight = 25;
    const level = record.level || 1;
    const bonusPower = record.power || 0;
    const bonusStamina = record.stamina || 0;

    switch (record.id) {
      case 'rhinoceros_beetle':
        basePower = 50;
        baseStamina = 45;
        baseWeight = 40;
        break;
      case 'stag_beetle_sawtooth':
        basePower = 42;
        baseStamina = 42;
        baseWeight = 36;
        break;
      case 'stag_beetle_miyama':
        basePower = 46;
        baseStamina = 38;
        baseWeight = 38;
        break;
      case 'stag_beetle_giant':
        basePower = 55;
        baseStamina = 50;
        baseWeight = 48;
        break;
      case 'rainbow_stag':
        basePower = 52;
        baseStamina = 55;
        baseWeight = 44;
        break;
      case 'platinum_beetle':
        basePower = 50;
        baseStamina = 60;
        baseWeight = 50;
        break;
      case 'giant_water_bug':
        basePower = 58;
        baseStamina = 52;
        baseWeight = 46;
        break;
      case 'hercules_beetle':
        basePower = 70;
        baseStamina = 65;
        baseWeight = 65;
        break;
      // Phase 10: New Apex Sumo Fighters
      case 'caucasus_beetle':
        basePower = 74;
        baseStamina = 68;
        baseWeight = 68;
        break;
      case 'golden_stag':
        basePower = 62;
        baseStamina = 64;
        baseWeight = 52;
        break;
      case 'meganeura':
        basePower = 82;
        baseStamina = 76;
        baseWeight = 62;
        break;
      default:
        basePower = 25;
        baseStamina = 25;
        baseWeight = 20;
    }

    // Size multiplier (Bigger beetles have massive sumo advantage)
    let sizeMult = 1.0;
    if (record.isKing) {
      sizeMult = 1.55; // +55% for King Crown (Bred Apex)
    } else if (record.isGiant) {
      sizeMult = 1.35; // +35% for Giant crown
    } else if (record.isBig) {
      sizeMult = 1.15; // +15% for Big crown
    }

    // Bred individual boost
    const bredBonus = record.isBred ? 8 : 0;

    const power = Math.round((basePower * sizeMult) + (level - 1) * 3 + bonusPower + bredBonus);
    const stamina = Math.round((baseStamina * sizeMult) + (level - 1) * 3 + bonusStamina + bredBonus);
    const weight = Math.round(baseWeight * sizeMult + (record.isKing ? 10 : 0));

    let title = '前頭';
    if (power + stamina > 190) {
      title = '大天翔';
    } else if (power + stamina > 160) {
      title = '横綱';
    } else if (power + stamina > 130) {
      title = '大関';
    } else if (power + stamina > 105) {
      title = '関脇';
    } else if (power + stamina > 85) {
      title = '小結';
    }

    return { power, stamina, weight, level, title };
  }

  public static initialize(): void {
    if (this.insects.size > 0) return;
    for (const item of insectsJson as InsectData[]) {
      this.insects.set(item.id, item);
    }
  }

  public static getAll(): InsectData[] {
    this.initialize();
    return Array.from(this.insects.values());
  }

  public static getById(id: string): InsectData | undefined {
    this.initialize();
    return this.insects.get(id);
  }

  public static rollSize(data: InsectData): { size: number; isBig: boolean; isGiant: boolean } {
    // Normal distribution-like roll
    const rand = (Math.random() + Math.random()) / 2;
    const baseSize = data.minSize + (data.maxSize - data.minSize) * rand;

    // Big / Giant chance
    const roll = Math.random();
    let size = Math.round(baseSize * 10) / 10;
    let isBig = false;
    let isGiant = false;

    if (roll < 0.03) {
      // GIANT size (+25%)
      size = Math.round(data.maxSize * (1.15 + Math.random() * 0.15) * 10) / 10;
      isGiant = true;
      isBig = true;
    } else if (roll < 0.15) {
      // BIG size (+10%)
      size = Math.round(data.maxSize * (1.02 + Math.random() * 0.08) * 10) / 10;
      isBig = true;
    }

    return { size, isBig, isGiant };
  }
}
