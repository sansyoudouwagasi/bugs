import * as THREE from 'three';
import { Player } from '../player/Player';
import { HealthManager } from '../player/HealthManager';
import { AudioManager } from '../audio/AudioManager';
import { CaughtInsectRecord, InsectDatabase } from './InsectData';
import { CatchEffectUI } from '../ui/CatchEffectUI';
import { CollectionManager } from '../collection/CollectionManager';
import { InventoryManager } from '../inventory/InventoryManager';

export class WaspSwarm {
  public group: THREE.Group;
  private scene: THREE.Scene;
  private player: Player;
  private healthManager: HealthManager;
  private audio?: AudioManager;
  private collection: CollectionManager;
  private inventory: InventoryManager;
  private ui: CatchEffectUI;

  // State
  public isActive: boolean = false;
  private state: 'falling_nest' | 'chasing' | 'leaving' = 'falling_nest';
  private timer: number = 0;
  private chaseSpeed: number = 6.4;

  // Meshes
  private nestMesh: THREE.Mesh;
  private waspsGroup: THREE.Group;
  private waspInstances: THREE.Mesh[] = [];

  constructor(
    scene: THREE.Scene,
    player: Player,
    healthManager: HealthManager,
    collection: CollectionManager,
    inventory: InventoryManager,
    ui: CatchEffectUI,
    audio?: AudioManager
  ) {
    this.scene = scene;
    this.player = player;
    this.healthManager = healthManager;
    this.collection = collection;
    this.inventory = inventory;
    this.ui = ui;
    this.audio = audio;

    this.group = new THREE.Group();
    this.group.visible = false;

    // 1. Wasp Nest Mesh (Tiered brown cone)
    const nestGeo = new THREE.ConeGeometry(0.35, 0.6, 7);
    nestGeo.rotateX(Math.PI);
    const nestMat = new THREE.MeshLambertMaterial({ color: 0x8b6538, flatShading: true });
    this.nestMesh = new THREE.Mesh(nestGeo, nestMat);
    this.group.add(this.nestMesh);

    // 2. Wasps Group (Swarm of tiny aggressive wasps)
    this.waspsGroup = new THREE.Group();
    this.waspsGroup.visible = false;

    const waspGeo = new THREE.ConeGeometry(0.12, 0.3, 5);
    waspGeo.rotateX(Math.PI / 2);
    const waspMat = new THREE.MeshLambertMaterial({ color: 0xe6a100, flatShading: true });

    for (let i = 0; i < 5; i++) {
      const wasp = new THREE.Mesh(waspGeo, waspMat);
      wasp.position.set(
        (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.8
      );
      this.waspsGroup.add(wasp);
      this.waspInstances.push(wasp);
    }
    this.group.add(this.waspsGroup);

    this.scene.add(this.group);
  }

  public setAudio(audio: AudioManager): void {
    this.audio = audio;
  }

  /**
   * Trigger wasp nest drop from tree coordinates
   */
  public triggerSwarm(treePos: THREE.Vector3): void {
    if (this.isActive) return;

    this.isActive = true;
    this.state = 'falling_nest';
    this.timer = 0;

    // Position at foliage height
    this.group.position.set(treePos.x + 0.3, treePos.y + 2.8, treePos.z + 0.3);
    this.nestMesh.visible = true;
    this.waspsGroup.visible = false;
    this.group.visible = true;

    if (this.audio) {
      this.audio.playTreeShake();
    }
  }

  public update(delta: number): void {
    if (!this.isActive) return;

    this.timer += delta;
    const playerPos = this.player.position;

    if (this.state === 'falling_nest') {
      // Nest falls quickly to ground
      this.group.position.y -= 7.0 * delta;
      const groundY = playerPos.y; // approximate tree ground height
      if (this.group.position.y <= groundY + 0.3 || this.timer > 0.6) {
        // Nest hits ground -> Wasps burst out!
        this.state = 'chasing';
        this.timer = 0;
        this.nestMesh.visible = false;
        this.waspsGroup.visible = true;

        if (this.audio) {
          this.audio.playWaspWarning();
        }
      }
    } else if (this.state === 'chasing') {
      // Animate buzzing wasps
      this.waspInstances.forEach((wasp, idx) => {
        wasp.position.x += Math.sin(this.timer * 18 + idx) * 0.04;
        wasp.position.y += Math.cos(this.timer * 22 + idx) * 0.04;
        wasp.rotation.z = Math.sin(this.timer * 30 + idx) * 0.5;
      });

      // Move swarm towards player
      const dir = playerPos.clone().add(new THREE.Vector3(0, 0.9, 0)).sub(this.group.position);
      const dist = dir.length();

      if (dist > 0.2) {
        dir.normalize();
        this.group.position.addScaledVector(dir, this.chaseSpeed * delta);
        this.group.lookAt(playerPos.x, playerPos.y + 0.9, playerPos.z);
      }

      // Continuous warning buzz every 1.5s
      if (Math.floor(this.timer / 1.4) !== Math.floor((this.timer - delta) / 1.4)) {
        this.audio?.playWaspWarning();
      }

      // Check sting collision with player
      if (dist < 1.1) {
        this.stingPlayer();
      }

      // Escape timeout (survived for 12 seconds)
      if (this.timer > 12.0) {
        this.state = 'leaving';
        this.timer = 0;
      }
    } else if (this.state === 'leaving') {
      // Fly up into the sky and disappear
      this.group.position.y += 8.0 * delta;
      if (this.timer > 2.0) {
        this.deactivate();
      }
    }
  }

  private stingPlayer(): void {
    this.healthManager.takeDamage(50, () => {
      // On revive
      this.deactivate();
    });
    this.state = 'leaving';
    this.timer = 0;
  }

  /**
   * Catch check when player swings net
   */
  public tryCatch(playerPos: THREE.Vector3, reachDist: number = 3.2): boolean {
    if (!this.isActive || this.state !== 'chasing') return false;

    const dist = this.group.position.distanceTo(playerPos);
    if (dist <= reachDist) {
      // Caught the legendary giant hornet!
      this.onCaught();
      return true;
    }
    return false;
  }

  private onCaught(): void {
    this.deactivate();

    // Reward: Giant Asian Hornet (オオスズメバチ)
    const insectDef = InsectDatabase.getById('wasp_giant') || {
      id: 'wasp_giant',
      name: 'オオスズメバチ',
      description: '猛烈なスピードで襲いかかる最強の蜂！網で一発捕獲した強者の証。',
      modelType: 'wasp',
      icon: '🐝',
      rarity: 5,
      minSize: 38,
      maxSize: 48,
      basePrice: 650,
      moveSpeed: 5.0,
      alertDistance: 5.0,
      flightHeight: 1.5,
      habitats: ['forest'],
      activeTime: ['day'],
      weather: ['sunny'],
      primaryColor: '#f39c12',
      secondaryColor: '#1e272e'
    };

    const roll = InsectDatabase.rollSize(insectDef);

    const record: CaughtInsectRecord = {
      id: insectDef.id,
      name: insectDef.name,
      icon: insectDef.icon,
      rarity: insectDef.rarity,
      size: roll.size,
      isBig: roll.isBig,
      isGiant: roll.isGiant,
      caughtAt: new Date()
    };

    this.collection.registerCatch(record);
    this.inventory.addItem(record);
    this.player.setAnimState('inspect');

    this.ui.showCatchSuccess(record, () => {
      this.player.setAnimState('idle');
    });
  }

  public deactivate(): void {
    this.isActive = false;
    this.group.visible = false;
    this.nestMesh.visible = false;
    this.waspsGroup.visible = false;
  }
}
