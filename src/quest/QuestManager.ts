import { CaughtInsectRecord, InsectDatabase } from '../insects/InsectData';
import { ShopManager } from '../shop/ShopManager';
import { AudioManager } from '../audio/AudioManager';

export interface Quest {
  id: string;
  title: string;
  description: string;
  targetInsectId: string;
  targetInsectName: string;
  targetIcon: string;
  requiredCount: number;
  currentCount: number;
  minSize?: number;
  rewardGold: number;
  rewardTitle?: string;
  isCompleted: boolean;
  isClaimed: boolean;
}

export class QuestManager {
  public quests: Quest[] = [];
  private shopManager: ShopManager;
  private audio?: AudioManager;
  public onQuestUpdate?: () => void;
  public onQuestCompletedToast?: (quest: Quest) => void;

  constructor(shopManager: ShopManager, audio?: AudioManager) {
    this.shopManager = shopManager;
    this.audio = audio;
    this.ensureDailyQuests();
  }

  /**
   * Ensure 3 active quests are always available
   */
  public ensureDailyQuests(): void {
    if (this.quests.filter((q) => !q.isClaimed).length >= 3) return;

    const templates = [
      {
        id: 'q_butterfly_basic',
        title: 'モンシロチョウの生態調査',
        desc: '昼間の草原に飛ぶモンシロチョウを2匹観察して届けてほしい！',
        insectId: 'cabbage_butterfly',
        count: 2,
        gold: 250
      },
      {
        id: 'q_beetle_giant',
        title: '森の王者の力比べ',
        desc: '夜の森で立派なカブトムシを1匹捕まえてきておくれ。',
        insectId: 'beetle',
        count: 1,
        gold: 500
      },
      {
        id: 'q_snail_rain',
        title: '雨の日のカタツムリ',
        desc: '雨露に濡れるカタツムリの殻を研究したい。2匹頼むよ！',
        insectId: 'snail',
        count: 2,
        gold: 350
      },
      {
        id: 'q_firefly_night',
        title: '幻想的なホタルの光',
        desc: '夜の水辺で美しく光るヘイケボタルを2匹見せてくれ！',
        insectId: 'firefly',
        count: 2,
        gold: 400
      },
      {
        id: 'q_cicada_summer',
        title: '夏の音色、セミの調べ',
        desc: '木にとまるミンミンゼミを1匹調査用に捕獲してほしい。',
        insectId: 'cicada_minmin',
        count: 1,
        gold: 300
      },
      {
        id: 'q_stag_beetle',
        title: 'ノコギリクワガタの大アゴ',
        desc: '夜の木にとまるノコギリクワガタの迫力あるハサミを見せておくれ！',
        insectId: 'stag_beetle',
        count: 1,
        gold: 600
      },
      {
        id: 'q_wasp_danger',
        title: '超危険！スズメバチの脅威',
        desc: '木を揺らして襲ってくるスズメバチを網で一発捕獲する勇気ある調査だ！',
        insectId: 'wasp_giant',
        count: 1,
        gold: 1000
      },
      {
        id: 'q_legendary_hercules',
        title: '【特務】伝説のヘラクレス',
        desc: '蜜を塗った木に現れる世界最大のヘラクレスオオカブトを捕獲せよ！',
        insectId: 'hercules_beetle',
        count: 1,
        gold: 2500,
        titleReward: '神話の狩人'
      },
      {
        id: 'q_legendary_rainbow',
        title: '【特務】七色に輝く奇跡',
        desc: '蜜トラップに訪れるニジイロクワガタを慎重に忍び足で捕まえよう！',
        insectId: 'rainbow_stag',
        count: 1,
        gold: 2000,
        titleReward: '虹の探求者'
      }
    ];

    const currentIds = new Set(this.quests.map((q) => q.id));

    for (const t of templates) {
      if (this.quests.filter((q) => !q.isClaimed).length >= 3) break;
      if (currentIds.has(t.id)) continue;

      const data = InsectDatabase.getById(t.insectId);
      if (!data) continue;

      this.quests.push({
        id: t.id,
        title: t.title,
        description: t.desc,
        targetInsectId: t.insectId,
        targetInsectName: data.name,
        targetIcon: data.icon,
        requiredCount: t.count,
        currentCount: 0,
        rewardGold: t.gold,
        rewardTitle: t.titleReward,
        isCompleted: false,
        isClaimed: false
      });
      currentIds.add(t.id);
    }

    if (this.onQuestUpdate) {
      this.onQuestUpdate();
    }
  }

  /**
   * Called when player catches any insect
   */
  public handleCatch(record: CaughtInsectRecord): void {
    let changed = false;

    for (const q of this.quests) {
      if (q.isCompleted || q.isClaimed) continue;

      if (q.targetInsectId === record.id) {
        q.currentCount++;
        changed = true;

        if (q.currentCount >= q.requiredCount) {
          q.isCompleted = true;
          this.audio?.playFanfare();
          if (this.onQuestCompletedToast) {
            this.onQuestCompletedToast(q);
          }
        }
      }
    }

    if (changed && this.onQuestUpdate) {
      this.onQuestUpdate();
    }
  }

  /**
   * Claim reward for a completed quest
   */
  public claimReward(questId: string): boolean {
    const quest = this.quests.find((q) => q.id === questId);
    if (!quest || !quest.isCompleted || quest.isClaimed) return false;

    quest.isClaimed = true;
    this.shopManager.addGold(quest.rewardGold);
    this.audio?.playCoin();

    this.ensureDailyQuests();

    if (this.onQuestUpdate) {
      this.onQuestUpdate();
    }
    return true;
  }

  public serialize(): Quest[] {
    return this.quests;
  }

  public deserialize(saved: Quest[]): void {
    if (!saved || !Array.isArray(saved) || saved.length === 0) {
      this.ensureDailyQuests();
      return;
    }
    this.quests = saved;
    this.ensureDailyQuests();
  }
}
