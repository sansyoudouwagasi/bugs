import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';
import { AudioManager } from '../audio/AudioManager';
import { CaughtInsectRecord, InsectDatabase } from '../insects/InsectData';
import { SumoBattle, TOURNAMENTS, TournamentTier } from '../arena/SumoBattle';

export class SumoUI {
  private overlay: HTMLElement;
  private inventory: InventoryManager;
  private shop: ShopManager;
  private audio?: AudioManager;

  private selectedTier: TournamentTier = TOURNAMENTS[0];
  private selectedFighter: CaughtInsectRecord | null = null;
  private currentBattle: SumoBattle | null = null;
  private currentOpponentIdx: number = 0;
  private animFrameId: number | null = null;
  private isVisible: boolean = false;

  // Trophies owned
  public trophies: { [key: string]: boolean } = {};

  constructor(inventory: InventoryManager, shop: ShopManager, audio?: AudioManager) {
    this.inventory = inventory;
    this.shop = shop;
    this.audio = audio;

    this.loadTrophies();
    this.overlay = this.createDOM();
    document.body.appendChild(this.overlay);

    // Keyboard controls for Sumo
    window.addEventListener('keydown', (e) => {
      if (!this.isVisible) return;
      if (e.code === 'Space' || e.code === 'KeyE') {
        if (this.currentBattle && !this.currentBattle.isFinished) {
          e.preventDefault();
          this.handlePlayerPush();
        }
      } else if (e.code === 'Escape') {
        if (!this.currentBattle) {
          this.hide();
        }
      }
    });
  }

  private loadTrophies(): void {
    try {
      const saved = localStorage.getItem('bug_island_sumo_trophies');
      if (saved) {
        this.trophies = JSON.parse(saved);
      }
    } catch {
      this.trophies = {};
    }
  }

  private saveTrophies(): void {
    try {
      localStorage.setItem('bug_island_sumo_trophies', JSON.stringify(this.trophies));
    } catch {
      // Ignore
    }
  }

  private createDOM(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'sumo-modal-overlay hidden';
    container.innerHTML = `
      <div class="sumo-modal-card">
        <button class="sumo-close-btn" id="sumo-close-btn">✕</button>
        <div id="sumo-content-area"></div>
      </div>
    `;

    container.querySelector('#sumo-close-btn')?.addEventListener('click', () => {
      this.hide();
    });

    return container;
  }

  public show(): void {
    this.isVisible = true;
    this.overlay.classList.remove('hidden');
    this.renderLobby();
  }

  public hide(): void {
    this.isVisible = false;
    this.overlay.classList.add('hidden');
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.currentBattle = null;
  }

