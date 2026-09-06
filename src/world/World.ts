import * as THREE from 'three';
import { Island } from './Island';
import { Nature, RockObstacle } from './Nature';

export type HabitatType = 'grassland' | 'forest' | 'mountain' | 'pond' | 'coast' | 'cave';

export class World {
  public scene: THREE.Scene;
  public island: Island;
  public nature: Nature;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.island = new Island();
    this.nature = new Nature(this.island);

    this.scene.add(this.island.group);
    this.scene.add(this.nature.group);
  }

  public getRocks(): RockObstacle[] {
    return this.nature.rocks;
  }

  /**
   * Get exact surface height at world coordinates (x, z)
   */
  public getTerrainHeight(x: number, z: number): number {
    // Check Mystic Cave Isle
    const caveDist = Math.hypot(x - (-120), z - (-110));
    if (caveDist < 22) {
      return 1.0;
    }
    return this.island.getHeightAt(x, z);
  }

  /**
   * Determine biome/habitat for insect spawning (data-driven support)
   */
  public getHabitatAt(x: number, z: number): HabitatType {
    // Check Mystic Cave Isle
    const caveDist = Math.hypot(x - (-120), z - (-110));
    if (caveDist < 22) {
      return 'cave';
    }

    const y = this.island.getHeightAt(x, z);
    const dist = Math.hypot(x, z);

    // Coast / Beach
    if (y < 1.2 || dist > 65) {
      return 'coast';
    }

    // Pond
    const pondDist = Math.hypot(x - (-5), z - 15);
    if (pondDist < 12) {
      return 'pond';
    }

    // Mountain (East high elevation)
    if (x > 25 && y > 7.0) {
      return 'mountain';
    }

    // Forest (North rolling woods)
    if (z < -10 && x < 25) {
      return 'forest';
    }

    // Default: Grassland
    return 'grassland';
  }

  /**
   * Keep coordinates bounded within playable island area
   */
  public clampToIsland(pos: THREE.Vector3): void {
    // Check if player is on the Mystic Cave Isle
    const caveDist = Math.hypot(pos.x - (-120), pos.z - (-110));
    if (caveDist < 25) {
      const maxR = 20;
      if (caveDist > maxR) {
        const dx = pos.x - (-120);
        const dz = pos.z - (-110);
        const scale = maxR / caveDist;
        pos.x = -120 + dx * scale;
        pos.z = -110 + dz * scale;
      }
      return;
    }

    // Otherwise clamp to mainland
    const maxR = this.island.islandRadius - 2;
    const currentR = Math.hypot(pos.x, pos.z);
    if (currentR > maxR) {
      const scale = maxR / currentR;
      pos.x *= scale;
      pos.z *= scale;
    }
  }
}
