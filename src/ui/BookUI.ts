import { CollectionManager } from '../collection/CollectionManager';

export class BookUI {
  private collection: CollectionManager;
  private modalOverlay: HTMLElement | null = null;
  private selectedEntryId: string | null = null;
  private isOpen: boolean = false;

  constructor(collection: CollectionManager) {
    this.collection = collection;
    this.createUIElements();
  }

  private createUIElements(): void {
    this.modalOverlay = document.createElement('div');
    this.modalOverlay.id = 'book-modal-overlay';
    this.modalOverlay.className = 'book-modal-overlay hidden';
    this.modalOverlay.style.display = 'none';
    document.body.appendChild(this.modalOverlay);

    // Close on overlay backdrop tap
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  public open(): void {
    this.isOpen = true;
    const entries = this.collection.getAllEntries();
    if (!this.selectedEntryId && entries.length > 0) {
      this.selectedEntryId = entries[0].data.id;
    }
    this.render();
    if (this.modalOverlay) {
      this.modalOverlay.style.display = 'flex';
      this.modalOverlay.classList.remove('hidden');
    }
  }

  public close(): void {
    this.isOpen = false;
    if (this.modalOverlay) {
      this.modalOverlay.style.display = 'none';
      this.modalOverlay.classList.add('hidden');
    }
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private render(): void {
    if (!this.modalOverlay) return;

    const entries = this.collection.getAllEntries();
    const discoveredCount = this.collection.getDiscoveredCount();
    const totalCount = this.collection.getTotalCount();

    // Find currently selected entry
    const selectedEntry = entries.find((e) => e.data.id === this.selectedEntryId) || entries[0];

    // Left List items
    const listItemsHtml = entries
      .map((entry, index) => {
        const numStr = String(index + 1).padStart(3, '0');
        const isSelected = entry.data.id === selectedEntry.data.id;
        const displayName = entry.discovered ? entry.data.name : '？？？？？？';
        const mark = entry.discovered ? '✓' : '？';
        const itemClass = `book-list-item ${isSelected ? 'selected' : ''} ${entry.discovered ? 'discovered' : 'undiscovered'}`;

        return `
          <div class="${itemClass}" data-id="${entry.data.id}">
            <span class="item-num">${numStr}</span>
            <span class="item-name">${displayName}</span>
            <span class="item-mark ${entry.discovered ? 'mark-check' : 'mark-unknown'}">${mark}</span>
          </div>
        `;
      })
      .join('');

    // Right Detail View
    let detailHtml = '';
    if (selectedEntry.discovered) {
      const data = selectedEntry.data;
      const stars = '★'.repeat(data.rarity) + '☆'.repeat(5 - data.rarity);
      const habitatLabels: Record<string, string> = {
        grassland: '草原',
        forest: '森林',
        mountain: '山',
        pond: '池',
        coast: '海岸'
      };
      const habitatsStr = data.habitats.map((h) => habitatLabels[h] || h).join('・');

      detailHtml = `
        <div class="detail-card">
          <div class="detail-icon-circle">
            <span class="detail-icon">${data.icon}</span>
          </div>
          <div class="detail-name">${data.name}</div>
          <div class="detail-rarity">レア度 ${stars}</div>
          <div class="detail-stats-box">
            <div class="stat-row">
              <span class="stat-label">最大サイズ:</span>
              <span class="stat-val highlight-val">${selectedEntry.maxSize.toFixed(1)} mm</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">捕獲数:</span>
              <span class="stat-val">${selectedEntry.catchCount} 匹</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">生息地:</span>
              <span class="stat-val">${habitatsStr}</span>
            </div>
          </div>
          <div class="detail-desc">${data.description}</div>
        </div>
      `;
    } else {
      detailHtml = `
        <div class="detail-card undiscovered-card">
          <div class="detail-icon-circle unknown-icon-circle">
            <span class="detail-icon">❓</span>
          </div>
          <div class="detail-name">未発見</div>
          <div class="detail-rarity">レア度 ？？？</div>
          <div class="detail-stats-box">
            <div class="stat-row">
              <span class="stat-label">最大サイズ:</span>
              <span class="stat-val">--- mm</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">捕獲数:</span>
              <span class="stat-val">0 匹</span>
            </div>
          </div>
          <div class="detail-desc hint-desc">
            まだ捕まえたことがない昆虫です。<br />島を歩き回って探してみよう！
          </div>
        </div>
      `;
    }

    this.modalOverlay.innerHTML = `
      <div class="book-container">
        <!-- Header -->
        <div class="book-header">
          <div class="book-title-row">
            <span class="book-header-icon">📖</span>
            <span class="book-title">昆虫図鑑</span>
            <span class="book-progress">${discoveredCount} / ${totalCount}</span>
          </div>
          <button id="btn-close-book" class="book-close-btn" aria-label="閉じる">✕</button>
        </div>

        <!-- Body (2 columns on landscape/desktop) -->
        <div class="book-body">
          <div class="book-list-pane">
            <div class="list-heading">昆虫リスト</div>
            <div class="book-list-scroll">
              ${listItemsHtml}
            </div>
          </div>
          <div class="book-detail-pane">
            ${detailHtml}
          </div>
        </div>
      </div>
    `;

    // Attach click and pointerdown events to list items
    const itemElements = this.modalOverlay.querySelectorAll('.book-list-item');
    itemElements.forEach((el) => {
      const onSelect = () => {
        const id = el.getAttribute('data-id');
        if (id) {
          this.selectedEntryId = id;
          this.render();
        }
      };
      el.addEventListener('click', onSelect);
      el.addEventListener('pointerdown', onSelect);
    });

    // Attach close button
    const closeBtn = document.getElementById('btn-close-book');
    if (closeBtn) {
      const handleClose = (e: Event) => {
        e.stopPropagation();
        this.close();
      };
      closeBtn.addEventListener('click', handleClose);
      closeBtn.addEventListener('pointerdown', handleClose);
    }
  }
}
