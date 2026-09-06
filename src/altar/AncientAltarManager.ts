import * as THREE from 'three';
import { Island } from '../world/Island';
import { AudioManager } from '../audio/AudioManager';
import { WeatherManager } from '../weather/WeatherManager';
import { InsectManager } from '../insects/InsectManager';
import { ShopManager } from '../shop/ShopManager';

export interface AltarPrompt {
  type: 'altar';
  message: string;
}

export class AncientAltarManager {
  public group: THREE.Group;
  private island: Island;
  private weatherManager: WeatherManager;
  private insectManager: InsectManager;
  private shopManager: ShopManager;
  private audio?: AudioManager;

  // Altar position (High ancient sanctum: X: 35, Z: -35)
  public readonly position = new THREE.Vector3(32, 0, -32);
  public altarY: number = 0;

  public isRitualActive: boolean = false;
  private ritualTimer: number = 0;
  private runePillars: THREE.Mesh[] = [];
  private crystalLight!: THREE.PointLight;
  private auraParticles: THREE.Points | null = null;

  constructor(
    island: Island,
    weatherManager: WeatherManager,
    insectManager: InsectManager,
    shopManager: ShopManager,
    audio?: AudioManager
  ) {
    this.group = new THREE.Group();
    this.island = island;
    this.weatherManager = weatherManager;
    this.insectManager = insectManager;
    this.shopManager = shopManager;
    this.audio = audio;

    this.altarY = this.island.getHeightAt(this.position.x, this.position.z);
    this.position.y = this.altarY;

    this.buildAltar();
  }

  public setAudio(audio: AudioManager): void {
    this.audio = audio;
  }

  private buildAltar(): void {
    const root = new THREE.Group();
    root.position.copy(this.position);

    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x4b6584,
      roughness: 0.85,
      metalness: 0.1,
      flatShading: true
    });
    const runeMat = new THREE.MeshStandardMaterial({
      color: 0x45aaf2,
      emissive: 0x2d98da,
      emissiveIntensity: 0.6,
      roughness: 0.3
    });
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x2bcbba,
      emissive: 0x20bf6b,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.5,
      transparent: true,
      opacity: 0.9
    });

    // 1. Stone Circle Base
    const baseCircle = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.8, 0.45, 16), stoneMat);
    baseCircle.position.y = 0.22;
    baseCircle.receiveShadow = true;
    root.add(baseCircle);

    // Inner concentric ring
    const innerRing = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.4, 0.55, 12), stoneMat);
    innerRing.position.y = 0.35;
    root.add(innerRing);

    // 2. 6 Ancient Rune Pillars standing in a circle
    const pillarCount = 6;
    const pillarR = 4.2;
    for (let i = 0; i < pillarCount; i++) {
      const angle = (i / pillarCount) * Math.PI * 2;
      const px = Math.cos(angle) * pillarR;
      const pz = Math.sin(angle) * pillarR;

      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 3.2, 6), stoneMat);
      pillar.position.set(px, 1.6, pz);
      pillar.castShadow = true;

      // Inlaid glowing rune gem on each pillar
      const runeGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.18), runeMat);
      runeGem.position.set(px * 0.92, 2.2, pz * 0.92);
      root.add(pillar, runeGem);
      this.runePillars.push(runeGem);
    }

    // 3. Central Altar Pedestal with Glowing Ancient Crystal
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.2, 1.1, 8), stoneMat);
    pedestal.position.y = 0.85;
    pedestal.castShadow = true;

    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.48), crystalMat);
    crystal.position.set(0, 1.7, 0);

    this.crystalLight = new THREE.PointLight(0x2bcbba, 1.8, 12);
    this.crystalLight.position.set(0, 1.8, 0);

    root.add(pedestal, crystal, this.crystalLight);

    // 4. Subtle ambient mystical aura particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = Math.random() * 4.5;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = 0.5 + Math.random() * 3.5;
      positions[i * 3 + 2] = Math.sin(theta) * r;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x45aaf2,
      size: 0.15,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    this.auraParticles = new THREE.Points(particleGeo, particleMat);
    root.add(this.auraParticles);

    this.group.add(root);
  }

  public update(delta: number, playerPos: THREE.Vector3): AltarPrompt | null {
    // Pulse crystal light and rotate runes
    if (this.crystalLight) {
      const pulse = 1.6 + Math.sin(Date.now() * 0.003) * 0.4;
      this.crystalLight.intensity = this.isRitualActive ? pulse * 2.5 : pulse;
    }

    if (this.auraParticles) {
      this.auraParticles.rotation.y += delta * 0.2;
    }

    if (this.isRitualActive) {
      this.ritualTimer -= delta;
      if (this.ritualTimer <= 0) {
        this.isRitualActive = false;
      }
    }

    // Check proximity to altar center
    const dist = Math.hypot(playerPos.x - this.position.x, playerPos.z - this.position.z);
    if (dist < 4.8) {
      return {
        type: 'altar',
        message: '⚡ [E] 古代樹の祭壇に祈りを捧げる（伝説召喚）'
      };
    }

    return null;
  }

  /**
   * Summon the ancient legendary insect (Meganeura or Caucasus)
   */
  public summonLegend(targetSpecies: 'meganeura' | 'caucasus_beetle'): { success: boolean; message: string } {
    // Check gold or cost (e.g. 300 G or King insect sacrifice)
    const cost = 300;
    if (this.shopManager.money < cost) {
      return { success: false, message: `祈りを捧げるには【${cost} G】のお布施が必要です。` };
    }

    this.shopManager.money -= cost;
    this.shopManager.updateHUD(true);

    this.isRitualActive = true;
    this.ritualTimer = 35.0; // 35 seconds of legendary presence

    // Change weather to dramatic thunderstorm
    this.weatherManager.setWeather('rain'); // Or dramatic thunder

    // Spawn the legendary insect right above the altar
    const spawnX = this.position.x + (Math.random() - 0.5) * 4;
    const spawnZ = this.position.z + (Math.random() - 0.5) * 4;
    const spawnPos = new THREE.Vector3(spawnX, this.altarY + 2.5, spawnZ);
    this.insectManager.spawnSingleInsect(targetSpecies, spawnPos);

    if (this.audio) {
      this.audio.playFanfare();
    }

    const speciesNames = {
      meganeura: '太古の支配者【メガネウラ】',
      caucasus_beetle: '暴君【コーカサスオオカブト】'
    };

    return {
      success: true,
      message: `⚡ 古代の神託が発動！雷鳴と共に${speciesNames[targetSpecies]}が祭壇の空中に降臨しました！あみで捕獲せよ！`
    };
  }
}
