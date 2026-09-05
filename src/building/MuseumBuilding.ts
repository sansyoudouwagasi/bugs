import * as THREE from 'three';
import { MuseumManager } from './MuseumManager';
import { InsectDatabase } from '../insects/InsectData';
import { AnimatedInsectModel, InsectModelFactory } from '../insects/InsectModel';

interface MuseumExhibitedInsect {
  id: string;
  model: AnimatedInsectModel;
  pivot: THREE.Group;
  type: 'flying' | 'tree' | 'ground' | 'pond';
  speed: number;
  angle: number;
  radius: number;
  baseY: number;
}

export class MuseumBuilding {
  public group: THREE.Group;
  public entrancePosition: THREE.Vector3;
  private museumManager: MuseumManager;
  private exhibitedInsects: MuseumExhibitedInsect[] = [];
  private treeGroup!: THREE.Group;

  constructor(scene: THREE.Scene, museumManager: MuseumManager, position: THREE.Vector3) {
    this.museumManager = museumManager;
    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.entrancePosition = new THREE.Vector3(position.x, position.y, position.z - 6.5);

    this.buildArchitecture();
    scene.add(this.group);

    // Watch for donation changes to update exhibited 3D models
    this.museumManager.onDonationChange = () => {
      this.refreshExhibits();
    };

    // Initial exhibit creation
    this.refreshExhibits();
  }

