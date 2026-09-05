import * as THREE from 'three';

export class MysticCave {
  public group: THREE.Group;
  public dockPosition: THREE.Vector3; // Mainland dock
  public caveSpawnPosition: THREE.Vector3; // Cave isle spawn
  public caveCenterPosition: THREE.Vector3; // Center of cave isle

  private dockPrompt: HTMLElement | null = null;
  private returnPrompt: HTMLElement | null = null;
  private isNearDock: boolean = false;
  private isNearReturn: boolean = false;
  private crystalLights: THREE.PointLight[] = [];

  public onTravelToCave?: () => void;
  public onTravelToMainland?: () => void;

  constructor() {
    this.group = new THREE.Group();

    // 1. Mainland Dock coordinates
    this.dockPosition = new THREE.Vector3(0, 0.4, -48);

    // 2. Mystic Cave Isle coordinates (Offshore south-west)
    this.caveCenterPosition = new THREE.Vector3(-120, 0.5, -110);
    this.caveSpawnPosition = new THREE.Vector3(-120, 1.2, -98);

    this.buildMainlandDock();
    this.buildCaveIsland();
    this.createPrompts();
  }

  private buildMainlandDock(): void {
    const dockGroup = new THREE.Group();
    dockGroup.position.copy(this.dockPosition);

    // Wooden Pier Planks
    const plankMat = new THREE.MeshLambertMaterial({ color: 0x795548 });
    const pierGeo = new THREE.BoxGeometry(3.2, 0.3, 7.5);
    const pier = new THREE.Mesh(pierGeo, plankMat);
    pier.position.set(0, 0.15, -1.5);
    dockGroup.add(pier);

    // Dock Pilings (Posts)
    const postGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.2, 6);
    const postMat = new THREE.MeshLambertMaterial({ color: 0x4e342e });
    for (const px of [-1.5, 1.5]) {
      for (const pz of [0.5, -1.8, -4.2]) {
        const post = new THREE.Mesh(postGeo, postMat);
        post.position.set(px, -0.6, pz);
        dockGroup.add(post);
      }
    }

    // Wooden Rowboat tied to pier
    const boatGroup = this.createRowboat();
    boatGroup.position.set(2.4, 0.1, -2.5);
    boatGroup.rotation.y = 0.3;
    dockGroup.add(boatGroup);

