import * as THREE from 'three';
import { Island } from '../world/Island';
import { AudioManager } from '../audio/AudioManager';
import { TimeManager } from '../time/TimeManager';
import { HealthManager } from '../player/HealthManager';

export interface TreehouseInteractions {
  type: 'bed' | 'breeding' | 'radio' | 'trophy' | null;
  message: string;
}

export class TreehouseManager {
  public group: THREE.Group;
  private island: Island;
  private timeManager: TimeManager;
  private healthManager: HealthManager;
  private audio?: AudioManager;

  // Treehouse root position
  public readonly position = new THREE.Vector3(-14, 0, -22);
  public deckY: number = 0;

  // Interaction points (world coordinates)
  public bedPos: THREE.Vector3 = new THREE.Vector3();
  public breedingDeskPos: THREE.Vector3 = new THREE.Vector3();
  public radioPos: THREE.Vector3 = new THREE.Vector3();
  public trophyPos: THREE.Vector3 = new THREE.Vector3();

  // Active interaction prompt
  public currentPrompt: TreehouseInteractions | null = null;

  constructor(island: Island, timeManager: TimeManager, healthManager: HealthManager, audio?: AudioManager) {
    this.group = new THREE.Group();
    this.island = island;
    this.timeManager = timeManager;
    this.healthManager = healthManager;
    this.audio = audio;

    const groundY = this.island.getHeightAt(this.position.x, this.position.z);
    this.position.y = groundY;
    this.deckY = groundY + 4.2;

    this.buildTreehouse();
  }

  public setAudio(audio: AudioManager): void {
    this.audio = audio;
  }

