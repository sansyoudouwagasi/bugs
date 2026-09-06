import * as THREE from 'three';
import { Nature, TreeInstance } from '../world/Nature';
import { ShopManager } from '../shop/ShopManager';
import { InsectManager } from '../insects/InsectManager';
import { InsectDatabase } from '../insects/InsectData';
import { AudioManager } from '../audio/AudioManager';

export interface HoneyAppliedTree {
  tree: TreeInstance;
  sapMesh: THREE.Mesh;
  appliedTime: number;
  hasSpawnedInsect: boolean;
}

export class HoneyTrapManager {
  private nature: Nature;
  private shopManager: ShopManager;
  private insectManager: InsectManager;
  private audio?: AudioManager;

  public appliedTrees: HoneyAppliedTree[] = [];
  public currentNearTree: TreeInstance | null = null;

  constructor(
    nature: Nature,
    shopManager: ShopManager,
    insectManager: InsectManager,
    audio?: AudioManager
  ) {
    this.nature = nature;
    this.shopManager = shopManager;
    this.insectManager = insectManager;
    this.audio = audio;
  }

  /**
   * Check if player is near any tree to apply honey
   */
  public checkNearbyTree(playerPos: THREE.Vector3): TreeInstance | null {
    let nearest: TreeInstance | null = null;
    let minDist = 2.4;

    for (const tree of this.nature.trees) {
      const dist = playerPos.distanceTo(tree.basePos);
      if (dist < minDist) {
        minDist = dist;
        nearest = tree;
      }
    }

    this.currentNearTree = nearest;
    return nearest;
  }

  /**
   * Apply honey to current nearby tree
   */
  public applyHoneyToCurrentTree(): boolean {
    if (!this.currentNearTree) return false;

    // Check if player has honey
    const hasSpecialBanana = (this.shopManager as any).bananaHoneyCount > 0;
    const hasNormalHoney = this.shopManager.honeyCount > 0;

    if (!hasSpecialBanana && !hasNormalHoney) {
      return false;
    }

    // Check if tree already has honey
    if (this.currentNearTree.hasHoney) {
      return false;
    }

    // Consume honey item
    let isBanana = false;
    if (hasSpecialBanana) {
      (this.shopManager as any).bananaHoneyCount--;
      isBanana = true;
    } else {
      this.shopManager.honeyCount--;
    }

    this.currentNearTree.hasHoney = true;

    // Create golden glittering tree sap mesh on tree trunk
    const sapMat = new THREE.MeshStandardMaterial({
      color: isBanana ? 0xf1c40f : 0xe67e22,
      emissive: isBanana ? 0xd35400 : 0xb33927,
      emissiveIntensity: 0.45,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.92
    });

    const sapGeo = new THREE.CapsuleGeometry(0.18, 0.45, 4, 6);
    const sapMesh = new THREE.Mesh(sapGeo, sapMat);
    sapMesh.position.set(0, 1.4, 0.32);
    sapMesh.scale.set(0.6, 1.2, 0.3);
    this.currentNearTree.group.add(sapMesh);

    const record: HoneyAppliedTree = {
      tree: this.currentNearTree,
      sapMesh,
      appliedTime: Date.now(),
      hasSpawnedInsect: false
    };

    this.appliedTrees.push(record);

    // Audio cue
    this.audio?.playPurchase();

    // Immediately trigger or schedule attraction
    setTimeout(() => {
      this.attractBeetleToTree(record, isBanana);
    }, 2500);

    return true;
  }

  /**
   * Attract beetle or rare butterfly to honey-coated tree
   */
  private attractBeetleToTree(record: HoneyAppliedTree, isBanana: boolean): void {
    if (record.hasSpawnedInsect) return;
    record.hasSpawnedInsect = true;

    // Potential insects attracted to sweet tree sap
    const candidateIds = isBanana
      ? [
          'hercules_beetle',     // ヘラクレス (UR)
          'stag_beetle_giant',   // オオクワガタ (SSR)
          'rainbow_stag',        // ニジイロクワガタ (SSR)
          'luehdorfia',          // ギフチョウ (SSR)
          'rhinoceros_beetle'    // カブトムシ
        ]
      : [
          'rhinoceros_beetle',   // カブトムシ
          'stag_beetle_sawtooth',// ノコギリクワガタ
          'stag_beetle_miyama',  // ミヤマクワガタ
          'luehdorfia',          // ギフチョウ
          'cicada_aburazemi'     // アブラゼミ
        ];

    const chosenId = candidateIds[Math.floor(Math.random() * candidateIds.length)];
    const data = InsectDatabase.getById(chosenId);
    if (!data) return;

    // Position on tree trunk: height ~1.6m
    const spawnPos = new THREE.Vector3(
      record.tree.basePos.x + 0.1,
      record.tree.basePos.y + 1.6,
      record.tree.basePos.z + 0.35
    );

    const insect = this.insectManager.spawnSingleInsect(chosenId, spawnPos);
    if (insect) {
      insect.position.copy(spawnPos);
    }
  }

  /**
   * Update glittering sap animation
   */
  public update(_delta: number): void {
    const pulse = 0.3 + Math.sin(Date.now() * 0.005) * 0.2;
    for (const item of this.appliedTrees) {
      (item.sapMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  }
}