  /**
   * Render Lobby (Tournament select & Beetle Fighter select)
   */
  private renderLobby(): void {
    const content = this.overlay.querySelector('#sumo-content-area');
    if (!content) return;

    // Filter available beetles in player's inventory
    const fighters = this.inventory.items.filter(item => InsectDatabase.isSumoFighter(item.id));

    // Auto-select first fighter if not selected
    if (!this.selectedFighter && fighters.length > 0) {
      this.selectedFighter = fighters[0];
    } else if (fighters.length === 0) {
      this.selectedFighter = null;
    }

    content.innerHTML = `
      <div class="sumo-lobby">
        <div class="sumo-header">
          <h2>🏆 昆虫相撲コロシアム</h2>
          <p class="sumo-subtitle">捕まえた自慢の甲虫たちを出場させて島の頂点を目指せ！</p>
        </div>

        <!-- Tournament Tiers -->
        <div class="tournament-tiers">
          ${TOURNAMENTS.map(tier => {
            const isSelected = tier.id === this.selectedTier.id;
            const hasTrophy = this.trophies[tier.trophyId];
            return `
              <div class="tier-card ${isSelected ? 'selected' : ''}" data-tier-id="${tier.id}">
                <div class="tier-title">${tier.name} ${hasTrophy ? '🏆' : ''}</div>
                <div class="tier-info">参加費: ${tier.entryFee === 0 ? '無料' : `${tier.entryFee}G`}</div>
                <div class="tier-reward">優勝賞金: <b>${tier.rewardMoney}G</b></div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="sumo-selection-section">
          <h3>🥊 出場する甲虫を選択 (${fighters.length}匹)</h3>
          ${fighters.length === 0 ? `
            <div class="no-fighters-msg">
              <p>⚠️ 虫かごに相撲に出場できる甲虫がいません！</p>
              <p class="sub-hint">※カブトムシ、クワガタ類、ヘラクレス、プラチナコガネなどを捕まえてきてね！</p>
            </div>
          ` : `
            <div class="fighters-list">
              ${fighters.map(f => {
                const isCur = this.selectedFighter === f;
                const stats = InsectDatabase.getSumoStats(f);
                return `
                  <div class="fighter-card ${isCur ? 'selected' : ''}" data-fighter-id="${f.id}">
                    <div class="fighter-icon">${f.icon}</div>
                    <div class="fighter-details">
                      <div class="fighter-name">
                        ${f.name}
                        ${f.isKing ? '<span class="crown-badge king">👑キング冠</span>' : f.isGiant ? '<span class="crown-badge gold">👑</span>' : f.isBig ? '<span class="crown-badge silver">🥈</span>' : ''}
                        ${f.isBred ? `<span class="bred-badge">🧬F${f.generation || 1}</span>` : ''}
                      </div>
                      <div class="fighter-rank">番付: <b>${stats.title}</b> (Lv.${stats.level})</div>
                      <div class="fighter-stat-bars">
                        <div class="stat-row">
                          <span>パワー: <b>${stats.power}</b></span>
                          <span>ふんばり: <b>${stats.stamina}</b></span>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Training Jelly Section -->
            <div class="training-jelly-bar">
              <span class="jelly-label">🍯 樹液ゼリーで特訓:</span>
              <button class="jelly-feed-btn feed-red" ${this.shop.redJellyCount <= 0 ? 'disabled' : ''}>
                🔴 赤ゼリー (${this.shop.redJellyCount}個) [力+2]
              </button>
              <button class="jelly-feed-btn feed-green" ${this.shop.greenJellyCount <= 0 ? 'disabled' : ''}>
                🟢 緑ゼリー (${this.shop.greenJellyCount}個) [踏+2]
              </button>
            </div>
          `}
        </div>

        <div class="sumo-lobby-actions">
          <button class="sumo-start-btn" ${!this.selectedFighter || this.shop.money < this.selectedTier.entryFee ? 'disabled' : ''}>
            🔥 土俵へ上がる！（${this.selectedTier.entryFee}G）
          </button>
        </div>
      </div>
    `;

    // Tier click event
    content.querySelectorAll('.tier-card').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-tier-id');
        const found = TOURNAMENTS.find(t => t.id === id);
        if (found) {
          this.selectedTier = found;
          this.renderLobby();
        }
      });
    });

    // Fighter click event
    content.querySelectorAll('.fighter-card').forEach((el, idx) => {
      el.addEventListener('click', () => {
        this.selectedFighter = fighters[idx];
        this.renderLobby();
      });
    });

    // Jelly feeds
    content.querySelector('.feed-red')?.addEventListener('click', () => {
      if (!this.selectedFighter) return;
      const res = this.shop.feedJelly(this.selectedFighter, 'red');
      alert(res.message);
      this.renderLobby();
    });

    content.querySelector('.feed-green')?.addEventListener('click', () => {
      if (!this.selectedFighter) return;
      const res = this.shop.feedJelly(this.selectedFighter, 'green');
      alert(res.message);
      this.renderLobby();
    });

    // Start battle button
    content.querySelector('.sumo-start-btn')?.addEventListener('click', () => {
      if (!this.selectedFighter) return;
      if (this.shop.money < this.selectedTier.entryFee) {
        alert('参加費が足りません！');
        return;
      }
      this.shop.addMoney(-this.selectedTier.entryFee);
      this.currentOpponentIdx = 0;
      this.startMatch();
    });
  }

  /**
   * Start a tournament match
   */
  private startMatch(): void {
    if (!this.selectedFighter) return;
    const opponent = this.selectedTier.opponents[this.currentOpponentIdx];
    this.currentBattle = new SumoBattle(this.selectedFighter, opponent);

    if (this.audio) {
      this.audio.playGong();
    }

    this.renderBattleArena();
    this.startBattleLoop();
  }

  /**
   * Render active battle screen
   */
  private renderBattleArena(): void {
    const content = this.overlay.querySelector('#sumo-content-area');
    if (!content || !this.currentBattle) return;

    const p = this.currentBattle.playerInsect;
    const pStats = this.currentBattle.playerStats;
    const o = this.currentBattle.opponent;

    content.innerHTML = `
      <div class="sumo-battle-arena">
        <div class="battle-title-banner">
          ${this.selectedTier.name} 【第${this.currentOpponentIdx + 1}戦 / 全${this.selectedTier.opponents.length}戦】
        </div>

        <div class="battle-fighters-row">
          <!-- Player Fighter -->
          <div class="battle-fighter-card player-side">
            <div class="avatar-ring player-avatar">${p.icon}</div>
            <div class="b-fighter-name">${p.name}</div>
            <div class="b-fighter-title">${pStats.title} (Lv.${pStats.level})</div>
            <div class="stamina-gauge">
              <div class="stamina-fill player-stamina" style="width: 100%;"></div>
            </div>
          </div>

          <div class="battle-vs-badge">VS</div>

          <!-- Opponent Fighter -->
          <div class="battle-fighter-card opponent-side">
            <div class="avatar-ring opponent-avatar">${o.icon}</div>
            <div class="b-fighter-name">${o.name}</div>
            <div class="b-fighter-title">${o.title}</div>
            <div class="stamina-gauge">
              <div class="stamina-fill opp-stamina" style="width: 100%;"></div>
            </div>
          </div>
        </div>

        <!-- Circular / Linear Sumo Gauge -->
        <div class="dohyo-gauge-wrapper">
          <div class="dohyo-edge left-edge">西 土俵際</div>
          <div class="dohyo-track">
            <div class="dohyo-center-line"></div>
            <div class="dohyo-puck" id="dohyo-puck" style="left: 50%;">
              <span class="puck-spark">💥</span>
            </div>
          </div>
          <div class="dohyo-edge right-edge">東 相手際</div>
        </div>

        <!-- Counter alert banner -->
        <div class="counter-alert-banner hidden" id="counter-banner">
          ⚡ 相手が隙を見せた！今すぐ連打でうっちゃりチャンス！ ⚡
        </div>

        <!-- Interactive Tap / Action Area -->
        <div class="sumo-action-area">
          <button class="sumo-push-btn" id="sumo-push-btn">
            👊 連打で押し込め！（Space / タップ）
          </button>
        </div>
      </div>
    `;

    const pushBtn = content.querySelector('#sumo-push-btn');
    pushBtn?.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.handlePlayerPush();
    });
  }

  private handlePlayerPush(): void {
    if (!this.currentBattle || this.currentBattle.isFinished) return;
    const res = this.currentBattle.playerPush();

    if (this.audio) {
      this.audio.playClash();
      if (res.critical) {
        this.audio.playCheer();
      }
    }

    // Vibration / Pop effect on button
    const btn = this.overlay.querySelector('#sumo-push-btn');
    if (btn) {
      btn.classList.remove('pushed-anim');
      void (btn as HTMLElement).offsetWidth;
      btn.classList.add('pushed-anim');
    }
  }

  private startBattleLoop(): void {
    let lastTime = performance.now();

    const loop = (now: number) => {
      if (!this.isVisible || !this.currentBattle) return;

      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      this.currentBattle.update(delta);
      this.updateBattleHUD();

      if (this.currentBattle.isFinished) {
        this.handleBattleEnd();
      } else {
        this.animFrameId = requestAnimationFrame(loop);
      }
    };

    this.animFrameId = requestAnimationFrame(loop);
  }

  private updateBattleHUD(): void {
    if (!this.currentBattle) return;

    // Update puck position (-100 to +100 mapped to 5% to 95%)
    const pct = 50 + (this.currentBattle.position / 100) * 45;
    const puck = this.overlay.querySelector('#dohyo-puck') as HTMLElement;
    if (puck) {
      puck.style.left = `${Math.max(5, Math.min(95, pct))}%`;
    }

    // Stamina bars
    const pStamina = this.overlay.querySelector('.player-stamina') as HTMLElement;
    const oStamina = this.overlay.querySelector('.opp-stamina') as HTMLElement;
    if (pStamina) pStamina.style.width = `${this.currentBattle.playerStamina}%`;
    if (oStamina) oStamina.style.width = `${this.currentBattle.opponentStamina}%`;

    // Counter banner
    const banner = this.overlay.querySelector('#counter-banner');
    if (banner) {
      if (this.currentBattle.opponentChargeTelegraph) {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    }
  }

  private handleBattleEnd(): void {
    if (!this.currentBattle) return;

    const isWinner = this.currentBattle.winner === 'player';
    if (this.audio) {
      if (isWinner) {
        this.audio.playFanfare();
        this.audio.playCheer();
      } else {
        this.audio.playPurchase();
      }
    }

    const content = this.overlay.querySelector('#sumo-content-area');
    if (!content) return;

    const isTournamentComplete = isWinner && (this.currentOpponentIdx + 1 >= this.selectedTier.opponents.length);

    if (isTournamentComplete) {
      // Award trophy & money
      this.trophies[this.selectedTier.trophyId] = true;
      this.saveTrophies();
      this.shop.addMoney(this.selectedTier.rewardMoney);
    }

    content.innerHTML = `
      <div class="sumo-result-screen">
        <div class="result-badge ${isWinner ? 'win' : 'lose'}">
          ${isWinner ? '🎉 見事勝利！' : '😢 敗北…'}
        </div>
        <div class="result-reason">${this.currentBattle.winReason}</div>

        ${isTournamentComplete ? `
          <div class="trophy-awarded-card">
            <div class="big-trophy">🏆</div>
            <h3>${this.selectedTier.name} 制覇！</h3>
            <p>優勝賞金 <b>+${this.selectedTier.rewardMoney}G</b> を獲得しました！</p>
          </div>
        ` : ''}

        <div class="result-actions">
          ${isWinner && !isTournamentComplete ? `
            <button class="next-match-btn" id="next-match-btn">
              次の対戦相手へ！ (第${this.currentOpponentIdx + 2}戦) ⚔️
            </button>
          ` : `
            <button class="return-lobby-btn" id="return-lobby-btn">
              ロビーへ戻る 🏛️
            </button>
          `}
        </div>
      </div>
    `;

    content.querySelector('#next-match-btn')?.addEventListener('click', () => {
      this.currentOpponentIdx += 1;
      this.startMatch();
    });

    content.querySelector('#return-lobby-btn')?.addEventListener('click', () => {
      this.currentBattle = null;
      this.renderLobby();
    });
  }
}