    this.group.add(dockGroup);
  }

  private buildCaveIsland(): void {
    const caveGroup = new THREE.Group();
    caveGroup.position.copy(this.caveCenterPosition);

    // 1. Rocky Island Terrain
    const isleGeo = new THREE.CylinderGeometry(24, 28, 6, 18);
    const rockMat = new THREE.MeshLambertMaterial({ color: 0x2d3436, flatShading: true });
    const isle = new THREE.Mesh(isleGeo, rockMat);
    isle.position.y = -2.5;
    caveGroup.add(isle);

    // Cavern Sand & Moss Interior
    const mossGeo = new THREE.CylinderGeometry(21, 21, 0.6, 18);
    const mossMat = new THREE.MeshLambertMaterial({ color: 0x1e372f, flatShading: true });
    const moss = new THREE.Mesh(mossGeo, mossMat);
    moss.position.y = 0.55;
    caveGroup.add(moss);

    // 2. Ancient Sacred Tree (テイオウゼミの住処)
    const trunkGeo = new THREE.CylinderGeometry(1.2, 2.2, 8, 8);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x3d271d });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(0, 4.5, 0);
    caveGroup.add(trunk);

    const foliageGeo = new THREE.DodecahedronGeometry(5.5, 1);
    const foliageMat = new THREE.MeshLambertMaterial({ color: 0x134e34, flatShading: true });
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.set(0, 8.5, 0);
    caveGroup.add(foliage);

    // 3. Glowing Crystals around the cave
    const crystalGeo = new THREE.ConeGeometry(0.6, 3.2, 5);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x70a1ff,
      emissive: 0x0984e3,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.8
    });

    const purpleCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xa29bfe,
      emissive: 0x6c5ce7,
      emissiveIntensity: 0.95,
      roughness: 0.1,
      metalness: 0.8
    });

    const crystalAngles = [0.2, 0.9, 1.8, 2.7, 3.6, 4.5, 5.4];
    crystalAngles.forEach((ang, idx) => {
      const crDist = 12 + (idx % 3) * 3;
      const cx = Math.cos(ang) * crDist;
      const cz = Math.sin(ang) * crDist;

      const cluster = new THREE.Group();
      cluster.position.set(cx, 0.8, cz);

      for (let c = 0; c < 3; c++) {
        const mat = (idx + c) % 2 === 0 ? crystalMat : purpleCrystalMat;
        const cry = new THREE.Mesh(crystalGeo, mat);
        cry.position.set((c - 1) * 0.4, 1.2, (c % 2) * 0.4);
        cry.rotation.x = (Math.random() - 0.5) * 0.4;
        cry.rotation.z = (Math.random() - 0.5) * 0.4;
        cluster.add(cry);
      }

      // Crystal Light
      const pLight = new THREE.PointLight((idx % 2 === 0 ? 0x74b9ff : 0xa29bfe), 1.5, 15);
      pLight.position.set(cx, 2.5, cz);
      caveGroup.add(pLight);
      this.crystalLights.push(pLight);

      caveGroup.add(cluster);
    });

    // 4. Return boat at cave shore
    const returnBoat = this.createRowboat();
    returnBoat.position.set(0, 0.1, 14);
    returnBoat.rotation.y = Math.PI;
    caveGroup.add(returnBoat);

    this.group.add(caveGroup);
  }

  private createRowboat(): THREE.Group {
    const boat = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x5d4037, flatShading: true });

    // Hull
    const hullGeo = new THREE.BoxGeometry(1.4, 0.6, 3.0);
    const hull = new THREE.Mesh(hullGeo, woodMat);
    hull.position.y = 0.2;
    boat.add(hull);

    // Bench
    const benchGeo = new THREE.BoxGeometry(1.2, 0.1, 0.4);
    const bench = new THREE.Mesh(benchGeo, new THREE.MeshLambertMaterial({ color: 0x8d6e63 }));
    bench.position.set(0, 0.4, 0);
    boat.add(bench);

    // Lantern
    const lanternGeo = new THREE.BoxGeometry(0.2, 0.3, 0.2);
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xffeaa7,
      emissive: 0xfdcb6e,
      emissiveIntensity: 0.9
    });
    const lantern = new THREE.Mesh(lanternGeo, lanternMat);
    lantern.position.set(0, 0.6, -1.2);
    boat.add(lantern);

    const light = new THREE.PointLight(0xffbe76, 1.2, 6);
    light.position.set(0, 0.7, -1.2);
    boat.add(light);

    return boat;
  }

  private createPrompts(): void {
    // Mainland Dock Prompt
    this.dockPrompt = document.createElement('div');
    this.dockPrompt.className = 'dock-prompt hidden';
    this.dockPrompt.innerHTML = `
      <div class="prompt-icon">⛵</div>
      <div class="prompt-text">
        <span class="prompt-title">秘境ボートツアー</span>
        <span class="prompt-sub">タップ または [Space] で「光る水晶洞窟」へ渡る</span>
      </div>
    `;
    this.dockPrompt.addEventListener('click', () => {
      if (this.onTravelToCave) this.onTravelToCave();
    });

    // Return to mainland prompt
    this.returnPrompt = document.createElement('div');
    this.returnPrompt.className = 'dock-prompt hidden';
    this.returnPrompt.innerHTML = `
      <div class="prompt-icon">⛵</div>
      <div class="prompt-text">
        <span class="prompt-title">本島へ戻る</span>
        <span class="prompt-sub">タップ または [Space] で本島桟橋へ帰還</span>
      </div>
    `;
    this.returnPrompt.addEventListener('click', () => {
      if (this.onTravelToMainland) this.onTravelToMainland();
    });

    document.body.appendChild(this.dockPrompt);
    document.body.appendChild(this.returnPrompt);
  }

  public update(playerPos: THREE.Vector3, _delta: number): void {
    // Pulse crystal lights
    const time = Date.now() * 0.003;
    this.crystalLights.forEach((light, i) => {
      light.intensity = 1.2 + Math.sin(time + i * 1.2) * 0.4;
    });

    // 1. Mainland dock distance
    const distDock = playerPos.distanceTo(this.dockPosition);
    if (distDock < 5.0) {
      if (!this.isNearDock) {
        this.isNearDock = true;
        this.dockPrompt?.classList.remove('hidden');
      }
    } else {
      if (this.isNearDock) {
        this.isNearDock = false;
        this.dockPrompt?.classList.add('hidden');
      }
    }

    // 2. Cave return boat distance
    const returnPos = new THREE.Vector3(
      this.caveCenterPosition.x,
      this.caveCenterPosition.y,
      this.caveCenterPosition.z + 14
    );
    const distReturn = playerPos.distanceTo(returnPos);
    if (distReturn < 5.0) {
      if (!this.isNearReturn) {
        this.isNearReturn = true;
        this.returnPrompt?.classList.remove('hidden');
      }
    } else {
      if (this.isNearReturn) {
        this.isNearReturn = false;
        this.returnPrompt?.classList.add('hidden');
      }
    }
  }

  public checkInteraction(): boolean {
    if (this.isNearDock) {
      if (this.onTravelToCave) this.onTravelToCave();
      return true;
    }
    if (this.isNearReturn) {
      if (this.onTravelToMainland) this.onTravelToMainland();
      return true;
    }
    return false;
  }
}
