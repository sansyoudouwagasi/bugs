export class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private seGain: GainNode | null = null;

  // Ambient sound state
  private ambientTimer: number = 0;
  private rainGainNode: GainNode | null = null;
  private seaGainNode: GainNode | null = null;

  constructor() {
    this.isMuted = localStorage.getItem('bug_island_muted') === 'true';
    const initAudio = () => {
      this.ensureContext();
      window.removeEventListener('pointerdown', initAudio);
      window.removeEventListener('keydown', initAudio);
    };
    window.addEventListener('pointerdown', initAudio);
    window.addEventListener('keydown', initAudio);
  }

  private ensureContext(): AudioContext | null {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return null;
      this.ctx = new AudioCtxClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.bgmGain.connect(this.masterGain);

      this.seGain = this.ctx.createGain();
      this.seGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.seGain.connect(this.masterGain);

      this.setupContinuousAmbience();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('bug_island_muted', this.isMuted.toString());
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public get muted(): boolean {
    return this.isMuted;
  }

  // --- Ambient Environmental Soundscapes ---

  private setupContinuousAmbience(): void {
    if (!this.ctx || !this.bgmGain) return;

    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.1;
      }

      const seaSource = this.ctx.createBufferSource();
      seaSource.buffer = noiseBuffer;
      seaSource.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      this.seaGainNode = this.ctx.createGain();
      this.seaGainNode.gain.setValueAtTime(0.1, this.ctx.currentTime);

      seaSource.connect(filter);
      filter.connect(this.seaGainNode);
      this.seaGainNode.connect(this.bgmGain);
      seaSource.start();

      // Gentle LFO for wave swells
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(this.seaGainNode.gain);
      lfo.start();
    } catch {
      // Audio autoplay limitation fallback
    }
  }

  public updateAmbience(period: string, weather: string, delta: number): void {
    const ctx = this.ensureContext();
    if (!ctx || this.isMuted) return;

    if (weather === 'rain') {
      if (!this.rainGainNode) {
        this.startRainSound();
      } else {
        this.rainGainNode.gain.setTargetAtTime(0.25, ctx.currentTime, 0.5);
      }
    } else if (this.rainGainNode) {
      this.rainGainNode.gain.setTargetAtTime(0.001, ctx.currentTime, 0.5);
    }

    this.ambientTimer -= delta;
    if (this.ambientTimer <= 0) {
      if (weather !== 'rain') {
        if (period === 'day' || period === 'morning') {
          this.playBirdChirp();
          this.ambientTimer = 4.0 + Math.random() * 5.0;
        } else if (period === 'sunset') {
          this.playHigurashiChirp();
          this.ambientTimer = 3.0 + Math.random() * 4.0;
        } else if (period === 'night') {
          this.playNightCricket();
          this.ambientTimer = 2.5 + Math.random() * 3.5;
        }
      } else {
        this.ambientTimer = 5.0;
      }
    }
  }

  private startRainSound(): void {
    if (!this.ctx || !this.bgmGain) return;
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.15;
      }

      const rainSource = this.ctx.createBufferSource();
      rainSource.buffer = noiseBuffer;
      rainSource.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.rainGainNode = this.ctx.createGain();
      this.rainGainNode.gain.setValueAtTime(0.25, this.ctx.currentTime);

      rainSource.connect(filter);
      filter.connect(this.rainGainNode);
      this.rainGainNode.connect(this.bgmGain);
      rainSource.start();
    } catch {
      // Fallback
    }
  }

  private playBirdChirp(): void {
    if (!this.ctx || !this.seGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 2400 + Math.random() * 600;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, now + 0.06);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + 0.12);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  private playHigurashiChirp(): void {
    if (!this.ctx || !this.seGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(3200, now);
    osc.frequency.linearRampToValueAtTime(2600, now + 0.35);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.42);
  }

  private playNightCricket(): void {
    if (!this.ctx || !this.seGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(4500, now);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.setValueAtTime(0.01, now + 0.04);
    gain.gain.setValueAtTime(0.04, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  // --- Sound Effects (SE) ---

  public playFootstep(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110 + Math.random() * 30, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.07);

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  public playJump(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.14);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  public playNetSwing(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;

    const bufferSize = Math.floor(ctx.sampleRate * 0.18);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.3;
    }

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.linearRampToValueAtTime(1800, now + 0.08);
    filter.frequency.linearRampToValueAtTime(400, now + 0.18);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.seGain);
    source.start(now);
  }

  public playTreeShake(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;

    const bufferSize = Math.floor(ctx.sampleRate * 0.35);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.25;
    }

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(0.8, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.seGain);
    source.start(now);
  }

  public playWaspWarning(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.linearRampToValueAtTime(320, now + 0.1);
    osc.frequency.linearRampToValueAtTime(280, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  public playDamage(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.26);
  }

  public playFaint(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const notes = [329.63, 311.13, 293.66, 277.18];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.18);
      gain.gain.setValueAtTime(0.18, now + idx * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.25);
      osc.connect(gain);
      gain.connect(this.seGain!);
      osc.start(now + idx * 0.18);
      osc.stop(now + idx * 0.18 + 0.26);
    });
  }

  public playPurchase(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.15, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.22);
      osc.connect(gain);
      gain.connect(this.seGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.25);
    });
  }

  public playCoin(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    [987.77, 1318.51].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.16, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.22);
      osc.connect(gain);
      gain.connect(this.seGain!);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.24);
    });
  }

  public playFanfare(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.2, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.seGain!);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.38);
    });
  }

  // Phase 8: Sumo Battle Audio
  public playGong(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;

    // Resonant Japanese bell / gong strike
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 1.2);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 1.2);
  }

  public playClash(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;

    // Heavy wooden collision impact
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.seGain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  public playCheer(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.seGain || this.isMuted) return;
    const now = ctx.currentTime;

    // Crowd cheering noise burst
    const bufferSize = ctx.sampleRate * 0.8;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin(i / bufferSize * Math.PI);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000;
    filter.Q.value = 2.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.seGain);
    noise.start(now);
    noise.stop(now + 0.8);
  }
}
