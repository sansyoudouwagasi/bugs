import * as THREE from 'three';
import { Island } from './Island';

export interface TreeInstance {
  group: THREE.Group;
  basePos: THREE.Vector3;
  baseScale: number;
  shakeTimer: number;
  hasHoney: boolean;
}

export class Nature {
  public group: THREE.Group;
  private island: Island;
  public shopStallPos: THREE.Vector3 = new THREE.Vector3(5, 0, 6);
  public trees: TreeInstance[] = [];

  // Falling leaves particle system
  private leavesGroup: THREE.Group;
  private fallingLeaves: { mesh: THREE.Mesh; vel: THREE.Vector3; rotSpeed: number; life: number }[] = [];

  constructor(island: Island) {
    this.group = new THREE.Group();
    this.island = island;

    this.leavesGroup = new THREE.Group();
    this.group.add(this.leavesGroup);

    this.spawnTrees();
    this.spawnBushesAndFlowers();
    this.spawnRocks();
    this.spawnShopStall();
  }

  // 1. Trees (Deciduous, Pine, Palm)
  private spawnTrees(): void {
    const treeCount = 90;
    
    // Low-poly Oak Trunk & Foliage materials
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b, flatShading: true });
    const foliageMatOak1 = new THREE.MeshLambertMaterial({ color: 0x5fa336, flatShading: true });
    const foliageMatOak2 = new THREE.MeshLambertMaterial({ color: 0x77b73b, flatShading: true });
    const foliageMatPine = new THREE.MeshLambertMaterial({ color: 0x2e6b36, flatShading: true });
    const palmLeafMat = new THREE.MeshLambertMaterial({ color: 0x48a135, flatShading: true });

    // Base Geometries
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.45, 2.5, 6);
    trunkGeo.translate(0, 1.25, 0);

    const oakFoliageGeo = new THREE.DodecahedronGeometry(1.6, 1);
    oakFoliageGeo.translate(0, 3.0, 0);

    const pineFoliageGeo1 = new THREE.ConeGeometry(1.6, 2.5, 6);
    pineFoliageGeo1.translate(0, 2.8, 0);
    const pineFoliageGeo2 = new THREE.ConeGeometry(1.2, 2.0, 6);
    pineFoliageGeo2.translate(0, 4.0, 0);

    for (let i = 0; i < treeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.sqrt(Math.random()) * 65;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const y = this.island.getHeightAt(x, z);

      if (y < 0.6 || y > 15.0) continue;
      if (Math.hypot(x - (-5), z - 15) < 13) continue;
      if (Math.hypot(x, z) < 8) continue; // Clear around center plaza

      const tree = new THREE.Group();
      tree.position.set(x, y, z);

      if (y < 2.0 && radius > 55) {
        // Palm tree on beach
        const palmTrunkGeo = new THREE.CylinderGeometry(0.2, 0.35, 3.5, 5);
        palmTrunkGeo.translate(0, 1.75, 0);
        const pTrunk = new THREE.Mesh(palmTrunkGeo, trunkMat);
        pTrunk.rotation.z = (Math.random() - 0.5) * 0.3;
        tree.add(pTrunk);

        const leafCount = 5;
        for (let l = 0; l < leafCount; l++) {
          const leafGeo = new THREE.BoxGeometry(0.5, 0.05, 2.0);
          leafGeo.translate(0, 0, 1.0);
          const leaf = new THREE.Mesh(leafGeo, palmLeafMat);
          leaf.position.y = 3.5;
          leaf.rotation.y = (l / leafCount) * Math.PI * 2;
          leaf.rotation.x = 0.4;
          tree.add(leaf);
        }
      } else if (x > 15 && y > 4.0) {
        // Pine tree on mountain
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        tree.add(trunk);
        const f1 = new THREE.Mesh(pineFoliageGeo1, foliageMatPine);
        const f2 = new THREE.Mesh(pineFoliageGeo2, foliageMatPine);
        tree.add(f1, f2);
      } else {
        // Oak tree in forest & grassland
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        tree.add(trunk);
        const mat = Math.random() > 0.5 ? foliageMatOak1 : foliageMatOak2;
        const foliage = new THREE.Mesh(oakFoliageGeo, mat);
        tree.add(foliage);
      }

      const s = 0.85 + Math.random() * 0.45;
      tree.scale.set(s, s, s);
      tree.rotation.y = Math.random() * Math.PI * 2;
      tree.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.group.add(tree);
      this.trees.push({
        group: tree,
        basePos: new THREE.Vector3(x, y, z),
        baseScale: s,
        shakeTimer: 0,
        hasHoney: false
      });
    }
  }

  // 2. Bushes and Flowers
  private spawnBushesAndFlowers(): void {
    const bushCount = 60;
    const flowerCount = 80;

    const bushMat = new THREE.MeshLambertMaterial({ color: 0x48b04b, flatShading: true });
    const bushGeo = new THREE.DodecahedronGeometry(0.75, 1);

    for (let i = 0; i < bushCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 65;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.island.getHeightAt(x, z);

      if (y < 0.6) continue;
      if (Math.hypot(x - (-5), z - 15) < 11) continue;
      if (Math.hypot(x - 5, z - 6) < 3) continue;

      const bush = new THREE.Mesh(bushGeo, bushMat);
      bush.position.set(x, y + 0.35, z);
      const s = 0.6 + Math.random() * 0.6;
      bush.scale.set(s * 1.2, s * 0.7, s * 1.1);
      bush.rotation.y = Math.random() * Math.PI;
      bush.castShadow = true;
      bush.receiveShadow = true;
      this.group.add(bush);
    }

    const flowerColors = [0xff4757, 0xffa502, 0x2ed573, 0x1e90ff, 0xff6b81, 0xffffff];
    const flowerMats = flowerColors.map(c => new THREE.MeshLambertMaterial({ color: c, flatShading: true }));
    const flowerStemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.4, 4);
    const flowerPetalGeo = new THREE.DodecahedronGeometry(0.18, 0);

    for (let i = 0; i < flowerCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 60;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.island.getHeightAt(x, z);

      if (y < 0.6) continue;
      if (Math.hypot(x - (-5), z - 15) < 10) continue;

      const flower = new THREE.Group();
      flower.position.set(x, y, z);

      const fMat = flowerMats[Math.floor(Math.random() * flowerMats.length)];
      const stem = new THREE.Mesh(flowerStemGeo, bushMat);
      stem.position.y = 0.2;
      flower.add(stem);

      const petals = new THREE.Mesh(flowerPetalGeo, fMat);
      petals.position.y = 0.4;
      petals.rotation.y = Math.random() * Math.PI;
      flower.add(petals);

      const s = 0.8 + Math.random() * 0.4;
      flower.scale.set(s, s, s);
      this.group.add(flower);
    }
  }

  // 3. Rocks
  private spawnRocks(): void {
    const rockMat = new THREE.MeshLambertMaterial({ color: 0x7f8c8d, flatShading: true });
    const rockGeo = new THREE.DodecahedronGeometry(0.8, 0);

    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 70;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.island.getHeightAt(x, z);

      if (y < 0.2) continue;

      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(x, y + 0.3, z);
      const s = 0.5 + Math.random() * 1.0;
      rock.scale.set(s * (0.8 + Math.random() * 0.4), s * 0.6, s * (0.8 + Math.random() * 0.4));
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rock.castShadow = true;
      rock.receiveShadow = true;
      this.group.add(rock);
    }
  }

  // 4. Shop Stall (Cute wooden shop booth near town center)
  private spawnShopStall(): void {
    const sx = 5.0;
    const sz = 6.0;
    const sy = this.island.getHeightAt(sx, sz);
    this.shopStallPos.set(sx, sy, sz);

    const stall = new THREE.Group();
    stall.position.set(sx, sy, sz);

    const woodMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b, flatShading: true });
    const darkWoodMat = new THREE.MeshLambertMaterial({ color: 0x5a3617, flatShading: true });
    const roofMatGreen = new THREE.MeshLambertMaterial({ color: 0x27ae60, flatShading: true });
    const roofMatWhite = new THREE.MeshLambertMaterial({ color: 0xf5f6fa, flatShading: true });
    const signMat = new THREE.MeshLambertMaterial({ color: 0xf39c12, flatShading: true });

    // Wooden Counter Table
    const tableGeo = new THREE.BoxGeometry(2.4, 0.9, 1.2);
    const table = new THREE.Mesh(tableGeo, woodMat);
    table.position.set(0, 0.45, 0);
    table.castShadow = true;
    table.receiveShadow = true;
    stall.add(table);

    // 4 Support Poles
    const poleGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.2, 5);
    const poleOffsets = [
      [-1.1, 1.1, -0.5],
      [1.1, 1.1, -0.5],
      [-1.1, 1.1, 0.5],
      [1.1, 1.1, 0.5],
    ];
    for (const [px, py, pz] of poleOffsets) {
      const pole = new THREE.Mesh(poleGeo, darkWoodMat);
      pole.position.set(px, py, pz);
      pole.castShadow = true;
      stall.add(pole);
    }

    // Striped Awning Roof
    const stripeCount = 6;
    const stripeW = 2.6 / stripeCount;
    for (let i = 0; i < stripeCount; i++) {
      const mat = i % 2 === 0 ? roofMatGreen : roofMatWhite;
      const stripeGeo = new THREE.BoxGeometry(stripeW, 0.1, 1.5);
      const stripe = new THREE.Mesh(stripeGeo, mat);
      stripe.position.set(-1.3 + stripeW * (i + 0.5), 2.2, 0);
      stripe.rotation.x = -0.15;
      stripe.castShadow = true;
      stall.add(stripe);
    }

    // Hanging Shop Sign
    const signGeo = new THREE.BoxGeometry(1.2, 0.45, 0.08);
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 2.45, 0.4);
    sign.castShadow = true;
    stall.add(sign);

    // Cute decorative bug basket on counter
    const basketGeo = new THREE.BoxGeometry(0.5, 0.35, 0.4);
    const basketMat = new THREE.MeshLambertMaterial({ color: 0x2ecc71, transparent: true, opacity: 0.85 });
    const basket = new THREE.Mesh(basketGeo, basketMat);
    basket.position.set(-0.6, 1.05, 0);
    stall.add(basket);

    stall.rotation.y = -Math.PI / 4;
    this.group.add(stall);
  }

  /**
   * Find nearest tree within given distance of player position
   */
  public getNearestTree(playerPos: THREE.Vector3, maxDist: number = 3.2): { tree: TreeInstance; index: number; dist: number } | null {
    let nearest: { tree: TreeInstance; index: number; dist: number } | null = null;
    let minDist = maxDist;

    this.trees.forEach((tree, idx) => {
      const d = playerPos.distanceTo(tree.basePos);
      if (d < minDist) {
        minDist = d;
        nearest = { tree, index: idx, dist: d };
      }
    });

    return nearest;
  }

  /**
   * Shake tree with visual physics bounce & falling leaves
   */
  public shakeTree(treeIndex: number): void {
    const tree = this.trees[treeIndex];
    if (!tree) return;

    tree.shakeTimer = 0.55;

    // Emit 6-10 green falling leaf particles
    const leafMat = new THREE.MeshBasicMaterial({ color: 0x77b73b, side: THREE.DoubleSide });
    const leafGeo = new THREE.PlaneGeometry(0.18, 0.28);

    const count = 7 + Math.floor(Math.random() * 5);
    for (let i = 0; i < count; i++) {
      const leafMesh = new THREE.Mesh(leafGeo, leafMat);
      leafMesh.position.set(
        tree.basePos.x + (Math.random() - 0.5) * 2.2,
        tree.basePos.y + 2.8 + Math.random() * 1.5,
        tree.basePos.z + (Math.random() - 0.5) * 2.2
      );
      leafMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      this.leavesGroup.add(leafMesh);
      this.fallingLeaves.push({
        mesh: leafMesh,
        vel: new THREE.Vector3((Math.random() - 0.5) * 1.2, -1.8 - Math.random() * 1.2, (Math.random() - 0.5) * 1.2),
        rotSpeed: (Math.random() - 0.5) * 8,
        life: 2.2
      });
    }
  }

  public applyHoney(treeIndex: number): boolean {
    const tree = this.trees[treeIndex];
    if (!tree || tree.hasHoney) return false;
    tree.hasHoney = true;

    // Add cute sparkling golden drop marker on trunk
    const honeyGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const honeyMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    const honeyMesh = new THREE.Mesh(honeyGeo, honeyMat);
    honeyMesh.position.set(0, 1.4, 0.35);
    tree.group.add(honeyMesh);
    return true;
  }

  public update(delta: number): void {
    // 1. Animate shaking trees
    for (const tree of this.trees) {
      if (tree.shakeTimer > 0) {
        tree.shakeTimer -= delta;
        const progress = Math.max(0, tree.shakeTimer / 0.55);
        const wiggle = Math.sin((0.55 - tree.shakeTimer) * 35) * progress * 0.12;
        tree.group.rotation.z = wiggle;
        tree.group.rotation.x = wiggle * 0.5;
      } else {
        tree.group.rotation.z = 0;
        tree.group.rotation.x = 0;
      }
    }

    // 2. Animate falling leaves
    for (let i = this.fallingLeaves.length - 1; i >= 0; i--) {
      const leaf = this.fallingLeaves[i];
      leaf.life -= delta;
      leaf.mesh.position.addScaledVector(leaf.vel, delta);
      leaf.mesh.rotation.x += leaf.rotSpeed * delta;
      leaf.mesh.rotation.y += leaf.rotSpeed * 0.7 * delta;

      if (leaf.life <= 0 || leaf.mesh.position.y < 0.1) {
        this.leavesGroup.remove(leaf.mesh);
        this.fallingLeaves.splice(i, 1);
      }
    }
  }
}
