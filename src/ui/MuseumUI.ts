import { MuseumManager } from '../building/MuseumManager';
import { InventoryManager } from '../inventory/InventoryManager';
import { AudioManager } from '../audio/AudioManager';

export class MuseumUI {
  private overlay: HTMLElement;
  private museumManager: MuseumManager;
  private inventory: InventoryManager;
  private audio?: AudioManager;
  private isOpen: boolean = false;
  public currentTab: 'donate' | 'exhibit' = 'donate';

  constructor(museumManager: MuseumManager, inventory: InventoryManager, audio?: AudioManager) {
    this.museumManager = museumManager;
    this.inventory = inventory;
    this.audio = audio;
    this.overlay = this.createDOM();
    document.body.appendChild(this.overlay);

    this.initEvents();
  }

  private createDOM(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.id = 'museum-modal-overlay';
    overlay.className = 'museum-modal-overlay hidden';
    overlay.style.display = 'none';

    overlay.innerHTML = `
      <div class="museum-modal">
        <header class="museum-header">
          <div class="museum-title-wrap">
            <span class="museum-title-icon">🏛️</span>
            <div class="museum-title-text">
              <h2>昆虫テラリウム博物館</h2>
              <span class="museum-subtitle">Insect Museum & Terrarium</span>
            </div>
          </div>
          <button id="btn-close-museum" class="museum-close-btn" aria-label="閉じる">✕</button>
        </header>

        <!-- Museum Status & Curator Rank -->
        <div class="museum-stats-card">
          <div class="curator-rank-badge">
            <span id="curator-icon" class="curator-icon">🌱</span>
            <div class="curator-info">
              <span class="curator-label">あなたの称号</span>
              <strong id="curator-title" class="curator-title">新米コレクター</strong>
            </div>
          </div>
          <div class="museum-progress-wrap">
            <div class="progress-labels">
              <span>展示達成率: <strong id="museum-count">0</strong> / <span id="museum-total">15</span> 種</span>
              <strong id="museum-percent">0%</strong>
            </div>
            <div class="museum-progress-bar">
              <div id="museum-progress-fill" class="museum-progress-fill" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="museum-tabs">
          <button id="tab-museum-donate" class="museum-tab active">
            <span>🎁</span> 虫を寄贈する
          </button>
          <button id="tab-museum-exhibit" class="museum-tab">
            <span>🔍</span> 展示室を見る
          </button>
        </div>

        <!-- Tab Contents -->
        <div class="museum-body">
          <div id="museum-tab-donate-content" class="museum-tab-pane">
            <div id="museum-donate-list" class="museum-grid"></div>
          </div>
          <div id="museum-tab-exhibit-content" class="museum-tab-pane hidden" style="display: none;">
            <div id="museum-exhibit-list" class="museum-grid"></div>
          </div>
        </div>
      </div>
    `;

    return overlay;
  }

  private initEvents(): void {
    const btnClose = this.overlay.querySelector('#btn-close-museum');
    btnClose?.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    const tabDonate = this.overlay.querySelector('#tab-museum-donate');
    const tabExhibit = this.overlay.querySelector('#tab-museum-exhibit');

    tabDonate?.addEventListener('click', () => this.switchTab('donate'));
    tabExhibit?.addEventListener('click', () => this.switchTab('exhibit'));

    window.addEventListener('keydown', (e) => {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    });
  }

  public switchTab(tab: 'donate' | 'exhibit'): void {
    this.currentTab = tab;

    const tabDonate = this.overlay.querySelector('#tab-museum-donate');
    const tabExhibit = this.overlay.querySelector('#tab-museum-exhibit');
    const contentDonate = this.overlay.querySelector('#museum-tab-donate-content') as HTMLElement;
    const contentExhibit = this.overlay.querySelector('#museum-tab-exhibit-content') as HTMLElement;

    if (tab === 'donate') {
      tabDonate?.classList.add('active');
      tabExhibit?.classList.remove('active');
      contentDonate.style.display = 'block';
      contentExhibit.style.display = 'none';
      this.renderDonateTab();
    } else {
      tabExhibit?.classList.add('active');
      tabDonate?.classList.remove('active');
      contentExhibit.style.display = 'block';
      contentDonate.style.display = 'none';
      this.renderExhibitTab();
    }
  }

