import * as THREE from 'three';
import { Island } from '../world/Island';

export class SumoArena {
  public group: THREE.Group;
  public arenaPosition: THREE.Vector3;
  private promptEl: HTMLElement | null = null;
  private isNear: boolean = false;
  private islands: Island;
  private refereeFan: THREE.Mesh | null = null;
  private torchFlames: THREE.PointLight[] = [];

  public onInteract?: () => void;

  constructor(island: Island) {
    this.islands = island;
    this.group = new THREE.Group();

    // Located on the southwest beach clearing
    const x = -20;
    const z = -16;
    const y = this.islands.getHeightAt(x, z);
    this.arenaPosition = new THREE.Vector3(x, y, z);
    this.group.position.set(x, y, z);

    this.buildArena();
    this.createPromptUI();
  }

  private buildArena(): void {
    // 1. Massive Log Ring (Dohyo base)
    const logGeo = new THREE.CylinderGeometry(2.6, 2.8, 0.45, 18);
    const logMat = new THREE.MeshLambertMaterial({ color: 0x8d5524 });
    const logBase = new THREE.Mesh(logGeo, logMat);
    logBase.position.y = 0.22;
    this.group.add(logBase);

    // Clay / Sand interior Dohyo
    const sandGeo = new THREE.CylinderGeometry(2.35, 2.35, 0.46, 18);
    const sandMat = new THREE.MeshLambertMaterial({ color: 0xeccc68 });
    const sandRing = new THREE.Mesh(sandGeo, sandMat);
    sandRing.position.y = 0.23;
    this.group.add(sandRing);

    // Circular Straw Border (Tawara)
    const strawGeo = new THREE.TorusGeometry(2.1, 0.08, 6, 24);
    strawGeo.rotateX(Math.PI / 2);
    const strawMat = new THREE.MeshLambertMaterial({ color: 0xc49b4b });
    const strawRing = new THREE.Mesh(strawGeo, strawMat);
    strawRing.position.y = 0.47;
    this.group.add(strawRing);

    // Center Shikiri lines (White marker lines)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineGeo = new THREE.PlaneGeometry(0.7, 0.06);
    lineGeo.rotateX(-Math.PI / 2);
    const line1 = new THREE.Mesh(lineGeo, lineMat);
    line1.position.set(-0.35, 0.47, 0);
    const line2 = new THREE.Mesh(lineGeo, lineMat);
    line2.position.set(0.35, 0.47, 0);
    this.group.add(line1, line2);

    // 2. Four Corner Banners (Nobori Flags)
    const bannerColors = [0xe74c3c, 0xffffff, 0x3498db, 0xf1c40f];
    const bannerAngles = [Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75];

    bannerAngles.forEach((ang, idx) => {
      const bx = Math.cos(ang) * 3.4;
      const bz = Math.sin(ang) * 3.4;

      // Pole
      const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 3.2, 6);
      const poleMat = new THREE.MeshLambertMaterial({ color: 0x57606f });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(bx, 1.6, bz);
      this.group.add(pole);

      // Flag Fabric
      const flagGeo = new THREE.PlaneGeometry(0.7, 1.6);
      const flagMat = new THREE.MeshLambertMaterial({
        color: bannerColors[idx],
        side: THREE.DoubleSide
      });
      const flag = new THREE.Mesh(flagGeo, flagMat);
      flag.position.set(bx + 0.35, 2.1, bz);
      flag.rotation.y = ang + Math.PI / 2;
      this.group.add(flag);
    });

    // 3. Two Torches (Left & Right)
    for (const side of [-1, 1]) {
      const torchX = side * 3.2;
      const torchZ = 0;

      const torchPoleGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.8, 6);
      const torchMat = new THREE.MeshLambertMaterial({ color: 0x4b4b4b });
      const torch = new THREE.Mesh(torchPoleGeo, torchMat);
      torch.position.set(torchX, 0.9, torchZ);
      this.group.add(torch);

      // Flame bowl
      const bowlGeo = new THREE.CylinderGeometry(0.18, 0.08, 0.2, 8);
      const bowlMat = new THREE.MeshLambertMaterial({ color: 0x2f3542 });
      const bowl = new THREE.Mesh(bowlGeo, bowlMat);
      bowl.position.set(torchX, 1.85, torchZ);
      this.group.add(bowl);

