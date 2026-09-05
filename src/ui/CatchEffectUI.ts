import { CaughtInsectRecord } from '../insects/InsectData';

export class CatchEffectUI {
  private overlayContainer: HTMLElement | null = null;
  private messageToast: HTMLElement | null = null;

  constructor() {
    this.createUIElements();
  }

  private createUIElements(): void {
    // Toast container for quick notifications
    this.messageToast = document.createElement('div');
    this.messageToast.id = 'catch-toast';
    this.messageToast.className = 'catch-toast hidden';
    document.body.appendChild(this.messageToast);

    // Modal overlay for catch celebration
    this.overlayContainer = document.createElement('div');
    this.overlayContainer.id = 'catch-modal-overlay';
    this.overlayContainer.className = 'catch-modal-overlay hidden';
    this.overlayContainer.style.display = 'none';
    document.body.appendChild(this.overlayContainer);
  }

  public showCatchSuccess(record: CaughtInsectRecord, onClose: () => void): void {
    if (!this.overlayContainer) return;

    let sizeBadgeHtml = '';
    if (record.isGiant) {
      sizeBadgeHtml = '<span class="size-tag giant-tag">👑 GIANT!!</span>';
    } else if (record.isBig) {
      sizeBadgeHtml = '<span class="size-tag big-tag">✨ BIG!</span>';
    }

    const starsHtml = '★'.repeat(record.rarity) + '☆'.repeat(5 - record.rarity);

    this.overlayContainer.innerHTML = `
      <div class="catch-card">
        <div class="sparkle-particles">✨ ✨ ✨</div>
        <div class="catch-header">捕まえた！</div>
        <div class="catch-icon-box">
          <span class="catch-icon">${record.icon}</span>
        </div>
        <div class="catch-name">${record.name}</div>
        <div class="catch-rarity">${starsHtml}</div>
        <div class="catch-size-row">
          <span class="size-label">サイズ:</span>
          <span class="size-value">${record.size.toFixed(1)} mm</span>
          ${sizeBadgeHtml}
        </div>
        <button id="btn-catch-ok" class="catch-ok-btn">OK</button>
      </div>
    `;

    this.overlayContainer.style.display = 'flex';
    this.overlayContainer.classList.remove('hidden');

    const okBtn = document.getElementById('btn-catch-ok');
    if (okBtn) {
      const handleClose = (e: Event) => {
        e.stopPropagation();
        if (this.overlayContainer) {
          this.overlayContainer.style.display = 'none';
          this.overlayContainer.classList.add('hidden');
        }
        onClose();
      };
      okBtn.addEventListener('click', handleClose, { once: true });
      okBtn.addEventListener('pointerdown', handleClose, { once: true });
    }
  }

  public showFleeToast(): void {
    if (!this.messageToast) return;
    this.messageToast.textContent = '💨 逃げられた！';
    this.messageToast.classList.remove('hidden');
    this.messageToast.classList.add('toast-fade-in');

    setTimeout(() => {
      this.messageToast?.classList.remove('toast-fade-in');
      this.messageToast?.classList.add('hidden');
    }, 1800);
  }
}
