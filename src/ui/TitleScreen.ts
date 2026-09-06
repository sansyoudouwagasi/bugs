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
      <div class="title-backdrop-fx">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
        <div class="particle p4"></div>
        <div class="particle p5"></div>
      </div>

      <div class="title-container">
        <!-- Badge -->
        <div class="title-badge-pill">
          <span class="pulse-dot"></span>
          <span>Phase 10: 秘密基地 ＆ ブリード ＆ 伝説召喚</span>
        </div>

        <!-- Main Title Logo -->
        <div class="title-logo-box">
          <h1 class="title-main-logo">
            <span class="logo-emoji">🌴</span>
            <span class="logo-text">むしとり島</span>
            <span class="logo-sub">〜Bug Island〜</span>
          </h1>
          <p class="title-tagline">大自然の島で昆虫採集・育成・相撲バトル！</p>
        </div>

        <!-- Save Data Card (if exists) -->
        ${
          hasSave
            ? `
          <div class="title-save-card">
            <div class="save-card-header">
              <span class="save-icon">💾</span>
              <strong>前回のセーブデータ</strong>
            </div>
            <div class="save-stats-row">
              <div class="save-stat-pill">
                <span class="s-label">📖 図鑑発見数</span>
                <span class="s-val">${insectCount} 種</span>
              </div>
              <div class="save-stat-pill">
                <span class="s-label">💰 所持金</span>
                <span class="s-val">${money.toLocaleString()} G</span>
              </div>
            </div>
          </div>
        `
            : `
          <div class="title-welcome-card">
            <p class="welcome-text">南の楽園へようこそ！あみを手に、島中の珍しい虫たちを探す大冒険に出発しよう！</p>
          </div>
        `
        }

        <!-- Menu Action Buttons -->
        <div class="title-buttons-group">
          <button id="title-btn-start" class="title-btn btn-start-game">
            <span class="btn-shine"></span>
            <span class="btn-icon">${hasSave ? '▶' : '🎮'}</span>
            <span class="btn-text">${hasSave ? 'つづきから冒険する' : 'ぼうけんをはじめる'}</span>
          </button>

          <button id="title-btn-guide" class="title-btn btn-guide">
            <span class="btn-icon">📖</span>
            <span class="btn-text">あそびかた・操作方法</span>
          </button>

          ${
            hasSave
              ? `
            <button id="title-btn-reset" class="title-btn btn-reset">
              <span class="btn-icon">🔄</span>
              <span class="btn-text">データを消して最初から</span>
            </button>
          `
              : ''
          }
        </div>

        <!-- Title Footer Options -->
        <div class="title-footer-row">
          <button id="title-btn-audio" class="title-sub-btn" title="BGM/SE切り替え">
            <span class="audio-icon">${this.audio.muted ? '🔇 音声: OFF' : '🔊 音声: ON'}</span>
          </button>
          <div class="title-credit-text">
            <span>© 2026 Bug Island Project</span>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    if (!this.overlay) return;

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
        this.render(); // Re-render title without save
      }
    });

    // 4. Audio toggle button
    const audioBtn = this.overlay.querySelector('#title-btn-audio');
    audioBtn?.addEventListener('click', () => {
      const isMuted = this.audio.toggleMute();
      const iconSpan = audioBtn.querySelector('.audio-icon');
      if (iconSpan) {
        iconSpan.textContent = isMuted ? '🔇 音声: OFF' : '🔊 音声: ON';
      }
    });
  }

  private handleStart(): void {
    this.audio.playFanfare();

    // Trigger exit animation
    if (this.overlay) {
      this.overlay.classList.add('fade-out');
      setTimeout(() => {
        if (this.overlay) {
          this.overlay.style.display = 'none';
          this.overlay.classList.remove('fade-out');
        }
        this.isVisibleState = false;
        this.onStartGame();
      }, 500);
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