  private buildTreehouse(): void {
    const root = new THREE.Group();
    root.position.copy(this.position);

    const woodMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b, flatShading: true });
    const darkWoodMat = new THREE.MeshLambertMaterial({ color: 0x5c3818, flatShading: true });
    const leafMat = new THREE.MeshLambertMaterial({ color: 0x2e6b36, flatShading: true });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xc0392b, flatShading: true });
    const fabricMat = new THREE.MeshLambertMaterial({ color: 0xf5f6fa, flatShading: true });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, metalness: 0.8, roughness: 0.3 });

    // 1. Massive Ancient Trunk supporting the treehouse
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.2, 7.5, 10), woodMat);
    trunk.position.set(0, 3.75, 0);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    root.add(trunk);

    // Lush Canopy above
    const canopy1 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.2, 1), leafMat);
    canopy1.position.set(0, 8.5, 0);
    const canopy2 = new THREE.Mesh(new THREE.DodecahedronGeometry(3.5, 1), leafMat);
    canopy2.position.set(-2.5, 7.8, -1.5);
    const canopy3 = new THREE.Mesh(new THREE.DodecahedronGeometry(3.2, 1), leafMat);
    canopy3.position.set(2.2, 8.0, 1.8);
    root.add(canopy1, canopy2, canopy3);

    // 2. Spiral Steps wrapping around trunk up to the deck
    const stepCount = 14;
    for (let i = 0; i < stepCount; i++) {
      const stepAngle = (i / stepCount) * Math.PI * 1.5 - Math.PI * 0.2;
      const stepH = (i / stepCount) * 4.2;
      const stepR = 1.9;
      const step = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.45), darkWoodMat);
      step.position.set(Math.cos(stepAngle) * stepR, stepH, Math.sin(stepAngle) * stepR);
      step.rotation.y = -stepAngle;
      step.castShadow = true;
      step.receiveShadow = true;
      root.add(step);
    }

    // 3. Wooden Deck Platform
    const deckGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.35, 12);
    const deck = new THREE.Mesh(deckGeo, darkWoodMat);
    deck.position.set(0, 4.2, 0);
    deck.receiveShadow = true;
    root.add(deck);

    // Deck Railings
    const railingMat = new THREE.MeshLambertMaterial({ color: 0x795548 });
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 1.6 - Math.PI * 0.4;
      const rx = Math.cos(angle) * 4.1;
      const rz = Math.sin(angle) * 4.1;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 5), railingMat);
      post.position.set(rx, 4.2 + 0.45, rz);
      root.add(post);
    }

    // 4. Cozy Cabin Lodge
    const cabin = new THREE.Group();
    cabin.position.set(0.5, 4.2, 0.5);

    // Walls
    const wallMat = new THREE.MeshLambertMaterial({ color: 0xa0522d, flatShading: true });
    const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 3.2), wallMat);
    cabinBody.position.set(0, 1.2, 0);
    cabinBody.castShadow = true;
    cabin.add(cabinBody);

    // Red Gable Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(3.2, 1.5, 4), roofMat);
    roof.position.set(0, 2.9, 0);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    cabin.add(roof);

    // Chimney with gentle smoke
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 0.4), darkWoodMat);
    chimney.position.set(1.1, 2.8, -0.6);
    cabin.add(chimney);

    // Cabin Door & Signboard
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.6, 0.1), darkWoodMat);
    door.position.set(-0.6, 0.8, 1.61);
    const signboard = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 0.08), woodMat);
    signboard.position.set(-0.6, 1.85, 1.65);
    cabin.add(door, signboard);

    // Warm Lantern Light
    const lantern = new THREE.Mesh(new THREE.DodecahedronGeometry(0.18), brassMat);
    lantern.position.set(-1.3, 1.7, 1.7);
    const lanternLight = new THREE.PointLight(0xffaa44, 1.2, 9);
    lanternLight.position.copy(lantern.position);
    cabin.add(lantern, lanternLight);

    root.add(cabin);

    // 5. Interior Furniture & Interaction Stations
    // A. Fluffy Bed (Left side of deck/cabin)
    const bedGroup = new THREE.Group();
    bedGroup.position.set(-1.8, 4.38, 0.4);
    const bedFrame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 1.8), darkWoodMat);
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.25, 1.7), fabricMat);
    mattress.position.y = 0.25;
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.15, 0.4), new THREE.MeshLambertMaterial({ color: 0x74b9ff }));
    pillow.position.set(0, 0.38, -0.55);
    bedGroup.add(bedFrame, mattress, pillow);
    root.add(bedGroup);
    this.bedPos.set(this.position.x - 1.8, this.deckY, this.position.z + 0.4);

    // B. Breeding Lab Desk (Terrarium & Incubator)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(2.2, 4.38, -1.2);
    const deskTable = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.75, 0.9), woodMat);
    deskTable.position.y = 0.38;
    const incubatorGlass = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.55, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x81ecec, transparent: true, opacity: 0.65, roughness: 0.1 })
    );
    incubatorGlass.position.set(0, 0.95, 0);
    const microscope = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.1, 0.35, 6), brassMat);
    microscope.position.set(-0.5, 0.9, 0);
    deskGroup.add(deskTable, incubatorGlass, microscope);
    root.add(deskGroup);
    this.breedingDeskPos.set(this.position.x + 2.2, this.deckY, this.position.z - 1.2);

    // C. Retro Radio
    const radioGroup = new THREE.Group();
    radioGroup.position.set(2.4, 4.38, 1.0);
    const radioBody = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.25), darkWoodMat);
    radioBody.position.y = 0.18;
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4), brassMat);
    antenna.position.set(0.18, 0.45, 0);
    radioGroup.add(radioBody, antenna);
    root.add(radioGroup);
    this.radioPos.set(this.position.x + 2.4, this.deckY, this.position.z + 1.0);

    // D. Trophy & King Specimen Display Shelf
    const shelfGroup = new THREE.Group();
    shelfGroup.position.set(0.2, 4.38, -2.4);
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 0.4), darkWoodMat);
    shelf.position.y = 0.7;
    const trophyGold = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.06, 0.3, 6), brassMat);
    trophyGold.position.set(-0.5, 1.1, 0.1);
    shelfGroup.add(shelf, trophyGold);
    root.add(shelfGroup);
    this.trophyPos.set(this.position.x + 0.2, this.deckY, this.position.z - 2.4);

    this.group.add(root);
  }

  /**
   * Check proximity to treehouse features and return interaction prompt
   */
  public update(playerPos: THREE.Vector3): TreehouseInteractions | null {
    // Check horizontal and vertical proximity
    const distToCenter = Math.hypot(playerPos.x - this.position.x, playerPos.z - this.position.z);
    
    // Overall treehouse proximity
    if (distToCenter > 6.0) {
      this.currentPrompt = null;
      return null;
    }

    // Proximity to Bed
    const distBed = Math.hypot(playerPos.x - this.bedPos.x, playerPos.z - this.bedPos.z);
    if (distBed < 1.8) {
      this.currentPrompt = {
        type: 'bed',
        message: '[E] ふかふかベッドで休む（時間を進める）'
      };
      return this.currentPrompt;
    }

    // Proximity to Breeding Desk
    const distBreeding = Math.hypot(playerPos.x - this.breedingDeskPos.x, playerPos.z - this.breedingDeskPos.z);
    if (distBreeding < 2.0) {
      this.currentPrompt = {
        type: 'breeding',
        message: '[E] 昆虫ブリーディング工房を開く'
      };
      return this.currentPrompt;
    }

    // Proximity to Radio
    const distRadio = Math.hypot(playerPos.x - this.radioPos.x, playerPos.z - this.radioPos.z);
    if (distRadio < 1.8) {
      this.currentPrompt = {
        type: 'radio',
        message: '[E] レトロラジオを操作する'
      };
      return this.currentPrompt;
    }

    // Proximity to Trophy
    const distTrophy = Math.hypot(playerPos.x - this.trophyPos.x, playerPos.z - this.trophyPos.z);
    if (distTrophy < 1.8) {
      this.currentPrompt = {
        type: 'trophy',
        message: '[E] トロフィー＆キング標本棚を眺める'
      };
      return this.currentPrompt;
    }

    // Just near treehouse
    this.currentPrompt = {
      type: null,
      message: '🌲 マイ・ツリーハウス秘密基地'
    };
    return this.currentPrompt;
  }

  /**
   * Sleep in bed and advance time to target hour
   */
  public sleep(targetHour: 8 | 13 | 17 | 21): { success: boolean; message: string } {
    const timeLabels = {
      8: '心地よい小鳥のさえずりで爽やかな【朝】を迎えました！(08:00)',
      13: '太陽が高く昇る暖かい【昼】になりました！(13:00)',
      17: '空が茜色に染まる情緒ある【夕方】になりました！(17:00)',
      21: '満天の星が瞬く静寂の【夜】になりました！(21:00)'
    };

    // Set game time
    this.timeManager.setTime(targetHour, 0);

    // Full heal
    this.healthManager.heal(this.healthManager.maxHealth);

    if (this.audio) {
      this.audio.playFanfare();
    }

    return {
      success: true,
      message: timeLabels[targetHour]
    };
  }
}
