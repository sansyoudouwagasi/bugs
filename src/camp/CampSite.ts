import * as THREE from 'three';
import { World } from '../world/World';
import { InsectManager } from '../insects/InsectManager';
import { InsectDatabase } from '../insects/InsectData';
import { HealthManager } from '../player/HealthManager';
import { TimeManager } from '../time/TimeManager';

export class CampSite {
  public group: THREE.Group;
  public campCenter: THREE.Vector3;

  // Camp objects
  private fireLight!: THREE.PointLight;
  private flameMesh!: THREE.Mesh;
  private fireParticles!: THREE.Points;
  private fireParticleGeo!: THREE.BufferGeometry;
  private particlePositions!: Float32Array;

  // Light Trap objects
  public isTrapActive: boolean = false;
  private trapLight!: THREE.PointLight;
  private trapSheet!: THREE.Mesh;
  private trapScreenCenter!: THREE.Vector3;
  private trapSwitchedOnMesh!: THREE.Mesh;

  private insectManager: InsectManager;
  private healthManager: HealthManager;
  private timeManager: TimeManager;

  private timeElapsed: number = 0;
  private nextInsectTimer: number = 2.0;

  constructor(
    world: World,
    insectManager: InsectManager,
    healthManager: HealthManager,
    timeManager: TimeManager
  ) {
    this.group = new THREE.Group();
    this.insectManager = insectManager;
    this.healthManager = healthManager;
    this.timeManager = timeManager;

    // Mountain peak coordinates (around x: 42, z: -8)
    const groundY = world.getTerrainHeight(42, -8);
    this.campCenter = new THREE.Vector3(42, groundY, -8);

    // 1. Cozy Camping Tent
    this.buildTent();

    // 2. Crackling Campfire
    this.buildCampfire();

    // 3. Log Benches & Astronomical Telescope
    this.buildDecorations();

    // 4. White Screen Light Trap
    this.buildLightTrap();

    this.group.position.copy(this.campCenter);
    world.scene.add(this.group);
  }

  /**
   * 1. Build Canvas A-frame Tent
   */
  private buildTent(): void {
    const tentGroup = new THREE.Group();
    tentGroup.position.set(-3.5, 0, 1.5);
    tentGroup.rotation.y = Math.PI / 6;

    // Canvas Fabric (Warm cream)
    const fabricMat = new THREE.MeshLambertMaterial({
      color: 0xf6e58d,
      side: THREE.DoubleSide,
      flatShading: true
    });

    const tentShape = new THREE.Shape();
    tentShape.moveTo(-1.6, 0);
    tentShape.lineTo(0, 2.2);
    tentShape.lineTo(1.6, 0);
    tentShape.closePath();

    const extrudeSettings = { depth: 3.2, bevelEnabled: false };
    const tentGeo = new THREE.ExtrudeGeometry(tentShape, extrudeSettings);
    const tent = new THREE.Mesh(tentGeo, fabricMat);
    tent.position.set(0, 0, -1.6);
    tentGroup.add(tent);

    // Wooden Tent Poles
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.8);
    for (let z of [-1.58, 1.58]) {
      const p1 = new THREE.Mesh(poleGeo, poleMat);
      p1.position.set(-0.7, 1.1, z);
      p1.rotation.z = -Math.PI / 6;
      const p2 = new THREE.Mesh(poleGeo, poleMat);
      p2.position.set(0.7, 1.1, z);
      p2.rotation.z = Math.PI / 6;
      tentGroup.add(p1, p2);
    }

    // Warm inner lantern light
    const innerLight = new THREE.PointLight(0xffbe76, 0.8, 6);
    innerLight.position.set(0, 1.0, 0);
    tentGroup.add(innerLight);

