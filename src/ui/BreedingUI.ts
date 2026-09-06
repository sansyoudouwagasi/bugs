import { BreedingManager, BreedingSession } from '../breeding/BreedingManager';
import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';
import { AudioManager } from '../audio/AudioManager';
import { CaughtInsectRecord } from '../insects/InsectData';

export class BreedingUI {
  private breedingManager: BreedingManager;
  private inventory: InventoryManager;
  private shop: ShopManager;
  private audio?: AudioManager;

  private overlay: HTMLElement | null = null;
  private selectedParentA: CaughtInsectRecord | null = null;
  private selectedParentB: CaughtInsectRecord | null = null;

  constructor(
    breedingManager: BreedingManager,
    inventory: InventoryManager,
    shop: ShopManager,
    audio?: AudioManager
  ) {
    this.breedingManager = breedingManager;
    this.inventory = inventory;
    this.shop = shop;
    this.audio = audio;

    this.createModal();
    this.breedingManager.addChangeListener(() => {
      if (this.isOpen()) {
        this.render();
      }
    });
  }

  private createModal(): void {
    this.overlay = document.createElement('div');
    this.overlay.id = 'breeding-modal-overlay';
    this.overlay.className = 'modal-overlay hidden';
    this.overlay.innerHTML = `
      <div class="modal-card breeding-card">
        <div class="modal-header">
          <h2>🔬 昆虫ブリーディング工房</h2>
          <button class="modal-close-btn" id="breeding-close-btn">✕</button>
        </div>
        <div class="breeding-content" id="breeding-content-body">
          <!-- Dynamic injection -->
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);

    const closeBtn = this.overlay.querySelector('#breeding-close-btn');
    closeBtn?.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });
  }

  public open(): void {
    this.selectedParentA = null;
    this.selectedParentB = null;
    this.overlay?.classList.remove('hidden');
    this.render();
  }

  public close(): void {
    this.overlay?.classList.add('hidden');
  }

  public isOpen(): boolean {
    return !!this.overlay && !this.overlay.classList.contains('hidden');
  }

  private render(): void {
    const container = document.getElementById('breeding-content-body');
    if (!container) return;

    const session = this.breedingManager.currentSession;

    if (!session) {
      // 1. Idle state: Select two parents from basket
      this.renderPairingSelection(container);
    } else if (session.stage === 'ready') {
      // 2. Ready to claim adult
      this.renderAdultReady(container, session);
    } else {
      // 3. In-progress incubation
      this.renderIncubation(container, session);
    }
  }

  private renderPairingSelection(container: HTMLElement): void {
    const items = this.inventory.items;

    let itemsHtml = '';
    if (items.length < 2) {
      itemsHtml = `
        <div class="empty-breeding-state">
          <p>⚠️ 虫かごに昆虫が2匹以上必要です！</p>
          <p class="sub-tip">島で昆虫を捕まえてから連れてきましょう。</p>
        </div>
      `;
    } else {
      itemsHtml = `
        <p class="breeding-desc">かごの中の昆虫から交配（ペアリング）させる2匹を選んでください。</p>
        <div class="parent-picker-container">
          <div class="parent-slot ${this.selectedParentA ? 'filled' : ''}" id="slot-parent-a">
            <div class="slot-label">親A</div>
            <div class="slot-insect-name">${this.selectedParentA ? `${this.selectedParentA.icon} ${this.selectedParentA.name}` : '未選択'}</div>
            <div class="slot-size">${this.selectedParentA ? `${this.selectedParentA.size}mm` : ''}</div>
          </div>
          <div class="slot-heart">❤️</div>
          <div class="parent-slot ${this.selectedParentB ? 'filled' : ''}" id="slot-parent-b">
            <div class="slot-label">親B</div>
            <div class="slot-insect-name">${this.selectedParentB ? `${this.selectedParentB.icon} ${this.selectedParentB.name}` : '未選択'}</div>
            <div class="slot-size">${this.selectedParentB ? `${this.selectedParentB.size}mm` : ''}</div>
          </div>
        </div>

        <button class="btn-start-pairing" id="btn-do-pair" ${this.selectedParentA && this.selectedParentB ? '' : 'disabled'}>
          ✨ ペアリング（交配）開始！
        </button>

        <h3 class="picker-section-title">手持ちの昆虫一覧 (タップして選択)</h3>
        <div class="inventory-picker-grid">
          ${items.map((item, idx) => {
            const isA = this.selectedParentA === item;
            const isB = this.selectedParentB === item;
            const isSelected = isA || isB;
            return `
              <div class="picker-card ${isSelected ? 'selected' : ''}" data-idx="${idx}">
                <div class="picker-icon">${item.icon}</div>
                <div class="picker-name">${item.name}</div>
                <div class="picker-size">${item.size}mm</div>
                ${isA ? '<span class="parent-tag">親A</span>' : ''}
                ${isB ? '<span class="parent-tag">親B</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = itemsHtml;

    // Attach click listeners to cards
    const cards = container.querySelectorAll('.picker-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-idx') || '0', 10);
        const item = items[idx];
        if (this.selectedParentA === item) {
          this.selectedParentA = null;
        } else if (this.selectedParentB === item) {
          this.selectedParentB = null;
        } else if (!this.selectedParentA) {
          this.selectedParentA = item;
        } else if (!this.selectedParentB) {
          this.selectedParentB = item;
        } else {
          this.selectedParentA = item;
        }
        this.render();
      });
    });

    const startBtn = container.querySelector('#btn-do-pair');
    startBtn?.addEventListener('click', () => {
      if (this.selectedParentA && this.selectedParentB) {
        this.breedingManager.startPairing(this.selectedParentA, this.selectedParentB);
        this.render();
      }
    });
  }

  private renderIncubation(container: HTMLElement, session: BreedingSession): void {
    const stageIcons: Record<string, string> = {
      empty: '🥚',
      mating: '❤️',
      egg: '🥚',
      larva: '🐛',
      pupa: '🌿',
      ready: '✨'
    };

    const stageNames: Record<string, string> = {
      empty: '未交配',
      mating: '交配・ペアリング中',
      egg: '産卵・たまご期',
      larva: '幼虫期（すくすく成長中）',
      pupa: 'サナギ期（羽化待機中）',
      ready: '羽化準備完了！'
    };

    const fungusCount = this.shop.getItemCount('fungus_bottle');
    const proteinCount = this.shop.getItemCount('protein_jelly');

    container.innerHTML = `
      <div class="incubation-view">
        <div class="incubation-stage-badge">
          <span class="stage-emoji">${stageIcons[session.stage]}</span>
          <span class="stage-text">${stageNames[session.stage]}</span>
        </div>

        <div class="incubation-progress-container">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${Math.round(session.progress)}%;"></div>
          </div>
          <div class="progress-label">${Math.round(session.progress)}% / 100%</div>
        </div>

        <div class="incubation-parents-info">
          <span>親: ${session.parentA.icon} ${session.parentA.name} (${session.parentA.size}mm)</span>
          <span>×</span>
          <span>${session.parentB.icon} ${session.parentB.name} (${session.parentB.size}mm)</span>
        </div>

        <div class="feed-section">
          <h3>🧪 育成アイテムを与える</h3>
          <div class="feed-btn-group">
            <button class="btn-feed" id="btn-feed-fungus" ${fungusCount > 0 ? '' : 'disabled'}>
              <span class="feed-icon">🧪</span>
              <span class="feed-name">ブリード菌糸ビン</span>
              <span class="feed-desc">キング冠👑確率UP</span>
              <span class="feed-qty">所持: ${fungusCount}</span>
            </button>

            <button class="btn-feed" id="btn-feed-protein" ${proteinCount > 0 ? '' : 'disabled'}>
              <span class="feed-icon">🍮</span>
              <span class="feed-name">特製プロテインゼリー</span>
              <span class="feed-desc">成長ゲージ+45%加速</span>
              <span class="feed-qty">所持: ${proteinCount}</span>
            </button>
          </div>
        </div>

        <div class="incubation-tip">
          💡 ヒント: ツリーハウスのベッドで寝ると、時間が進み成長も大幅に進みます！
        </div>
      </div>
    `;

    const fungusBtn = container.querySelector('#btn-feed-fungus');
    fungusBtn?.addEventListener('click', () => {
      const res = this.breedingManager.applyItem('fungus_bottle');
      alert(res.message);
      this.render();
    });

    const proteinBtn = container.querySelector('#btn-feed-protein');
    proteinBtn?.addEventListener('click', () => {
      const res = this.breedingManager.applyItem('protein_jelly');
      alert(res.message);
      this.render();
    });
  }

  private renderAdultReady(container: HTMLElement, session: BreedingSession): void {
    const insect = session.resultInsect;
    if (!insect) return;

    container.innerHTML = `
      <div class="adult-ready-view">
        <div class="hatch-glow-ring">✨</div>
        <div class="adult-icon">${insect.icon}</div>
        <h2 class="adult-title">${insect.name} が羽化しました！</h2>
        
        <div class="adult-spec-card">
          <div class="spec-row">
            <span class="spec-lbl">体長:</span>
            <span class="spec-val ${insect.isKing ? 'king-val' : ''}">${insect.size} mm ${insect.isKing ? '👑 キング冠！' : ''}</span>
          </div>
          ${insect.shinyName ? `
            <div class="spec-row">
              <span class="spec-lbl">変異:</span>
              <span class="spec-val shiny-val">${insect.shinyName}</span>
            </div>
          ` : ''}
          <div class="spec-row">
            <span class="spec-lbl">世代:</span>
            <span class="spec-val">F${insect.generation || 1}世代</span>
          </div>
          <div class="spec-row">
            <span class="spec-lbl">相撲ボーナス:</span>
            <span class="spec-val">+${insect.power || 0} パワー / +${insect.stamina || 0} ふんばり</span>
          </div>
        </div>

        <button class="btn-claim-adult" id="btn-claim-insect">
          🎁 虫かごに迎え入れる！
        </button>
      </div>
    `;

    const claimBtn = container.querySelector('#btn-claim-insect');
    claimBtn?.addEventListener('click', () => {
      const res = this.breedingManager.claimInsect();
      alert(res.message);
      if (res.success) {
        if (this.audio) {
          this.audio.playFanfare();
        }
        this.render();
      }
    });
  }
}
