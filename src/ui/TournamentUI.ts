import { TournamentManager, TournamentResult } from '../tournament/TournamentManager';

export class TournamentUI {
  private manager: TournamentManager;
  private lobbyModal: HTMLElement | null = null;
  private resultModal: HTMLElement | null = null;
  private hudOverlay: HTMLElement | null = null;

  constructor(manager: TournamentManager) {
    this.manager = manager;
    this.initLobbyModal();
    this.initHUD();
    this.initResultModal();

    // Connect manager callbacks
    this.manager.onTick((timeRemaining, score, combo) => {
      this.updateHUD(timeRemaining, score, combo);
    });

    this.manager.onFinish((result) => {
      this.hideHUD();
      this.showResult(result);
    });
  }

  /**
   * 1. Tournament Lobby Modal
   */
  private initLobbyModal(): void {
    const modal = document.createElement('div');
    modal.className = 'tournament-modal-overlay';
    modal.style.display = 'none';

    modal.innerHTML = `
      <div class="tournament-modal-card">
        <header class="tourney-header">
          <div class="tourney-title-row">
            <span class="tourney-icon">🏆</span>
            <h2 class="tourney-title">島内むしとり大会フェスティバル</h2>
          </div>
          <button class="tourney-close-btn" id="btn-close-tourney" aria-label="閉じる">✕</button>
        </header>

        <div class="tourney-body">
          <div class="tourney-intro-banner">
            <p><strong>制限時間 3分間！</strong> 島のあちこちを駆け巡り、珍しい昆虫をたくさん捕まえてハイスコアを目指そう！</p>
          </div>

          <!-- Rules & Scoring -->
          <div class="tourney-scoring-grid">
            <div class="score-rule-card">
              <div class="rule-icon">⭐</div>
              <div class="rule-title">レア度ボーナス</div>
              <div class="rule-desc">★が高い昆虫ほど高得点！(★5は1200pt)</div>
            </div>
            <div class="score-rule-card">
              <div class="rule-icon">👑</div>
              <div class="rule-title">サイズ金冠・銀冠</div>
              <div class="rule-desc">特大の金冠は+300pt、銀冠は+120pt加算！</div>
            </div>
            <div class="score-rule-card">
              <div class="rule-icon">🔥</div>
              <div class="rule-title">れんぞくコンボ</div>
              <div class="rule-desc">素早く連続で捕まえるとスコア最大2.0倍！</div>
            </div>
          </div>

          <!-- Prize Ranks -->
          <div class="tourney-ranks-box">
            <h3 class="ranks-title">🎖️ 表彰ランク＆賞金</h3>
            <div class="ranks-row">
              <span class="rank-badge gold">🥇 ゴールド (2500pt〜)</span>
              <span class="rank-prize">1,500 G ＋ 黄金の虫網トロフィー🏆</span>
            </div>
            <div class="ranks-row">
              <span class="rank-badge silver">🥈 シルバー (1600pt〜)</span>
              <span class="rank-prize">800 G ＋ 白銀の虫網バッジ🥈</span>
            </div>
            <div class="ranks-row">
              <span class="rank-badge bronze">🥉 ブロンズ (800pt〜)</span>
              <span class="rank-prize">400 G ＋ 銅の虫網バッジ🥉</span>
            </div>
          </div>

          <!-- Player Best -->
          <div class="tourney-best-box">
            <span>これまでの自己ベスト:</span>
            <strong class="best-score-val" id="tourney-best-val">${this.manager.bestScore.toLocaleString()} pt (${this.manager.bestRank})</strong>
          </div>

          <!-- Entry Button -->
          <button class="tourney-start-btn" id="btn-start-tourney">
            <span class="btn-trophy">🚩</span> 大会にエントリー（スタート！）
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.lobbyModal = modal;

    // Events
    modal.querySelector('#btn-close-tourney')?.addEventListener('click', () => this.closeLobby());
    modal.querySelector('#btn-start-tourney')?.addEventListener('click', () => {
      this.closeLobby();
      this.manager.startTournament();
      this.showHUD();
    });
  }

  /**
   * 2. Tournament In-Game Floating HUD
   */
  private initHUD(): void {
    const hud = document.createElement('div');
    hud.id = 'tournament-hud';
    hud.className = 'tournament-hud-bar';
    hud.style.display = 'none';

    hud.innerHTML = `
      <div class="tourney-hud-timer">
        <span class="hud-label">残り時間</span>
        <span class="hud-time-val" id="thud-time">03:00</span>
      </div>
      <div class="tourney-hud-score">
        <span class="hud-label">スコア</span>
        <span class="hud-score-val" id="thud-score">0 pt</span>
      </div>
      <div class="tourney-hud-combo" id="thud-combo-box" style="display: none;">
        <span class="hud-combo-flame">🔥</span>
        <span class="hud-combo-val" id="thud-combo-val">x2 (1.15x)</span>
      </div>
    `;

    document.body.appendChild(hud);
    this.hudOverlay = hud;
  }

  private updateHUD(timeRemaining: number, score: number, combo: number): void {
    if (!this.hudOverlay) return;

    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const timeEl = this.hudOverlay.querySelector('#thud-time');
    const scoreEl = this.hudOverlay.querySelector('#thud-score');
    const comboBox = this.hudOverlay.querySelector('#thud-combo-box') as HTMLElement;
    const comboEl = this.hudOverlay.querySelector('#thud-combo-val');

    if (timeEl) timeEl.textContent = timeStr;
    if (scoreEl) scoreEl.textContent = `${score.toLocaleString()} pt`;

    if (combo >= 2 && comboBox && comboEl) {
      comboBox.style.display = 'flex';
      const mult = Math.min(2.0, 1.0 + (combo - 1) * 0.15).toFixed(2);
      comboEl.textContent = `x${combo} (${mult}x)`;
    } else if (comboBox) {
      comboBox.style.display = 'none';
    }
  }

  public showHUD(): void {
    if (this.hudOverlay) this.hudOverlay.style.display = 'flex';
  }

  public hideHUD(): void {
    if (this.hudOverlay) this.hudOverlay.style.display = 'none';
  }

  /**
   * 3. Tournament Result Modal
   */
  private initResultModal(): void {
    const modal = document.createElement('div');
    modal.className = 'tournament-modal-overlay';
    modal.style.display = 'none';

    modal.innerHTML = `
      <div class="tournament-modal-card result-card">
        <header class="tourney-header result-header">
          <span class="tourney-icon">🎉</span>
          <h2 class="tourney-title">むしとり大会 終了！</h2>
        </header>

        <div class="tourney-body result-body" id="tourney-result-content">
          <!-- Filled dynamically -->
        </div>

        <footer class="tourney-result-footer">
          <button class="tourney-ok-btn" id="btn-result-ok">賞金を受け取って戻る</button>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);
    this.resultModal = modal;

