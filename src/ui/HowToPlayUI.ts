import { AudioManager } from '../audio/AudioManager';

export class HowToPlayUI {
  private modalOverlay: HTMLElement | null = null;
  private audio: AudioManager;
  private isOpen: boolean = false;
  private currentTab: 'controls' | 'basics' | 'features' | 'tips' = 'controls';

  constructor(audio: AudioManager) {
    this.audio = audio;
    this.createUIElements();
  }

  private createUIElements(): void {
    this.modalOverlay = document.createElement('div');
    this.modalOverlay.id = 'how-to-play-modal';
    this.modalOverlay.className = 'how-to-play-modal-overlay hidden';
    this.modalOverlay.style.display = 'none';

    this.modalOverlay.innerHTML = `
      <div class="how-to-play-dialog">
        <!-- Header -->
        <div class="htp-header">
          <div class="htp-title-group">
            <span class="htp-icon">📖</span>
            <div class="htp-title-texts">
              <h2>むしとり島 遊び方＆操作ガイド</h2>
              <p class="htp-subtitle">昆虫採集・育成・バトルアドベンチャー</p>
            </div>
          </div>
          <button id="htp-btn-close" class="htp-close-btn" aria-label="閉じる">✕</button>
        </div>

        <!-- Navigation Tabs -->
        <div class="htp-tabs">
          <button class="htp-tab active" data-tab="controls">
            <span class="tab-emoji">🎮</span> 操作方法
          </button>
          <button class="htp-tab" data-tab="basics">
            <span class="tab-emoji">🌿</span> 基本の遊び方
          </button>
          <button class="htp-tab" data-tab="features">
            <span class="tab-emoji">🏆</span> やりこみ機能
          </button>
          <button class="htp-tab" data-tab="tips">
            <span class="tab-emoji">💡</span> 虫とりの極意
          </button>
        </div>

        <!-- Content Body -->
        <div class="htp-body">
          <!-- 1. Controls Tab -->
          <div id="htp-tab-controls" class="htp-tab-pane active">
            <div class="htp-section-badge">PC（キーボード & マウス）操作</div>
            <div class="controls-grid">
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">W</span><span class="kbd">A</span><span class="kbd">S</span><span class="kbd">D</span> / <span class="kbd">↑←↓→</span></div>
                <div class="control-desc">
                  <strong>いどう (Move)</strong>
                  <span>島の中を自由に歩き回ります。</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">Shift</span></div>
                <div class="control-desc">
                  <strong>ダッシュ (Dash)</strong>
                  <span>すばやく走ります。（※虫が驚いて逃げやすくなります）</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">C</span></div>
                <div class="control-desc">
                  <strong>しのび足 (Sneak)</strong>
                  <span>しゃがんで忍び足。虫に気付かれず背後から接近できます！</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">Space</span></div>
                <div class="control-desc">
                  <strong>ジャンプ / 会話・休憩 (Jump / Interact)</strong>
                  <span>段差をジャンプ。焚き火・相撲・小舟の前では調べるアクションになります。</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd mouse-btn">クリック</span> / <span class="kbd">Space</span></div>
                <div class="control-desc">
                  <strong>あみを振る (Swing Net)</strong>
                  <span>虫の近くであみを振って捕獲！木の近くでは木を揺すります。</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">ドラッグ</span></div>
                <div class="control-desc">
                  <strong>視点回転 (Camera Look)</strong>
                  <span>画面をドラッグしてカメラの向きを回転します。</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">E</span></div>
                <div class="control-desc">
                  <strong>木ゆすり / 調べる (Shake Tree / Inspect)</strong>
                  <span>木を揺すって虫を落としたり、秘密基地の家具や古代の祭壇を調べます。</span>
                </div>
              </div>
              <div class="control-item">
                <div class="keys-wrapper"><span class="kbd">H</span></div>
                <div class="control-desc">
                  <strong>ミツ塗り (Apply Honey)</strong>
                  <span>持っているミツを木に塗り、珍しいカブトやクワガタをおびき寄せます。</span>
                </div>
              </div>
            </div>

            <!-- Shortcut Cheat Sheet -->
            <div class="htp-section-badge" style="margin-top: 20px;">便利なワンキー・ショートカット</div>
            <div class="shortcuts-row">
              <div class="sc-badge"><span class="kbd">B</span> 昆虫図鑑</div>
              <div class="sc-badge"><span class="kbd">I</span> 虫かご</div>
              <div class="sc-badge"><span class="kbd">P</span> 道具屋</div>
              <div class="sc-badge"><span class="kbd">O</span> 博物館</div>
              <div class="sc-badge"><span class="kbd">Q</span> 博士の依頼</div>
              <div class="sc-badge"><span class="kbd">K</span> 昆虫相撲</div>
              <div class="sc-badge"><span class="kbd">J</span> 大会ロビー</div>
              <div class="sc-badge"><span class="kbd">L</span> ブリード工房</div>
              <div class="sc-badge"><span class="kbd">Z</span> フォトモード</div>
              <div class="sc-badge"><span class="kbd">T</span> 時間を進める</div>
              <div class="sc-badge"><span class="kbd">Y</span> 天候切り替え</div>
              <div class="sc-badge"><span class="kbd">M</span> BGM/SE切替</div>
            </div>

            <div class="htp-section-badge" style="margin-top: 24px;">スマートフォン・タブレット操作</div>
            <div class="mobile-controls-box">
              <div class="mobile-ctrl-col">
                <div class="ctrl-icon-large">🕹️</div>
                <div>
                  <strong>画面左側：バーチャルパッド</strong>
                  <p>親指でスライドすると自由に歩行移動できます。</p>
                </div>
              </div>
              <div class="mobile-ctrl-col">
                <div class="ctrl-icon-large">🥅 💨 🦘</div>
                <div>
                  <strong>画面右側：アクションボタン</strong>
                  <p>「あみ」「ダッシュ」「ジャンプ」をワンタップで実行。</p>
                </div>
              </div>
              <div class="mobile-ctrl-col">
                <div class="ctrl-icon-large">👆</div>
                <div>
                  <strong>画面ドラッグ：カメラ回転</strong>
                  <p>画面の空いている場所をスワイプして見回せます。</p>
                </div>
              </div>
              <div class="mobile-ctrl-col">
                <div class="ctrl-icon-large">📱</div>
                <div>
                  <strong>画面上部：ステータスバー</strong>
                  <p>図鑑、ショップ、大会、相撲、博物館、依頼、ブリード、しのび足などをいつでもタップ起動！</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Basics Tab -->
          <div id="htp-tab-basics" class="htp-tab-pane">
            <div class="guide-steps-container">
              <div class="guide-step-card">
                <div class="step-num">STEP 1</div>
                <div class="step-icon">🔍</div>
                <div class="step-content">
                  <h3>島を探検して虫を見つけよう</h3>
                  <p>草むら、木の上、花畑、水辺、洞窟など、島中さまざまな場所に昆虫が生息しています。昼と夜、晴れや雨など天候によっても出会える虫が変化します！</p>
                </div>
              </div>

              <div class="guide-step-card">
                <div class="step-num">STEP 2</div>
                <div class="step-icon">🤫</div>
                <div class="step-content">
                  <h3>そ〜っと忍び足で近づこう</h3>
                  <p>走ったり正面から急接近すると、虫はびっくりして飛び去ってしまいます。<span class="highlight">「しのび足（Cキー / 🤫ボタン）」</span>で足音を立てずに背後から間合いを詰めましょう！</p>
                </div>
              </div>

              <div class="guide-step-card">
                <div class="step-num">STEP 3</div>
                <div class="step-icon">🥅</div>
                <div class="step-content">
                  <h3>間合いを見極めてあみを振る！</h3>
                  <p>虫の真後ろ、1〜2mの距離でタイミングよくあみを振ると捕獲成功！サイズ測定が行われ、大物なら「ゴールド冠」や「キング冠」のトロフィーが付きます。</p>
                </div>
              </div>

              <div class="guide-step-card">
                <div class="step-num">STEP 4</div>
                <div class="step-icon">🌳</div>
                <div class="step-content">
                  <h3>木をゆする・ミツを塗る</h3>
                  <p>木に近づいて<span class="highlight">Eキー</span>を押すと木を揺すれます。まれにレアな甲虫がポトリと落ちてくることも！ただし、ハチの巣が落ちてきたら要注意！</p>
                </div>
              </div>

              <div class="guide-step-card">
                <div class="step-num">STEP 5</div>
                <div class="step-icon">💰</div>
                <div class="step-content">
                  <h3>ショップで売却＆装備をアップグレード</h3>
                  <p>捕まえた虫は売店で売ってゴールド（G）に換金可能。貯めたゴールドで<span class="highlight">「銀のあみ」「金のあみ」</span>や<span class="highlight">「俊足のスニーカー」</span>、誘引用の<span class="highlight">「特製あま〜いミツ」</span>を購入してさらに快適に！</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Features Tab -->
          <div id="htp-tab-features" class="htp-tab-pane">
            <div class="features-grid">
              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">🥋</span>
                  <h4>昆虫相撲コロシアム</h4>
                </div>
                <p>捕まえたカブトムシやクワガタで白熱の土俵バトル！相手の突っ張りをかわして寄り切り、賞金ゴールドと名誉ある横綱の称号を手に入れよう！</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">🏆</span>
                  <h4>島内むしとり大会</h4>
                </div>
                <p>制限時間内に指定された虫や巨大サイズを捕まえてポイントを競うトーナメント！優勝して豪華な記念トロフィーをゲットしよう！</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">🏛️</span>
                  <h4>昆虫テラリウム博物館</h4>
                </div>
                <p>島の北側にある巨大ドーム博物館。捕まえた昆虫を寄贈すると、生きたまま緑豊かな生態系テラリウムに展示され、いつでも観察できます。</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">📜</span>
                  <h4>ファーブル博士のお願い</h4>
                </div>
                <p>広場にいるファーブル博士から届く生態調査クエスト。指定の昆虫を納品したり観察すると、多額の研究報酬ゴールドがもらえます。</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">🔬</span>
                  <h4>昆虫ブリーディング工房</h4>
                </div>
                <p>同じ種類のオスとメス（または特性を持つ親虫同士）を交配！より巨大な個体や、突然変異の極レア色（ホワイトアイ・ブルー個体など）を誕生させよう！</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">🌲</span>
                  <h4>マイ秘密基地（ツリーハウス）</h4>
                </div>
                <p>島の大樹に作られた自分だけの基地。ふかふかベッドで夜までぐっすり休んだり、レトロラジオで音楽を聴いたり、獲得トロフィーを並べて愛でることができます。</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">⚡</span>
                  <h4>古代樹の祭壇＆神秘の洞窟島</h4>
                </div>
                <p>島の奥地に鎮座する古代の祭壇…特定の天候・時間や希少アイテムを捧げることで、島に眠る「伝説の巨大昆虫」が目覚めるという言い伝えが…！？</p>
              </div>

              <div class="feature-card">
                <div class="f-header">
                  <span class="f-icon">📸</span>
                  <h4>昆虫観察フォトモード</h4>
                </div>
                <p>UIを非表示にしてカメラを構え、美しい島の風景や昆虫たちの生態を自由にズーム・撮影できます。</p>
              </div>
            </div>
          </div>

          <!-- 4. Tips Tab -->
          <div id="htp-tab-tips" class="htp-tab-pane">
            <div class="tips-container">
              <div class="tip-card tip-gold">
                <div class="tip-title">
                  <span class="tip-emoji">🕒</span>
                  <strong>時間帯と天候を意識しよう！</strong>
                </div>
                <p>カブトムシやクワガタ、ガの仲間は「夜（Night）」に活発になります。また、雨の日にしか現れないカタツムリや珍しいカエルなども存在します。時間を進めたいときはキャンプの焚き火か秘密基地のベッドを活用しましょう！</p>
              </div>

              <div class="tip-card tip-danger">
                <div class="tip-title">
                  <span class="tip-emoji">🐝</span>
                  <strong>ハチの巣が落ちてきたら？！</strong>
                </div>
                <p>木を揺すってハチの巣が落ちてきたら大ピンチ！ハチの大群がプレイヤーを追尾してきます。刺されると体力が大幅減少！<br>
                <strong>対処法：</strong>ハチが突進してくる瞬間に正面を向いてタイミングよく「あみ」を振れば、ハチの群れを逆に一網打尽に捕まえられます！自信がないときは全力ダッシュで逃げ切りましょう。</p>
              </div>

              <div class="tip-card tip-info">
                <div class="tip-title">
                  <span class="tip-emoji">💡</span>
                  <strong>夜の灯火採集（ライトトラップ）</strong>
                </div>
                <p>キャンプ場にある大きな水銀灯ライトトラップ。夜間にスイッチをONにすると、光に引き寄せられて島中からレアな夜行性昆虫が集まってきます！</p>
              </div>

              <div class="tip-card tip-success">
                <div class="tip-title">
                  <span class="tip-emoji">👑</span>
                  <strong>キング冠・ゴールド冠の最高サイズを狙え！</strong>
                </div>
                <p>同じ虫でも個体によってサイズ（mm）が異なります。標準よりひと回り大きい「銀冠」、さらに巨大な「金冠」、規格外の「キング冠」が存在！ブリード工房で代々交配を重ねると、ギネス級の超巨大昆虫が誕生します。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="htp-footer">
          <button id="htp-btn-ok" class="htp-ok-btn">わかった！島へいく</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.modalOverlay);

    // Event listeners
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });

    const closeBtn = this.modalOverlay.querySelector('#htp-btn-close');
    closeBtn?.addEventListener('click', () => {
      this.close();
    });

    const okBtn = this.modalOverlay.querySelector('#htp-btn-ok');
    okBtn?.addEventListener('click', () => {
      this.close();
    });

    // Tab switching
    const tabButtons = this.modalOverlay.querySelectorAll<HTMLButtonElement>('.htp-tab');
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab') as 'controls' | 'basics' | 'features' | 'tips';
        this.switchTab(targetTab);
      });
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  private switchTab(tab: 'controls' | 'basics' | 'features' | 'tips'): void {
    if (!this.modalOverlay) return;
    this.audio.playClick();
    this.currentTab = tab;

    // Update buttons
    const tabButtons = this.modalOverlay.querySelectorAll<HTMLButtonElement>('.htp-tab');
    tabButtons.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update tab panes
    const panes = this.modalOverlay.querySelectorAll<HTMLElement>('.htp-tab-pane');
    panes.forEach((pane) => {
      if (pane.id === `htp-tab-${tab}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  }

  public open(initialTab: 'controls' | 'basics' | 'features' | 'tips' = 'controls'): void {
    if (!this.modalOverlay) return;
    this.audio.playClick();
    this.isOpen = true;
    this.switchTab(initialTab);
    this.modalOverlay.style.display = 'flex';
    // Trigger reflow for animation
    void this.modalOverlay.offsetWidth;
    this.modalOverlay.classList.remove('hidden');
    this.modalOverlay.classList.add('fade-in');
  }

  public close(): void {
    if (!this.modalOverlay) return;
    this.audio.playClick();
    this.isOpen = false;
    this.modalOverlay.classList.remove('fade-in');
    this.modalOverlay.classList.add('hidden');
    setTimeout(() => {
      if (!this.isOpen && this.modalOverlay) {
        this.modalOverlay.style.display = 'none';
      }
    }, 200);
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public isVisible(): boolean {
    return this.isOpen;
  }

  public getActiveTab(): 'controls' | 'basics' | 'features' | 'tips' {
    return this.currentTab;
  }
}