  private buildArchitecture(): void {
    // 1. Circular Stone Terrace Floor
    const floorMat = new THREE.MeshLambertMaterial({ color: 0xdfe6e9, flatShading: true });
    const floorGeo = new THREE.CylinderGeometry(7.2, 7.8, 0.4, 24);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = 0.2;
    floor.receiveShadow = true;
    this.group.add(floor);

    // 2. Translucent Glass Dome
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x74b9ff,
      transparent: true,
      opacity: 0.42,
      roughness: 0.1,
      metalness: 0.2,
      side: THREE.DoubleSide
    });
    const domeGeo = new THREE.SphereGeometry(6.8, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const dome = new THREE.Mesh(domeGeo, glassMat);
    dome.position.y = 0.4;
    this.group.add(dome);

    // 3. Iron Dome Ribs (Framework arches)
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x2d3436 });
    for (let i = 0; i < 4; i++) {
      const ringGeo = new THREE.TorusGeometry(6.82, 0.08, 6, 24, Math.PI);
      ringGeo.rotateX(Math.PI / 2);
      ringGeo.rotateY((i * Math.PI) / 4);
      const ring = new THREE.Mesh(ringGeo, frameMat);
      ring.position.y = 0.4;
      this.group.add(ring);
    }

    // 4. Entrance Portal Arch & Signboard
    const archMat = new THREE.MeshLambertMaterial({ color: 0xd35400 });
    const archPillarGeo = new THREE.BoxGeometry(0.5, 3.2, 0.5);
    const leftPillar = new THREE.Mesh(archPillarGeo, archMat);
    leftPillar.position.set(-1.8, 1.6, -6.6);

    const rightPillar = new THREE.Mesh(archPillarGeo, archMat);
    rightPillar.position.set(1.8, 1.6, -6.6);

    const archLintelGeo = new THREE.BoxGeometry(4.2, 0.6, 0.6);
    const lintel = new THREE.Mesh(archLintelGeo, archMat);
    lintel.position.set(0, 3.3, -6.6);

    // Signboard banner
    const signMat = new THREE.MeshLambertMaterial({ color: 0xf1c40f });
    const signGeo = new THREE.BoxGeometry(3.6, 0.7, 0.15);
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 3.3, -6.95);

    this.group.add(leftPillar, rightPillar, lintel, sign);

    // 5. Interior Center Symbol Tree (Large Terrarium Tree)
    this.treeGroup = new THREE.Group();
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5a381e });
    const trunkGeo = new THREE.CylinderGeometry(0.7, 1.1, 4.2, 8);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 2.1;
    this.treeGroup.add(trunk);

    const foliageMat = new THREE.MeshLambertMaterial({ color: 0x27ae60, flatShading: true });
    const foliageGeo = new THREE.DodecahedronGeometry(2.6, 1);
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.y = 4.6;
    this.treeGroup.add(foliage);

    this.group.add(this.treeGroup);

    // 6. Flower beds (East & West)
    const flowerBedMat = new THREE.MeshLambertMaterial({ color: 0x2ecc71 });
    const flowerBedGeo = new THREE.CylinderGeometry(2.2, 2.4, 0.25, 12);

    const eastBed = new THREE.Mesh(flowerBedGeo, flowerBedMat);
    eastBed.position.set(3.6, 0.3, 1.2);
    this.group.add(eastBed);

    const westBed = new THREE.Mesh(flowerBedGeo, flowerBedMat);
    westBed.position.set(-3.6, 0.3, 1.2);
    this.group.add(westBed);

    // Add cute flower petals
    const petalColors = [0xff4757, 0xffa502, 0x1e90ff, 0x9b59b6];
    for (let i = 0; i < 16; i++) {
      const pColor = petalColors[i % petalColors.length];
      const pMat = new THREE.MeshLambertMaterial({ color: pColor });
      const pGeo = new THREE.SphereGeometry(0.18, 5, 5);
      const flower = new THREE.Mesh(pGeo, pMat);
      const isEast = i % 2 === 0;
      const angle = (i / 8) * Math.PI * 2;
      const r = 0.5 + Math.random() * 1.3;
      const cx = isEast ? 3.6 : -3.6;
      flower.position.set(cx + Math.cos(angle) * r, 0.55, 1.2 + Math.sin(angle) * r);
      this.group.add(flower);
    }

    // 7. Small Stream / Pond Terrarium (South)
    const pondMat = new THREE.MeshLambertMaterial({ color: 0x00cec9, transparent: true, opacity: 0.85 });
    const pondGeo = new THREE.CylinderGeometry(2.4, 2.6, 0.15, 12);
    const pond = new THREE.Mesh(pondGeo, pondMat);
    pond.position.set(0, 0.28, 3.4);
    this.group.add(pond);
  }

  /**
   * Re-create all 3D insect models currently exhibited in the museum
   */
  public refreshExhibits(): void {
    // Clear previous
    for (const exhibit of this.exhibitedInsects) {
      this.group.remove(exhibit.pivot);
    }
    this.exhibitedInsects = [];

    const donations = this.museumManager.getDonations();

    for (const item of donations) {
      const data = InsectDatabase.getById(item.id);
      if (!data) continue;

      const model = InsectModelFactory.createModel(data);
      const pivot = new THREE.Group();

      let type: 'flying' | 'tree' | 'ground' | 'pond' = 'ground';
      let radius = 2.5;
      let baseY = 1.0;
      let speed = 0.8;

      if (['cabbage_butterfly', 'paper_kite', 'luna_moth'].includes(item.id)) {
        type = 'flying';
        radius = 2.8 + Math.random() * 2.2;
        baseY = 2.2 + Math.random() * 1.5;
        speed = 1.2;
      } else if (['beetle', 'stag_beetle', 'hercules_beetle', 'rainbow_stag', 'cicada_minmin', 'cicada_higurashi'].includes(item.id)) {
        type = 'tree';
        radius = 1.1; // on tree trunk
        baseY = 1.2 + Math.random() * 2.0;
        speed = 0.25;
      } else if (['firefly', 'red_dragonfly'].includes(item.id)) {
        type = 'pond';
        radius = 1.6 + Math.random() * 1.2;
        baseY = 1.4 + Math.random() * 1.0;
        speed = 1.5;
      } else {
        type = 'ground';
        radius = 2.5 + Math.random() * 2.5;
        baseY = 0.45;
        speed = 0.6;
      }

      pivot.add(model.group);
      this.group.add(pivot);

      this.exhibitedInsects.push({
        id: item.id,
        model,
        pivot,
        type,
        speed,
        angle: Math.random() * Math.PI * 2,
        radius,
        baseY
      });
    }
  }

  /**
   * Update internal dynamic exhibits
   */
  public update(delta: number): void {
    for (const exhibit of this.exhibitedInsects) {
      exhibit.angle += delta * exhibit.speed * 0.5;

      if (exhibit.type === 'flying') {
        const x = Math.cos(exhibit.angle) * exhibit.radius;
        const z = Math.sin(exhibit.angle) * exhibit.radius;
        const y = exhibit.baseY + Math.sin(exhibit.angle * 3) * 0.4;
        exhibit.pivot.position.set(x, y, z);
        exhibit.pivot.rotation.y = -exhibit.angle - Math.PI / 2;
        exhibit.model.update(delta, 'idle', true);
      } else if (exhibit.type === 'tree') {
        // Slowly crawl up and down the tree trunk
        const x = Math.cos(exhibit.angle * 0.2) * exhibit.radius;
        const z = Math.sin(exhibit.angle * 0.2) * exhibit.radius;
        const y = exhibit.baseY + Math.sin(exhibit.angle * 0.8) * 0.8;
        exhibit.pivot.position.set(x, y, z);
        exhibit.pivot.rotation.y = -exhibit.angle * 0.2 + Math.PI;
        exhibit.model.update(delta, 'idle', false);
      } else if (exhibit.type === 'pond') {
        // Circle over pond
        const x = Math.cos(exhibit.angle) * exhibit.radius;
        const z = 3.4 + Math.sin(exhibit.angle) * exhibit.radius;
        const y = exhibit.baseY + Math.sin(exhibit.angle * 4) * 0.3;
        exhibit.pivot.position.set(x, y, z);
        exhibit.pivot.rotation.y = -exhibit.angle - Math.PI / 2;
        exhibit.model.update(delta, 'idle', true);
      } else {
        // Ground roam
        const x = Math.cos(exhibit.angle) * exhibit.radius;
        const z = Math.sin(exhibit.angle) * exhibit.radius;
        exhibit.pivot.position.set(x, exhibit.baseY, z);
        exhibit.pivot.rotation.y = -exhibit.angle;
        exhibit.model.update(delta, 'idle', true);
      }
    }
  }

  /**
   * Distance between player and entrance
   */
  public getDistanceToEntrance(playerPos: THREE.Vector3): number {
    return this.entrancePosition.distanceTo(playerPos);
  }
}