    modal.querySelector('#btn-result-ok')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  private showResult(result: TournamentResult): void {
    if (!this.resultModal) return;
    const content = this.resultModal.querySelector('#tourney-result-content');
    if (!content) return;

    let catchListHtml = '';
    result.catches.forEach((c) => {
      const crown = c.record.isGiant ? '👑' : c.record.isBig ? '🥈' : '';
      catchListHtml += `
        <div class="res-catch-item">
          <span class="res-icon">${c.record.icon}</span>
          <span class="res-name">${c.record.name} ${crown}</span>
          <span class="res-size">${c.record.size.toFixed(1)}mm</span>
          <span class="res-pts">+${c.points} pt</span>
        </div>
      `;
    });

    content.innerHTML = `
      <div class="res-rank-banner ${result.rank}">
        <div class="res-rank-trophy">🏆</div>
        <div class="res-rank-name">${result.rankTitle}</div>
        <div class="res-score-big">${result.score.toLocaleString()} <span class="pts-unit">pt</span></div>
        ${result.isNewBest ? '<div class="new-record-tag">✨ NEW RECORD 自己新記録！ ✨</div>' : ''}
      </div>

      <div class="res-prize-row">
        <span>獲得賞金:</span>
        <strong class="res-prize-money">+${result.prizeMoney.toLocaleString()} G</strong>
      </div>

      <div class="res-catches-title">捕まえた昆虫 (合計 ${result.catches.length} 匹)</div>
      <div class="res-catches-scroll">
        ${catchListHtml || '<p class="no-catches">昆虫を捕まえられませんでした...</p>'}
      </div>
    `;

    this.resultModal.style.display = 'flex';
  }

  public openLobby(): void {
    if (this.lobbyModal) {
      const bestEl = this.lobbyModal.querySelector('#tourney-best-val');
      if (bestEl) {
        bestEl.textContent = `${this.manager.bestScore.toLocaleString()} pt (${this.manager.bestRank})`;
      }
      this.lobbyModal.style.display = 'flex';
    }
  }

  public closeLobby(): void {
    if (this.lobbyModal) this.lobbyModal.style.display = 'none';
  }

  public toggleLobby(): void {
    if (this.lobbyModal?.style.display === 'flex') {
      this.closeLobby();
    } else {
      this.openLobby();
    }
  }
}
