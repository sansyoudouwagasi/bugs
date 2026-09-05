import { Player } from './Player';
import { AudioManager } from '../audio/AudioManager';

export class HealthManager {
  public currentHealth: number = 100;
  public readonly maxHealth: number = 100;

  private player: Player;
  private audio?: AudioManager;
  private healthBadgeVal: HTMLElement | null = null;
  private isFainting: boolean = false;

  public onFaintComplete?: () => void;

  constructor(player: Player, audio?: AudioManager) {
    this.player = player;
    this.audio = audio;
    this.healthBadgeVal = document.querySelector('.health-badge .badge-val');
    this.updateHUD();
  }

  public setAudio(audio: AudioManager): void {
    this.audio = audio;
  }

  public takeDamage(amount: number, onRevive?: () => void): void {
    if (this.isFainting) return;

    this.currentHealth = Math.max(0, this.currentHealth - amount);
    this.updateHUD(true);

    if (this.audio) {
      this.audio.playDamage();
    }

    // Flash screen red
    this.triggerDamageFlash();

    if (this.currentHealth <= 0) {
      this.startFaintSequence(onRevive);
    }
  }

  public heal(amount: number): void {
    this.currentHealth = Math.min(this.maxHealth, this.currentHealth + amount);
    this.updateHUD(true);
  }

  public updateHUD(bounce: boolean = false): void {
    if (this.healthBadgeVal) {
      this.healthBadgeVal.textContent = `${this.currentHealth}`;
      if (bounce) {
        const badge = this.healthBadgeVal.parentElement;
        badge?.classList.remove('badge-pop');
        void badge?.offsetWidth;
        badge?.classList.add('badge-pop');
      }
    }
  }

  private triggerDamageFlash(): void {
    let overlay = document.getElementById('damage-flash-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'damage-flash-overlay';
      document.body.appendChild(overlay);
    }
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');
    setTimeout(() => {
      overlay?.classList.remove('active');
    }, 450);
  }

  private startFaintSequence(onRevive?: () => void): void {
    this.isFainting = true;
    this.player.setAnimState('faint');

    if (this.audio) {
      this.audio.playFaint();
    }

    // Create / activate blackout overlay
    let blackout = document.getElementById('faint-blackout-overlay');
    if (!blackout) {
      blackout = document.createElement('div');
      blackout.id = 'faint-blackout-overlay';
      blackout.innerHTML = `
        <div class="faint-dialog">
          <div class="faint-icon">😵</div>
          <h2 class="faint-title">きぜつしてしまった…！</h2>
          <p class="faint-msg">ハチに刺されて目の前が真っ暗になった…。<br>島の買い取り屋台の店主に助けられ、広場で目を覚ましました。</p>
          <button id="btn-wake-up" class="faint-btn">目を覚ます</button>
        </div>
      `;
      document.body.appendChild(blackout);
    }

    setTimeout(() => {
      blackout?.classList.add('visible');

      const wakeBtn = document.getElementById('btn-wake-up');
      const handleWake = () => {
        wakeBtn?.removeEventListener('click', handleWake);
        blackout?.classList.remove('visible');

        // Revive player at town plaza (x: 0, z: 0)
        this.currentHealth = this.maxHealth;
        this.updateHUD(true);
        this.player.setAnimState('idle');
        this.isFainting = false;

        if (onRevive) {
          onRevive();
        }
        if (this.onFaintComplete) {
          this.onFaintComplete();
        }
      };
      wakeBtn?.addEventListener('click', handleWake);
    }, 800);
  }

  public get isPlayerFainting(): boolean {
    return this.isFainting;
  }
}
