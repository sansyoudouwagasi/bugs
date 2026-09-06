import { AudioManager } from '../audio/AudioManager';
import { HowToPlayUI } from './HowToPlayUI';
import { SaveManager, GameSaveData } from '../save/SaveManager';

export class TitleScreen {
  private overlay: HTMLElement | null = null;
  private audio: AudioManager;
  private howToPlayUI: HowToPlayUI;
  private onStartGame: () => void;
  private onResetGame: () => void;
  private isVisibleState: boolean = true;

  constructor(
    audio: AudioManager,
    howToPlayUI: HowToPlayUI,
    onStartGame: () => void,
    onResetGame: () => void
  ) {
    this.audio = audio;
    this.howToPlayUI = howToPlayUI;
    this.onStartGame = onStartGame;
    this.onResetGame = onResetGame;

    this.createDOM();
  }

  private createDOM(): void {
    this.overlay = document.createElement('div');
    this.overlay.id = 'title-screen-overlay';
    this.overlay.className = 'title-screen-overlay';

    this.render();
    document.body.appendChild(this.overlay);
  }

  public render(): void {
    if (!this.overlay) return;

    const savedData: GameSaveData | null = SaveManager.load();
    const hasSave = savedData !== null;

    let insectCount = 0;
    if (savedData?.collection) {
      insectCount = Object.keys(savedData.collection).length;
    }
    const money = savedData?.money ?? 0;

    this.overlay.innerHTML = `
      <!-- Dynamic Nature Art Background with Ken Burns Slow Zoom -->
      <div class="title-nature-bg"></div>
      <div class="title-nature-overlay"></div>

      <!-- Floating Sunbeams & Light Particles -->
      <div class="title-sunbeams"></div>
      <div class="title-backdrop-fx">
        <div class="p-leaf pl1">🍃</div>
        <div class="p-leaf pl2">🌸</div>
        <div class="p-leaf pl3">✨</div>
        <div class="p-leaf pl4">🦋</div>
        <div class="p-leaf pl5">🍃</div>
        <div class="p-leaf pl6">✨</div>
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
      </div>

      <div class="title-stage">
        <!-- Top Banner Header -->
        <div class="title-top-badge">
          <span class="badge-star">⭐</span>
          <span class="badge-text">南の楽園オープンワールド昆虫採集アドベンチャー</span>
        </div>

        <!-- Main Center Hero Area -->
        <div class="title-hero">
          <div class="title-logo-wrapper">
            <div class="logo-accent-icon">👑</div>
            <h1 class="game-brand-title">
              <span class="brand-sub">BUG ISLAND ADVENTURE</span>
              <span class="brand-main">むしとり島</span>
              <span class="brand-caption">〜神秘の古代樹と伝説の昆虫たち〜</span>
            </h1>
          </div>

          <div class="title-features-pills">
            <span class="feat-pill">🌴 島の全域探検</span>
            <span class="feat-pill">🥊 昆虫相撲バトル</span>
            <span class="feat-pill">🔬 ブリード育成</span>
            <span class="feat-pill">🏛️ テラリウム博物館</span>
          </div>
        </div>

        <!-- Action Control Center Card -->
        <div class="title-menu-panel">
          ${
            hasSave
              ? `
            <div class="title-save-badge">
              <div class="save-status-indicator">
                <span class="save-icon-sparkle">💾</span>
                <span class="save-status-text">冒険のきろく</span>
              </div>
              <div class="save-pills-row">
                <div class="save-micro-stat">
                  <span class="sms-icon">📖</span>
                  <span class="sms-label">発見</span>
                  <strong class="sms-val">${insectCount} 種</strong>
                </div>
                <div class="save-micro-stat">
                  <span class="sms-icon">💰</span>
                  <span class="sms-label">所持金</span>
                  <strong class="sms-val">${money.toLocaleString()} G</strong>
                </div>
              </div>
            </div>
          `
              : `
            <div class="title-intro-banner">
              <span class="intro-icon">🏕️</span>
              <div class="intro-desc">
                <strong>冒険の準備は万全ですか？</strong>
                <p>あみと虫かごを片手に、未知の昆虫が眠る島へ旅立とう！</p>
              </div>
            </div>
          `
          }

          <!-- Buttons Row -->
          <div class="title-actions">
            <button id="title-btn-start" class="title-cta-btn btn-hero-start">
              <span class="cta-glimmer"></span>
              <span class="cta-icon">${hasSave ? '▶' : '🎮'}</span>
              <span class="cta-text-group">
                <span class="cta-main-label">${hasSave ? 'つづきから冒険する' : 'ぼうけんをはじめる'}</span>
                <span class="cta-sub-label">${hasSave ? '前回セーブした場所から再開' : '南の島のビーチからスタート'}</span>
              </span>
              <span class="cta-arrow">➔</span>
            </button>

            <button id="title-btn-guide" class="title-cta-btn btn-hero-guide">
              <span class="cta-icon">📖</span>
              <span class="cta-text-group">
                <span class="cta-main-label">あそびかた ＆ 操作方法</span>
                <span class="cta-sub-label">操作ガイド・虫捕りのコツ・特別機能</span>
              </span>
            </button>

            ${
              hasSave
                ? `
              <button id="title-btn-reset" class="title-sub-link-btn">
                <span>🔄 データを初期化して最初から遊ぶ</span>
              </button>
            `
                : ''
            }
          </div>

          <!-- Footer Settings inside panel -->
          <div class="title-bottom-bar">
            <button id="title-btn-audio" class="audio-toggle-chip" title="サウンド切り替え">
              <span class="atc-icon">${this.audio.muted ? '🔇' : '🔊'}</span>
              <span class="atc-label">${this.audio.muted ? 'サウンド: OFF' : 'BGM/環境音: ON'}</span>
            </button>
            <div class="title-version-stamp">Ver 10.0 • Bug Island</div>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    if (!this.overlay) return;

    // Hover sounds for interactive buttons
    const interactiveButtons = this.overlay.querySelectorAll<HTMLElement>('.title-cta-btn, .audio-toggle-chip, .title-sub-link-btn');
    interactiveButtons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        this.audio.playFootstep();
      });
    });

    // 1. Start Game button
    const startBtn = this.overlay.querySelector('#title-btn-start');
    startBtn?.addEventListener('click', () => {
      this.handleStart();
    });

    // 2. How to Play button
    const guideBtn = this.overlay.querySelector('#title-btn-guide');
    guideBtn?.addEventListener('click', () => {
      this.audio.playClick();
      this.howToPlayUI.open('controls');
    });

    // 3. Reset Game button
    const resetBtn = this.overlay.querySelector('#title-btn-reset');
    resetBtn?.addEventListener('click', () => {
      this.audio.playClick();
      if (confirm('【注意】セーブデータを消去して最初から始めますか？\n（図鑑の記録や所持金はすべて初期化されます）')) {
        this.onResetGame();
        this.render();
      }
    });

    // 4. Audio toggle button
    const audioBtn = this.overlay.querySelector('#title-btn-audio');
    audioBtn?.addEventListener('click', () => {
      const isMuted = this.audio.toggleMute();
      const iconSpan = audioBtn.querySelector('.atc-icon');
      const labelSpan = audioBtn.querySelector('.atc-label');
      if (iconSpan) iconSpan.textContent = isMuted ? '🔇' : '🔊';
      if (labelSpan) labelSpan.textContent = isMuted ? 'サウンド: OFF' : 'BGM/環境音: ON';
    });
  }

  private handleStart(): void {
    this.audio.playFanfare();

    if (this.overlay) {
      this.overlay.classList.add('fade-out');
      setTimeout(() => {
        if (this.overlay) {
          this.overlay.style.display = 'none';
          this.overlay.classList.remove('fade-out');
        }
        this.isVisibleState = false;
        this.onStartGame();
      }, 600);
    } else {
      this.isVisibleState = false;
      this.onStartGame();
    }
  }

  public show(): void {
    this.isVisibleState = true;
    this.render();
    if (this.overlay) {
      this.overlay.style.display = 'flex';
      this.overlay.classList.remove('fade-out');
      this.overlay.classList.add('fade-in');
    }
  }

  public hide(): void {
    this.isVisibleState = false;
    if (this.overlay) {
      this.overlay.style.display = 'none';
      this.overlay.classList.remove('fade-in');
    }
  }

  public isVisible(): boolean {
    return this.isVisibleState;
  }
}
