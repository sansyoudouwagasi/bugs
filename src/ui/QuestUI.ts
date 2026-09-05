import { QuestManager } from '../quest/QuestManager';

export class QuestUI {
  private overlay: HTMLElement;
  private questManager: QuestManager;
  private isOpen: boolean = false;

  constructor(questManager: QuestManager) {
    this.questManager = questManager;
    this.overlay = this.createDOM();
    document.body.appendChild(this.overlay);

    this.initEvents();

    this.questManager.onQuestUpdate = () => {
      if (this.isOpen) this.renderQuests();
    };

    this.questManager.onQuestCompletedToast = (quest) => {
      this.showToast(`📜 調査依頼達成！【${quest.title}】 博士から報酬を受け取ろう！`);
    };
  }

  private createDOM(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.id = 'quest-modal-overlay';
    overlay.className = 'quest-modal-overlay hidden';
    overlay.style.display = 'none';

    overlay.innerHTML = `
      <div class="quest-modal">
        <header class="quest-header">
          <div class="quest-title-wrap">
            <span class="quest-title-icon">📜</span>
            <div class="quest-title-text">
              <h2>昆虫博士の研究室 (おねがい)</h2>
              <span class="quest-subtitle">Dr. Fabre's Field Research</span>
            </div>
          </div>
          <button id="btn-close-quest" class="quest-close-btn" aria-label="閉じる">✕</button>
        </header>

        <div class="quest-banner">
          <div class="doctor-avatar">🔬</div>
          <div class="doctor-message">
            「やあ！島の自然は実に豊かじゃな。ワシの生態系研究を手伝ってくれたら、たっぷりお礼をするよ！」
          </div>
        </div>

        <div class="quest-list-container">
          <div id="quest-list" class="quest-list"></div>
        </div>
      </div>
    `;

    return overlay;
  }

  private initEvents(): void {
    const btnClose = this.overlay.querySelector('#btn-close-quest');
    btnClose?.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    });
  }

  public open(): void {
    this.isOpen = true;
    this.overlay.classList.remove('hidden');
    this.overlay.style.display = 'flex';
    this.renderQuests();
  }

  public close(): void {
    this.isOpen = false;
    this.overlay.classList.add('hidden');
    this.overlay.style.display = 'none';
  }

  public toggle(): void {
    if (this.isOpen) this.close();
    else this.open();
  }

  private renderQuests(): void {
    const list = this.overlay.querySelector('#quest-list');
    if (!list) return;
    list.innerHTML = '';

    const activeQuests = this.questManager.quests.filter((q) => !q.isClaimed);

    if (activeQuests.length === 0) {
      list.innerHTML = `
        <div class="quest-empty">
          <span class="empty-icon">🎉</span>
          <p>現在の依頼はすべて完了しました！<br>また時間を進めて様子を見に来てください。</p>
        </div>
      `;
      return;
    }

    activeQuests.forEach((quest) => {
      const isDone = quest.isCompleted;
      const pct = Math.min(100, Math.round((quest.currentCount / quest.requiredCount) * 100));

      const card = document.createElement('div');
      card.className = `quest-card ${isDone ? 'completed' : ''}`;

      card.innerHTML = `
        <div class="quest-card-header">
          <div class="quest-card-title">
            <span class="quest-card-icon">${quest.targetIcon}</span>
            <span class="quest-name">${quest.title}</span>
          </div>
          <div class="quest-reward-pill">
            <span>💰 +${quest.rewardGold} G</span>
            ${quest.rewardTitle ? `<span class="reward-title-tag">👑 ${quest.rewardTitle}</span>` : ''}
          </div>
        </div>

        <p class="quest-desc">${quest.description}</p>

        <div class="quest-progress-section">
          <div class="quest-progress-bar">
            <div class="quest-progress-fill" style="width: ${pct}%;"></div>
          </div>
          <span class="quest-progress-text">${quest.currentCount} / ${quest.requiredCount}</span>
        </div>

        <div class="quest-card-action">
          ${
            isDone
              ? `<button class="btn-claim-reward" data-id="${quest.id}">🎉 報酬を受け取る！</button>`
              : `<span class="quest-status-pending">調査中...</span>`
          }
        </div>
      `;

      if (isDone) {
        const btn = card.querySelector('.btn-claim-reward');
        btn?.addEventListener('click', () => {
          this.questManager.claimReward(quest.id);
          this.showToast(`💰 報酬 ${quest.rewardGold} G を受け取りました！`);
          this.renderQuests();
        });
      }

      list.appendChild(card);
    });
  }

  public showToast(msg: string): void {
    const toast = document.createElement('div');
    toast.className = 'quest-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }
}
