import * as THREE from 'three';
import { CameraController } from '../player/CameraController';
import { AudioManager } from '../audio/AudioManager';

export class PhotoModeUI {
  private overlay: HTMLElement;
  private camera: THREE.PerspectiveCamera;
  private audio?: AudioManager;
  private originalFov: number;
  public isActive: boolean = false;
  public currentFilter: string = 'none';

  constructor(
    camera: THREE.PerspectiveCamera,
    _cameraCtrl: CameraController,
    audio?: AudioManager
  ) {
    this.camera = camera;
    this.audio = audio;
    this.originalFov = camera.fov;

    this.overlay = this.createDOM();
    document.body.appendChild(this.overlay);

    this.initEvents();
  }

  private createDOM(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.id = 'photo-mode-overlay';
    overlay.className = 'photo-mode-overlay hidden';
    overlay.style.display = 'none';

    overlay.innerHTML = `
      <div class="photo-viewfinder">
        <div class="viewfinder-corner top-left"></div>
        <div class="viewfinder-corner top-right"></div>
        <div class="viewfinder-corner bottom-left"></div>
        <div class="viewfinder-corner bottom-right"></div>
        <div class="viewfinder-center"></div>
      </div>

      <!-- Top info bar -->
      <div class="photo-top-bar">
        <span class="photo-mode-title">📷 観察フォトモード</span>
        <button id="btn-exit-photo" class="photo-btn-exit" title="フォトモード終了">✕ 戻る (Z)</button>
      </div>

      <!-- Bottom Controls Toolbar -->
      <div class="photo-bottom-toolbar">
        <!-- Zoom Slider -->
        <div class="photo-control-group">
          <span class="ctrl-label">🔍 ズーム</span>
          <input type="range" id="photo-zoom-slider" min="20" max="70" value="55" step="1" />
        </div>

        <!-- Filter Selector -->
        <div class="photo-control-group">
          <span class="ctrl-label">🎨 フィルター</span>
          <div class="filter-buttons">
            <button class="btn-filter active" data-filter="none">標準</button>
            <button class="btn-filter" data-filter="vivid">鮮やか</button>
            <button class="btn-filter" data-filter="retro">レトロ</button>
            <button class="btn-filter" data-filter="sunset">夕暮れ</button>
            <button class="btn-filter" data-filter="mono">モノクロ</button>
          </div>
        </div>

        <!-- Big Shutter Button -->
        <div class="photo-shutter-wrap">
          <button id="btn-photo-shutter" class="btn-shutter" title="写真を撮影！">
            <span class="shutter-inner">📸</span>
          </button>
        </div>
      </div>

      <!-- Photo Preview Modal -->
      <div id="photo-preview-modal" class="photo-preview-modal hidden" style="display: none;">
        <div class="preview-card">
          <header class="preview-header">
            <h3>✨ ベストショット！</h3>
            <button id="btn-close-preview" class="btn-preview-close">✕</button>
          </header>
          <div class="preview-img-container">
            <img id="photo-preview-img" src="" alt="Captured Bug Island Photo" />
          </div>
          <div class="preview-actions">
            <a id="btn-download-photo" class="btn-download-photo" download="bug_island_photo.png">
              💾 画像を保存する
            </a>
          </div>
        </div>
      </div>
    `;

    return overlay;
  }

  private initEvents(): void {
    const btnExit = this.overlay.querySelector('#btn-exit-photo');
    btnExit?.addEventListener('click', () => this.exit());

    const zoomSlider = this.overlay.querySelector('#photo-zoom-slider') as HTMLInputElement;
    zoomSlider?.addEventListener('input', () => {
      const fov = parseFloat(zoomSlider.value);
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    });

    const filterBtns = this.overlay.querySelectorAll('.btn-filter');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'none';
        this.applyFilter(filter);
      });
    });

    const shutter = this.overlay.querySelector('#btn-photo-shutter');
    shutter?.addEventListener('click', () => this.takePhoto());

    const btnClosePreview = this.overlay.querySelector('#btn-close-preview');
    btnClosePreview?.addEventListener('click', () => {
      const modal = this.overlay.querySelector('#photo-preview-modal') as HTMLElement;
      if (modal) modal.style.display = 'none';
    });
  }

  private applyFilter(filter: string): void {
    this.currentFilter = filter;
    const canvas = document.querySelector('#canvas-container canvas') as HTMLElement;
    if (!canvas) return;

    switch (filter) {
      case 'vivid':
        canvas.style.filter = 'saturate(1.6) contrast(1.1)';
        break;
      case 'retro':
        canvas.style.filter = 'sepia(0.55) contrast(1.05) brightness(0.95)';
        break;
      case 'sunset':
        canvas.style.filter = 'sepia(0.35) hue-rotate(-15deg) saturate(1.4)';
        break;
      case 'mono':
        canvas.style.filter = 'grayscale(1) contrast(1.2)';
        break;
      default:
        canvas.style.filter = 'none';
        break;
    }
  }

  public enter(): void {
    this.isActive = true;
    this.overlay.classList.remove('hidden');
    this.overlay.style.display = 'block';

    // Hide normal HUD
    const hud = document.getElementById('hud-overlay');
    if (hud) hud.style.visibility = 'hidden';

    // Reset zoom slider to current fov
    const zoomSlider = this.overlay.querySelector('#photo-zoom-slider') as HTMLInputElement;
    if (zoomSlider) zoomSlider.value = this.camera.fov.toString();
  }

  public exit(): void {
    this.isActive = false;
    this.overlay.classList.add('hidden');
    this.overlay.style.display = 'none';

    // Reset filter
    this.applyFilter('none');

    // Restore camera fov
    this.camera.fov = this.originalFov;
    this.camera.updateProjectionMatrix();

    // Restore normal HUD
    const hud = document.getElementById('hud-overlay');
    if (hud) hud.style.visibility = 'visible';
  }

  public toggle(): void {
    if (this.isActive) this.exit();
    else this.enter();
  }

  public takePhoto(): void {
    const canvas = document.querySelector('#canvas-container canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Flash screen effect
    const flash = document.createElement('div');
    flash.className = 'photo-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 400);

    // Play camera shutter sound (white noise click & transient)
    this.audio?.playNetSwing();

    // Grab canvas image data
    const dataUrl = canvas.toDataURL('image/png');

    const modal = this.overlay.querySelector('#photo-preview-modal') as HTMLElement;
    const img = this.overlay.querySelector('#photo-preview-img') as HTMLImageElement;
    const downloadBtn = this.overlay.querySelector('#btn-download-photo') as HTMLAnchorElement;

    if (img && downloadBtn && modal) {
      img.src = dataUrl;
      img.style.filter = canvas.style.filter; // apply selected photo filter to image
      downloadBtn.href = dataUrl;
      downloadBtn.download = `bug_island_${Date.now()}.png`;
      modal.style.display = 'flex';
    }
  }
}