    this.group.add(tentGroup);
  }

  /**
   * 2. Build Campfire with lively flame, pulsing warm light, and spark particles
   */
  private buildCampfire(): void {
    const fireGroup = new THREE.Group();
    fireGroup.position.set(0, 0, 0);

    // Ring of stones
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x57606f, flatShading: true });
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const stoneGeo = new THREE.DodecahedronGeometry(0.25, 0);
      const stone = new THREE.Mesh(stoneGeo, stoneMat);
      stone.position.set(Math.cos(angle) * 0.9, 0.12, Math.sin(angle) * 0.9);
      stone.rotation.set(Math.random(), Math.random(), Math.random());
      fireGroup.add(stone);
    }

    // Crossed logs
    const logMat = new THREE.MeshLambertMaterial({ color: 0x533519 });
    const logGeo = new THREE.CylinderGeometry(0.08, 0.09, 1.4);
    for (let i = 0; i < 3; i++) {
      const log = new THREE.Mesh(logGeo, logMat);
      log.position.set(0, 0.15, 0);
      log.rotation.x = Math.PI / 2;
      log.rotation.z = (i / 3) * Math.PI;
      fireGroup.add(log);
    }

    // Stylized low-poly flame
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xff4757,
      emissive: 0xffa502,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      flatShading: true
    });
    const flameGeo = new THREE.ConeGeometry(0.4, 0.9, 6);
    this.flameMesh = new THREE.Mesh(flameGeo, flameMat);
    this.flameMesh.position.set(0, 0.55, 0);
    fireGroup.add(this.flameMesh);

    // Warm Fire Point Light
    this.fireLight = new THREE.PointLight(0xff793f, 2.2, 14);
    this.fireLight.position.set(0, 0.8, 0);
    fireGroup.add(this.fireLight);

    // Spark Particles
    const particleCount = 20;
    this.particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      this.particlePositions[i * 3] = (Math.random() - 0.5) * 0.5;
      this.particlePositions[i * 3 + 1] = 0.4 + Math.random() * 1.5;
      this.particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }

    this.fireParticleGeo = new THREE.BufferGeometry();
    this.fireParticleGeo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfffa65,
      size: 0.12,
      transparent: true,
      opacity: 0.85
    });
    this.fireParticles = new THREE.Points(this.fireParticleGeo, particleMat);
    fireGroup.add(this.fireParticles);

    this.group.add(fireGroup);
  }

  /**
   * 3. Log Benches & Astronomical Telescope
   */
  private buildDecorations(): void {
    // Log Benches
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x6d4c41, flatShading: true });
    for (let [pos, rot] of [
      [new THREE.Vector3(0, 0.2, 2.2), 0],
      [new THREE.Vector3(2.2, 0.2, 0), Math.PI / 2]
    ] as [THREE.Vector3, number][]) {
      const bench = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.45), woodMat);
      bench.position.copy(pos);
      bench.rotation.y = rot;
      this.group.add(bench);
    }

    // Telescope on the edge overlooking the island & stars
    const scopeGroup = new THREE.Group();
    scopeGroup.position.set(3.8, 0, -2.5);
    scopeGroup.rotation.y = -Math.PI / 3;

    // Brass tube
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25
    });
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.5, 8), brassMat);
    tube.position.set(0, 1.4, 0);
    tube.rotation.x = Math.PI / 4; // Pointing up at stars
    scopeGroup.add(tube);

    // Tripod Legs
    const legMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.3);
    for (let i = 0; i < 3; i++) {
      const leg = new THREE.Mesh(legGeo, legMat);
      const angle = (i / 3) * Math.PI * 2;
      leg.position.set(Math.cos(angle) * 0.35, 0.65, Math.sin(angle) * 0.35);
      leg.rotation.z = Math.cos(angle) * 0.35;
      leg.rotation.x = -Math.sin(angle) * 0.35;
      scopeGroup.add(leg);
    }

    this.group.add(scopeGroup);
  }

  /**
   * 4. Build Light Trap (White Sheet Screen & Mercury Lamp)
   */
  private buildLightTrap(): void {
    const trapGroup = new THREE.Group();
    trapGroup.position.set(0, 0, -4.5);

    // Wooden Frame Posts
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x4a3525 });
    const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.6);
    const postL = new THREE.Mesh(postGeo, frameMat);
    postL.position.set(-1.4, 1.3, 0);
    const postR = new THREE.Mesh(postGeo, frameMat);
    postR.position.set(1.4, 1.3, 0);
    const crossbar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.0), frameMat);
    crossbar.rotation.z = Math.PI / 2;
    crossbar.position.set(0, 2.5, 0);
    trapGroup.add(postL, postR, crossbar);

    // White Cotton Sheet Screen (2.6m wide x 2.1m tall)
    const sheetMat = new THREE.MeshStandardMaterial({
      color: 0xf5f6fa,
      side: THREE.DoubleSide,
      roughness: 0.6,
      metalness: 0.05
    });
    const sheetGeo = new THREE.PlaneGeometry(2.6, 2.1);
    this.trapSheet = new THREE.Mesh(sheetGeo, sheetMat);
    this.trapSheet.position.set(0, 1.25, 0);
    trapGroup.add(this.trapSheet);

    // Powerful Mercury Vapor Lamp on top
    const lampFixtureMat = new THREE.MeshStandardMaterial({ color: 0x2f3640, metalness: 0.7 });
    const lampFixture = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.3, 8), lampFixtureMat);
    lampFixture.rotation.x = Math.PI / 2;
    lampFixture.position.set(0, 2.55, 0.25);
    trapGroup.add(lampFixture);

    // Switch box & Lever
    const boxMat = new THREE.MeshLambertMaterial({ color: 0x34495e });
    const switchBox = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.15), boxMat);
    switchBox.position.set(1.45, 1.2, 0);
    this.trapSwitchedOnMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xe74c3c }) // Red when OFF, Green when ON
    );
    this.trapSwitchedOnMesh.position.set(1.45, 1.3, 0.1);
    trapGroup.add(switchBox, this.trapSwitchedOnMesh);

    // Trap High-Intensity Point Light
    this.trapLight = new THREE.PointLight(0xdff9fb, 0, 28);
    this.trapLight.position.set(0, 2.2, 0.6);
    trapGroup.add(this.trapLight);

    this.trapScreenCenter = new THREE.Vector3().copy(this.campCenter).add(trapGroup.position);
    this.group.add(trapGroup);
  }

  /**
   * Toggle Light Trap ON / OFF
   */
  public toggleTrap(): boolean {
    this.isTrapActive = !this.isTrapActive;

    if (this.isTrapActive) {
      this.trapLight.intensity = 4.5;
      (this.trapSheet.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0xc7ecee);
      (this.trapSheet.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.55;
      (this.trapSwitchedOnMesh.material as THREE.MeshBasicMaterial).color.setHex(0x2ecc71); // Green
    } else {
      this.trapLight.intensity = 0;
      (this.trapSheet.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x000000);
      (this.trapSheet.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
      (this.trapSwitchedOnMesh.material as THREE.MeshBasicMaterial).color.setHex(0xe74c3c); // Red
    }

    return this.isTrapActive;
  }

  /**
   * Check proximity to Campfire
   */
  public isNearCampfire(playerPos: THREE.Vector3): boolean {
    return playerPos.distanceTo(this.campCenter) < 2.5;
  }

  /**
   * Check proximity to Light Trap switch
   */
  public isNearLightTrap(playerPos: THREE.Vector3): boolean {
    return playerPos.distanceTo(this.trapScreenCenter) < 3.2;
  }

  /**
   * Rest at Campfire -> Full Health Recovery
   */
  public restAtCampfire(): void {
    this.healthManager.heal(this.healthManager.maxHealth);
  }

  /**
   * Update Campfire & Light-trap insect attraction
   */
  public update(delta: number): void {
    this.timeElapsed += delta;

    // 1. Animate Campfire flame & light flicker
    const flicker = Math.sin(this.timeElapsed * 14) * 0.2 + Math.cos(this.timeElapsed * 9) * 0.15;
    this.fireLight.intensity = 2.2 + flicker;
    this.flameMesh.scale.set(1 + flicker * 0.2, 1 + flicker * 0.35, 1 + flicker * 0.2);

    // 2. Animate fire spark particles rising
    const pos = this.particlePositions;
    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3 + 1] += delta * 1.8;
      pos[i * 3] += (Math.random() - 0.5) * delta * 0.4;
      if (pos[i * 3 + 1] > 2.0) {
        pos[i * 3 + 1] = 0.4;
        pos[i * 3] = (Math.random() - 0.5) * 0.4;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
    }
    this.fireParticleGeo.attributes.position.needsUpdate = true;

    // 3. Light Trap Insect Attraction Logic
    if (this.isTrapActive) {
      const isNightOrEvening = this.timeManager.getPeriod() === 'night' || this.timeManager.getPeriod() === 'evening';

      // Sheet light pulse
      this.trapLight.intensity = 4.0 + Math.sin(this.timeElapsed * 20) * 0.4;

      if (isNightOrEvening) {
        this.nextInsectTimer -= delta;
        if (this.nextInsectTimer <= 0) {
          this.nextInsectTimer = 4.0 + Math.random() * 4.0; // Every 4~8s
          this.attractInsectToSheet();
        }
      }
    }
  }

  /**
   * Spawn a night-flying insect and land on white sheet!
   */
  private attractInsectToSheet(): void {
    const candidateIds = [
      'luna_moth',          // オオミズアオ (SSR)
      'luna_moth',
      'atlas_moth',         // ヨナグニサン (UR legendary moth!)
      'stag_beetle_miyama', // ミヤマクワガタ
      'rhinoceros_beetle',  // カブトムシ
      'firefly'             // ホタル
    ];

    const chosenId = candidateIds[Math.floor(Math.random() * candidateIds.length)];
    const data = InsectDatabase.getById(chosenId);
    if (!data) return;

    // Position on screen: X in [-1.0, 1.0], Y in [0.4, 1.8]
    const localX = (Math.random() - 0.5) * 2.0;
    const localY = 0.4 + Math.random() * 1.4;

    const worldPos = new THREE.Vector3(
      this.campCenter.x + localX,
      this.campCenter.y + localY,
      this.campCenter.z - 4.5 + 0.15
    );

    // Spawn via InsectManager near the sheet
    this.insectManager.spawnSingleInsect(chosenId, worldPos);
  }
}
