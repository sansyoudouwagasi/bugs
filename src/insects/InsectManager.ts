import * as THREE from 'three';
import { InsectSpawner } from './InsectSpawner';
import { InsectController } from './InsectController';
import { CaughtInsectRecord, InsectDatabase } from './InsectData';
import { CatchEffectUI } from '../ui/CatchEffectUI';
import { CollectionManager } from '../collection/CollectionManager';
import { InventoryManager } from '../inventory/InventoryManager';
import { Player } from '../player/Player';
import { World } from '../world/World';
import { TimeManager } from '../time/TimeManager';
import { WeatherManager } from '../weather/WeatherManager';

export class InsectManager {
  public spawner: InsectSpawner;
  private ui: CatchEffectUI;
  private collection: CollectionManager;
  private inventory: InventoryManager;
  private player: Player;
  private isPaused: boolean = false;

  private timeManager?: TimeManager;
  private weatherManager?: WeatherManager;
  public equippedNet: 'standard' | 'silver' | 'gold' = 'standard';

  // Catch range tuning (Comfortable for touch & mobile)
  private readonly baseCatchDistance: number = 3.4;
  private readonly baseCatchAngleCos: number = Math.cos((65 * Math.PI) / 180);
  private readonly maxVerticalDiff: number = 2.8;

  constructor(
    scene: THREE.Scene,
    world: World,
    collection: CollectionManager,
    inventory: InventoryManager,
    player: Player,
    timeManager?: TimeManager,
    weatherManager?: WeatherManager
  ) {
    this.spawner = new InsectSpawner(scene, world);
    this.ui = new CatchEffectUI();
    this.collection = collection;
    this.inventory = inventory;
    this.player = player;
    this.timeManager = timeManager;
    this.weatherManager = weatherManager;

    // Initial insect placement for current condition
    const currentPeriod = this.timeManager?.getPeriod() || 'day';
    const currentWeather = this.weatherManager?.currentWeather || 'sunny';
    this.spawner.initialSpawn(currentPeriod, currentWeather);

    // Dynamic environment reactivity
    this.timeManager?.onPeriodChange((period) => {
      this.spawner.refreshInsectsForCondition(period, this.weatherManager?.currentWeather || 'sunny');
    });

    this.weatherManager?.onWeatherChange((weather) => {
      this.spawner.refreshInsectsForCondition(this.timeManager?.getPeriod() || 'day', weather);
    });
  }

  public update(delta: number, playerPos: THREE.Vector3, isSneaking: boolean = false, isRunning: boolean = false): void {
    if (this.isPaused) return;

    for (const insect of this.spawner.activeInsects) {
      const distSq = insect.position.distanceToSquared(playerPos);
      if (distSq < 3600) {
        insect.update(delta, playerPos, isSneaking, isRunning);
      }
    }
  }

  public tryCatch(playerPos: THREE.Vector3, playerFacingRight: boolean, cameraYaw: number): boolean {
    if (this.isPaused) return false;

    const camForward = new THREE.Vector3(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw));
    const camRight = new THREE.Vector3(Math.cos(cameraYaw), 0, -Math.sin(cameraYaw));

    // Player faces towards camera right or left with forward bias
    const swingDir = camForward.clone().multiplyScalar(0.7).addScaledVector(camRight, playerFacingRight ? 0.7 : -0.7).normalize();

    let closestInsect: InsectController | null = null;
    let minDistance = Infinity;

    // Dynamic range boost from equipped net
    let maxDist = this.baseCatchDistance;
    let maxAngleCos = this.baseCatchAngleCos;
    if (this.equippedNet === 'silver') {
      maxDist = 4.2;
      maxAngleCos = Math.cos((75 * Math.PI) / 180);
    } else if (this.equippedNet === 'gold') {
      maxDist = 5.0;
      maxAngleCos = Math.cos((85 * Math.PI) / 180);
    }

    for (const insect of this.spawner.activeInsects) {
      if (insect.isCaught) continue;

      const toInsect = insect.position.clone().sub(playerPos);
      const verticalDiff = Math.abs(toInsect.y);
      if (verticalDiff > this.maxVerticalDiff) continue;

      toInsect.y = 0;
      const horizontalDist = toInsect.length();

      if (horizontalDist <= maxDist) {
        toInsect.normalize();
        const dot = swingDir.dot(toInsect);

        if (dot >= maxAngleCos || horizontalDist < (maxDist * 0.55)) {
          if (horizontalDist < minDistance) {
            minDistance = horizontalDist;
            closestInsect = insect;
          }
        }
      }
    }

