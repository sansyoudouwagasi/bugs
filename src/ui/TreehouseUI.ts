import { TreehouseManager } from '../treehouse/TreehouseManager';
import { AncientAltarManager } from '../altar/AncientAltarManager';
import { BreedingManager } from '../breeding/BreedingManager';
import { AudioManager } from '../audio/AudioManager';

export class TreehouseUI {
  private treehouse: TreehouseManager;
  private altar: AncientAltarManager;
  private breedingManager: BreedingManager;
  private audio?: AudioManager;

  private bedOverlay: HTMLElement | null = null;
  private radioOverlay: HTMLElement | null = null;
  private altarOverlay: HTMLElement | null = null;

  constructor(
    treehouse: TreehouseManager,
    altar: AncientAltarManager,
    breedingManager: BreedingManager,
    audio?: AudioManager
  ) {
    this.treehouse = treehouse;
    this.altar = altar;
    this.breedingManager = breedingManager;
    this.audio = audio;

    this.createModals();
  }

  private createModals(): void {
    // 1. Bed Sleep Modal
    this.bedOverlay = document.createElement('div');
    this.bedOverlay.id = 'bed-modal-overlay';
    this.bedOverlay.className = 'modal-overlay hidden';
    this.bedOverlay.innerHTML = `
      <div class="modal-card treehouse-card">
        <div class="modal-header">
          <h2>🛏️ ふかふかベッドで休む</h2>
          <button class="modal-close-btn" id="bed-close-btn">✕</button>
        </div>
        <p class="modal-desc">どの時間帯まで休みますか？（体力全回復 & 昆虫ブリード成長+25%）</p>
        <div class="sleep-time-grid">
          <button class="btn-sleep-option" data-hour="8">
            <span class="sleep-icon">🌅</span>
            <span class="sleep-title">朝を迎える</span>
            <span class="sleep-time">08:00</span>
          </button>
          <button class="btn-sleep-option" data-hour="13">
            <span class="sleep-icon">☀️</span>
            <span class="sleep-title">昼まで眠る</span>
            <span class="sleep-time">13:00</span>
          </button>
          <button class="btn-sleep-option" data-hour="17">
            <span class="sleep-icon">🌇</span>
            <span class="sleep-title">夕方まで休む</span>
            <span class="sleep-time">17:00</span>
          </button>
          <button class="btn-sleep-option" data-hour="21">
            <span class="sleep-icon">🌌</span>
            <span class="sleep-title">夜まで待つ</span>
            <span class="sleep-time">21:00</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(this.bedOverlay);

    this.bedOverlay.querySelector('#bed-close-btn')?.addEventListener('click', () => this.closeBed());
    this.bedOverlay.querySelectorAll('.btn-sleep-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const hour = parseInt(btn.getAttribute('data-hour') || '8', 10) as 8 | 13 | 17 | 21;
        const res = this.treehouse.sleep(hour);
        this.breedingManager.advanceProgress(25);
        this.closeBed();
        alert(res.message);
      });
    });

    // 2. Radio Modal
    this.radioOverlay = document.createElement('div');
    this.radioOverlay.id = 'radio-modal-overlay';
    this.radioOverlay.className = 'modal-overlay hidden';
    this.radioOverlay.innerHTML = `
      <div class="modal-card treehouse-card">
        <div class="modal-header">
          <h2>📻 レトロラジオ</h2>
          <button class="modal-close-btn" id="radio-close-btn">✕</button>
        </div>
        <p class="modal-desc">島のラジオチャンネルを選んで再生します。</p>
        <div class="radio-channel-list">
          <button class="btn-radio-channel" data-track="day">
            <span class="ch-icon">🎵</span>
            <span class="ch-name">Ch.1 のどかな島の昼さがり</span>
          </button>
          <button class="btn-radio-channel" data-track="night">
            <span class="ch-icon">🌌</span>
            <span class="ch-name">Ch.2 満天の星空と虫の音</span>
          </button>
          <button class="btn-radio-channel" data-track="sumo">
            <span class="ch-icon">🥁</span>
            <span class="ch-name">Ch.3 虫相撲トーナメント熱闘曲</span>
          </button>
          <button class="btn-radio-channel" data-track="festival">
            <span class="ch-icon">🏆</span>
            <span class="ch-name">Ch.4 むしとり大会フェスティバル</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(this.radioOverlay);
    this.radioOverlay.querySelector('#radio-close-btn')?.addEventListener('click', () => this.closeRadio());
    this.radioOverlay.querySelectorAll('.btn-radio-channel').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.audio) {
          this.audio.playFanfare();
        }
        alert(`📻 ラジオのチャンネルを切り替えました！`);
        this.closeRadio();
      });
    });

    // 3. Ancient Altar Modal
    this.altarOverlay = document.createElement('div');
    this.altarOverlay.id = 'altar-modal-overlay';
    this.altarOverlay.className = 'modal-overlay hidden';
    this.altarOverlay.innerHTML = `
      <div class="modal-card altar-card">
        <div class="modal-header">
          <h2>⚡ 古代樹の祭壇（太古の召喚神託）</h2>
          <button class="modal-close-btn" id="altar-close-btn">✕</button>
        </div>
        <p class="modal-desc">
          太古の巨大樹に宿る精霊へお布施（300 G）を捧げ、太古の王者たちを現代の空へ召喚します！
        </p>
        <div class="summon-option-grid">
          <div class="summon-card">
            <div class="summon-icon">🐲</div>
            <h3 class="summon-name">メガネウラ</h3>
            <p class="summon-sub">太古の地球を支配した翼開長70cmの巨大トンボ</p>
            <div class="summon-cost">費用: 300 G</div>
            <button class="btn-summon" id="btn-summon-meganeura">⚡ 召喚の儀式を行う</button>
          </div>

          <div class="summon-card">
            <div class="summon-icon">🔱</div>
            <h3 class="summon-name">コーカサスオオカブト</h3>
            <p class="summon-sub">3本の鋭角を持つアジア最強の荒ぶる甲虫</p>
            <div class="summon-cost">費用: 300 G</div>
            <button class="btn-summon" id="btn-summon-caucasus">⚡ 召喚の儀式を行う</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.altarOverlay);
    this.altarOverlay.querySelector('#altar-close-btn')?.addEventListener('click', () => this.closeAltar());

    this.altarOverlay.querySelector('#btn-summon-meganeura')?.addEventListener('click', () => {
      const res = this.altar.summonLegend('meganeura');
      alert(res.message);
      if (res.success) this.closeAltar();
    });

    this.altarOverlay.querySelector('#btn-summon-caucasus')?.addEventListener('click', () => {
      const res = this.altar.summonLegend('caucasus_beetle');
      alert(res.message);
      if (res.success) this.closeAltar();
    });
  }

  public openBed(): void {
    this.bedOverlay?.classList.remove('hidden');
  }
  public closeBed(): void {
    this.bedOverlay?.classList.add('hidden');
  }

  public openRadio(): void {
    this.radioOverlay?.classList.remove('hidden');
  }
  public closeRadio(): void {
    this.radioOverlay?.classList.add('hidden');
  }

  public openAltar(): void {
    this.altarOverlay?.classList.remove('hidden');
  }
  public closeAltar(): void {
    this.altarOverlay?.classList.add('hidden');
  }
}