      // Fire light
      const fireLight = new THREE.PointLight(0xff793f, 1.2, 8);
      fireLight.position.set(torchX, 2.1, torchZ);
      this.group.add(fireLight);
      this.torchFlames.push(fireLight);
    }

    // 4. Referee NPC (行司 殿様ガエル)
    this.buildRefereeNPC();
  }

  private buildRefereeNPC(): void {
    const refGroup = new THREE.Group();
    refGroup.position.set(0, 0.46, 2.7);
    refGroup.rotation.y = Math.PI;

    // Body (Green frog referee in traditional ceremonial attire)
    const frogMat = new THREE.MeshLambertMaterial({ color: 0x2ed573, flatShading: true });
    const kimonoMat = new THREE.MeshLambertMaterial({ color: 0x706fd3, flatShading: true });

    // Kimono Body
    const bodyGeo = new THREE.CylinderGeometry(0.2, 0.35, 0.55, 8);
    const body = new THREE.Mesh(bodyGeo, kimonoMat);
    body.position.y = 0.28;
    refGroup.add(body);

    // Frog Head
    const headGeo = new THREE.SphereGeometry(0.24, 7, 7);
    const head = new THREE.Mesh(headGeo, frogMat);
    head.position.y = 0.65;
    refGroup.add(head);

    // Big Frog Eyes
    const eyeMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    for (const ex of [-0.14, 0.14]) {
      const eyeOrb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 5, 5), eyeMat);
      eyeOrb.position.set(ex, 0.8, 0.12);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), pupilMat);
      pupil.position.set(ex, 0.82, 0.18);
      refGroup.add(eyeOrb, pupil);
    }

    // Eboshi hat (Black tall ceremonial hat)
    const hatMat = new THREE.MeshLambertMaterial({ color: 0x1e272e });
    const hatGeo = new THREE.CylinderGeometry(0.08, 0.16, 0.35, 6);
    const hat = new THREE.Mesh(hatGeo, hatMat);
    hat.position.set(0, 0.95, -0.05);
    hat.rotation.x = -0.2;
    refGroup.add(hat);

    // Gunbai Fan (Referee fan)
    const fanPivot = new THREE.Group();
    fanPivot.position.set(0.3, 0.45, 0.2);
    fanPivot.rotation.z = -0.3;

    const fanStick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.35),
      new THREE.MeshLambertMaterial({ color: 0xd63031 })
    );
    const fanHead = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.02, 8),
      new THREE.MeshLambertMaterial({ color: 0xf1c40f })
    );
    fanHead.position.y = 0.18;
    fanHead.rotation.x = Math.PI / 2;

    fanPivot.add(fanStick, fanHead);
    refGroup.add(fanPivot);
    this.refereeFan = fanHead;

    this.group.add(refGroup);
  }

  private createPromptUI(): void {
    this.promptEl = document.createElement('div');
    this.promptEl.className = 'arena-prompt hidden';
    this.promptEl.innerHTML = `
      <div class="prompt-icon">🏆</div>
      <div class="prompt-text">
        <span class="prompt-title">昆虫相撲コロシアム</span>
        <span class="prompt-sub">タップ または [Space] で挑む！</span>
      </div>
    `;
    this.promptEl.addEventListener('click', () => {
      if (this.onInteract) this.onInteract();
    });
    document.body.appendChild(this.promptEl);
  }

  public update(playerPos: THREE.Vector3, _delta: number): void {
    // Flicker torch flames
    this.torchFlames.forEach((flame, i) => {
      flame.intensity = 1.0 + Math.sin(Date.now() * 0.01 + i * 2) * 0.3;
    });

    // Animate referee fan waving subtly
    if (this.refereeFan) {
      this.refereeFan.rotation.z = Math.sin(Date.now() * 0.004) * 0.2;
    }

    // Distance check
    const dist = playerPos.distanceTo(this.arenaPosition);
    if (dist < 4.8) {
      if (!this.isNear) {
        this.isNear = true;
        this.promptEl?.classList.remove('hidden');
      }
    } else {
      if (this.isNear) {
        this.isNear = false;
        this.promptEl?.classList.add('hidden');
      }
    }
  }

  public checkInteraction(): boolean {
    if (this.isNear) {
      if (this.onInteract) this.onInteract();
      return true;
    }
    return false;
  }
}