  public open(): void {
    this.isOpen = true;
    this.overlay.classList.remove('hidden');
    this.overlay.style.display = 'flex';

    this.updateStats();
    this.switchTab('donate');
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

  private updateStats(): void {
    const rank = this.museumManager.getCuratorRank();
    const curatorIcon = this.overlay.querySelector('#curator-icon');
    const curatorTitle = this.overlay.querySelector('#curator-title');
    const countSpan = this.overlay.querySelector('#museum-count');
    const totalSpan = this.overlay.querySelector('#museum-total');
    const percentSpan = this.overlay.querySelector('#museum-percent');
    const fill = this.overlay.querySelector('#museum-progress-fill') as HTMLElement;

    if (curatorIcon) curatorIcon.textContent = rank.badge;
    if (curatorTitle) {
      curatorTitle.textContent = rank.title;
      (curatorTitle as HTMLElement).style.color = rank.color;
    }

    const count = this.museumManager.donationCount;
    const total = this.museumManager.totalSpeciesCount;
    const pct = this.museumManager.completionPercentage;

    if (countSpan) countSpan.textContent = count.toString();
    if (totalSpan) totalSpan.textContent = total.toString();
    if (percentSpan) percentSpan.textContent = `${pct}%`;
    if (fill) fill.style.width = `${pct}%`;
  }

  private renderDonateTab(): void {
    const container = this.overlay.querySelector('#museum-donate-list');
    if (!container) return;
    container.innerHTML = '';

    const items = this.inventory.items;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="museum-empty-state">
          <span class="empty-icon">🧺</span>
          <p>虫かごは空っぽです。<br>島で虫を捕まえて寄贈しましょう！</p>
        </div>
      `;
      return;
    }

    items.forEach((item) => {
      const alreadyDonated = this.museumManager.isDonated(item.id);

      const card = document.createElement('div');
      card.className = `museum-item-card ${alreadyDonated ? 'already-donated' : 'can-donate'}`;

      card.innerHTML = `
        <div class="item-icon-wrap">
          <span class="item-icon">${item.icon}</span>
          ${item.isGiant ? '<span class="crown-badge">👑</span>' : item.isBig ? '<span class="crown-badge">⭐</span>' : ''}
        </div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-size">${item.size.toFixed(1)} mm</div>
        </div>
        <div class="item-action">
          ${
            alreadyDonated
              ? '<span class="status-pill donated">寄贈済み</span>'
              : '<button class="btn-donate-action">寄贈する</button>'
          }
        </div>
      `;

      if (!alreadyDonated) {
        const btn = card.querySelector('.btn-donate-action');
        btn?.addEventListener('click', () => {
          const success = this.museumManager.donate(item);
          if (success) {
            this.audio?.playCoin();
            this.updateStats();
            this.renderDonateTab();
          }
        });
      }

      container.appendChild(card);
    });
  }

  private renderExhibitTab(): void {
    const container = this.overlay.querySelector('#museum-exhibit-list');
    if (!container) return;
    container.innerHTML = '';

    const donations = this.museumManager.getDonations();

    if (donations.length === 0) {
      container.innerHTML = `
        <div class="museum-empty-state">
          <span class="empty-icon">🏛️</span>
          <p>まだ展示された虫はいません。<br>記念すべき最初の1匹を寄贈してください！</p>
        </div>
      `;
      return;
    }

    donations.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'museum-item-card exhibit';

      card.innerHTML = `
        <div class="item-icon-wrap">
          <span class="item-icon">${item.icon}</span>
        </div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-size">寄贈サイズ: ${item.size.toFixed(1)} mm</div>
          <div class="item-date">📅 ${item.donatedAt} 寄贈</div>
        </div>
      `;

      container.appendChild(card);
    });
  }
}