    if (closestInsect) {
      this.executeCatchSuccess(closestInsect, playerPos);
      return true;
    } else {
      // Startle nearby insects
      for (const insect of this.spawner.activeInsects) {
        if (insect.position.distanceTo(playerPos) < 4.2) {
          insect.state = 'flee';
        }
      }
      return false;
    }
  }

  public onCatch?: (record: CaughtInsectRecord) => void;
  public onCatchCallbacks: ((record: CaughtInsectRecord) => void)[] = [];

  public addCatchListener(cb: (record: CaughtInsectRecord) => void): void {
    this.onCatchCallbacks.push(cb);
  }

  private executeCatchSuccess(insect: InsectController, playerPos: THREE.Vector3): void {
    insect.isCaught = true;

    const sizeResult = InsectDatabase.rollSize(insect.data);
    const record: CaughtInsectRecord = {
      id: insect.data.id,
      name: insect.data.name,
      icon: insect.data.icon,
      rarity: insect.data.rarity,
      size: sizeResult.size,
      isBig: sizeResult.isBig,
      isGiant: sizeResult.isGiant,
      caughtAt: new Date()
    };

    // Remove caught insect mesh
    this.spawner.removeInsect(insect);

    // Register into Collection & Encyclopedia
    this.collection.registerCatch(record);

    // Add into player's Inventory (Basket)
    this.inventory.addItem(record);

    // Notify external listeners (e.g. QuestManager, TournamentManager)
    if (this.onCatch) {
      this.onCatch(record);
    }
    for (const cb of this.onCatchCallbacks) {
      cb(record);
    }

    // Switch player to "inspect" animation (smiling with bug cage)
    this.player.setAnimState('inspect');

    this.isPaused = true;

    this.ui.showCatchSuccess(record, () => {
      this.isPaused = false;
      this.player.setAnimState('idle');

      // Respawn an insect somewhere on island matching current atmosphere
      setTimeout(() => {
        this.spawner.respawnInsect(
          insect.data,
          playerPos,
          this.timeManager?.getPeriod(),
          this.weatherManager?.currentWeather
        );
      }, 2500);
    });
  }

  /**
   * Spawn an insect flying out of a shaken tree (with honey trap support for legendaries!)
   */
  public spawnTreeInsect(treePos: THREE.Vector3, hasHoney: boolean): InsectController | null {
    const period = this.timeManager?.getPeriod() || 'day';
    let targetId = 'cicada_minmin';

    if (hasHoney) {
      // Honey Trap: High chance of legendary/rare insects
      const roll = Math.random();
      if (period === 'night' || period === 'morning') {
        if (roll < 0.28) targetId = 'hercules_beetle';
        else if (roll < 0.52) targetId = 'stag_beetle';
        else if (roll < 0.76) targetId = 'beetle';
        else targetId = 'luna_moth';
      } else {
        if (roll < 0.32) targetId = 'rainbow_stag';
        else if (roll < 0.60) targetId = 'paper_kite';
        else if (period === 'evening') targetId = 'cicada_higurashi';
        else targetId = 'cicada_minmin';
      }
    } else {
      if (period === 'night' || period === 'morning') {
        targetId = Math.random() < 0.5 ? 'stag_beetle' : 'beetle';
      } else if (period === 'evening') {
        targetId = 'cicada_higurashi';
      } else {
        targetId = 'cicada_minmin';
      }
    }

    const data = InsectDatabase.getById(targetId) || InsectDatabase.getById('cicada_minmin');
    if (!data) return null;

    const spawnPos = new THREE.Vector3(
      treePos.x + (Math.random() - 0.5) * 0.8,
      treePos.y + 2.4,
      treePos.z + (Math.random() - 0.5) * 0.8
    );

    return this.spawner.spawnAt(data, spawnPos, 'flee');
  }

  public spawnSingleInsect(id: string, pos: THREE.Vector3): InsectController | null {
    const data = InsectDatabase.getById(id);
    if (!data) return null;
    return this.spawner.spawnAt(data, pos, 'idle');
  }
}
