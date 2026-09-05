import * as THREE from 'three';
import { InsectDatabase, InsectData } from './InsectData';
import { InsectController } from './InsectController';
import { World } from '../world/World';
import { TimePeriod } from '../time/TimeManager';
import { WeatherType } from '../weather/WeatherManager';

export class InsectSpawner {
  private scene: THREE.Scene;
  private world: World;
  public activeInsects: InsectController[] = [];
  private maxActiveInsects: number = 22;

  constructor(scene: THREE.Scene, world: World) {
    this.scene = scene;
    this.world = world;
  }

  public initialSpawn(timePeriod: TimePeriod = 'day', weather: WeatherType = 'sunny'): void {
    this.refreshInsectsForCondition(timePeriod, weather);
  }

  /**
   * Filter available insects based on current time & weather, and maintain island population
   */
  public refreshInsectsForCondition(timePeriod: TimePeriod, weather: WeatherType): void {
    const available = InsectDatabase.getAll().filter(insect => {
      const timeMatch = insect.activeTime.includes(timePeriod);
      const weatherMatch = insect.weather.includes(weather);
      return timeMatch && weatherMatch;
    });

    if (available.length === 0) return;

    // Remove insects that no longer match the current environment (gradually remove mismatched)
    for (let i = this.activeInsects.length - 1; i >= 0; i--) {
      const insect = this.activeInsects[i];
      const valid = insect.data.activeTime.includes(timePeriod) && insect.data.weather.includes(weather);
      if (!valid) {
        this.removeInsect(insect);
      }
    }

    // Spawn up to target count
    const needed = this.maxActiveInsects - this.activeInsects.length;
    for (let i = 0; i < needed; i++) {
      const chosen = available[Math.floor(Math.random() * available.length)];
      this.spawnOne(chosen);
    }
  }

  private spawnOne(data: InsectData): void {
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 46;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const y = this.world.getTerrainHeight(x, z);

    // Filter out deep ocean or pond water for non-flying land insects
    if (y < 0.6) return;
    if (data.modelType !== 'firefly' && data.modelType !== 'dragonfly' && Math.hypot(x - (-5), z - 15) < 11) return;

    let spawnX = x;
    let spawnZ = z;
    let spawnY = y;

    // If insect lives primarily in cave, spawn on the Mystic Cave Isle
    if (data.habitats.includes('cave') && Math.random() < 0.75) {
      const cAngle = Math.random() * Math.PI * 2;
      const cDist = 2 + Math.random() * 14;
      spawnX = -120 + Math.cos(cAngle) * cDist;
      spawnZ = -110 + Math.sin(cAngle) * cDist;
      spawnY = this.world.getTerrainHeight(spawnX, spawnZ);
    }

    const initialPos = new THREE.Vector3(spawnX, spawnY, spawnZ);
    const insect = new InsectController(data, initialPos, this.world);

    this.activeInsects.push(insect);
    this.scene.add(insect.group);
  }

  public respawnInsect(data: InsectData, playerPos: THREE.Vector3, timePeriod?: TimePeriod, weather?: WeatherType): void {
    let chosenData = data;

    // If time or weather provided, select an appropriate insect for the current conditions
    if (timePeriod && weather) {
      const candidates = InsectDatabase.getAll().filter(i => 
        i.activeTime.includes(timePeriod) && i.weather.includes(weather)
      );
      if (candidates.length > 0) {
        chosenData = candidates[Math.floor(Math.random() * candidates.length)];
      }
    }

    const angle = Math.random() * Math.PI * 2;
    const dist = 16 + Math.random() * 18;
    const x = playerPos.x + Math.cos(angle) * dist;
    const z = playerPos.z + Math.sin(angle) * dist;

    const y = this.world.getTerrainHeight(x, z);
    if (y < 0.6) return;

    const insect = new InsectController(chosenData, new THREE.Vector3(x, y, z), this.world);
    this.activeInsects.push(insect);
    this.scene.add(insect.group);
  }

  public spawnAt(data: InsectData, pos: THREE.Vector3, state: 'idle' | 'flee' = 'flee'): InsectController {
    const insect = new InsectController(data, pos, this.world);
    insect.state = state;
    this.activeInsects.push(insect);
    this.scene.add(insect.group);
    return insect;
  }

  public removeInsect(insect: InsectController): void {
    const idx = this.activeInsects.indexOf(insect);
    if (idx !== -1) {
      this.activeInsects.splice(idx, 1);
      this.scene.remove(insect.group);
    }
  }
}
