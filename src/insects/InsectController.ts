import * as THREE from 'three';
import { InsectData } from './InsectData';
import { AnimatedInsectModel, InsectModelFactory } from './InsectModel';
import { World } from '../world/World';

export type InsectAIState = 'idle' | 'wander' | 'alert' | 'flee' | 'return';

export class InsectController {
  public data: InsectData;
  public model: AnimatedInsectModel;
  public group: THREE.Group;
  private world: World;

  // AI State
  public state: InsectAIState = 'idle';
  private stateTimer: number = 0;
  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private homePosition: THREE.Vector3 = new THREE.Vector3();
  
  // Movement
  private moveSpeed: number = 1.5;
  private jumpVelocity: number = 0;
  private isGrounded: boolean = true;
  public isCaught: boolean = false;

  constructor(data: InsectData, initialPos: THREE.Vector3, world: World) {
    this.data = data;
    this.world = world;
    this.group = new THREE.Group();
    this.group.position.copy(initialPos);
    this.homePosition.copy(initialPos);

    this.model = InsectModelFactory.createModel(data);
    this.group.add(this.model.group);

    this.moveSpeed = data.moveSpeed;
    this.pickNewWanderTarget();
  }

  public update(delta: number, playerPos: THREE.Vector3, isSneaking: boolean = false, isRunning: boolean = false): void {
    if (this.isCaught) return;

    this.stateTimer -= delta;
    const distToPlayer = this.group.position.distanceTo(playerPos);

    // Dynamic alert distance calculation:
    // Sneaking reduces alert distance by 55%, running increases it by 40%
    let effectiveAlertDist = this.data.alertDistance;
    if (isSneaking) {
      effectiveAlertDist *= 0.45;
    } else if (isRunning) {
      effectiveAlertDist *= 1.4;
    }

    // 1. Player Detection Trigger
    if (distToPlayer < effectiveAlertDist && this.state !== 'flee') {
      this.state = 'flee';
      this.stateTimer = 3.5; // Flee for 3.5 seconds

      // Vector away from player
      const fleeDir = this.group.position.clone().sub(playerPos);
      fleeDir.y = 0;
      fleeDir.normalize();

      // Grasshopper jumps high when fleeing
      if (this.data.modelType === 'grasshopper' && this.isGrounded) {
        this.jumpVelocity = 8.0;
        this.isGrounded = false;
      }

      this.targetPosition.copy(this.group.position).addScaledVector(fleeDir, 12.0);
    }

    // 2. State Machine Update
    let isMoving = false;

    switch (this.state) {
      case 'idle':
        if (this.stateTimer <= 0) {
          this.state = 'wander';
          this.stateTimer = 3.0 + Math.random() * 4.0;
          this.pickNewWanderTarget();
        }
        break;

      case 'wander':
      case 'return': {
        const step = this.moveSpeed * delta;
        isMoving = this.moveToTarget(step);
        if (this.stateTimer <= 0 || !isMoving) {
          this.state = 'idle';
          this.stateTimer = 1.5 + Math.random() * 2.5;
        }
        break;
      }

      case 'flee': {
        const fleeSpeed = this.moveSpeed * 2.2;
        isMoving = this.moveToTarget(fleeSpeed * delta);

        // Extra butterfly flutter climb
        if (this.data.modelType === 'butterfly') {
          this.targetPosition.y = THREE.MathUtils.lerp(this.targetPosition.y, 3.5, delta);
        }

        if (this.stateTimer <= 0) {
          this.state = 'return';
          this.stateTimer = 5.0;
          this.targetPosition.copy(this.homePosition);
        }
        break;
      }
    }

    // 3. Terrain Height Follow / Physics
    const terrainY = this.world.getTerrainHeight(this.group.position.x, this.group.position.z);

    if (this.data.modelType === 'butterfly') {
      // Butterfly floats with gentle sine bobbing
      const targetFlightY = terrainY + this.data.flightHeight + Math.sin(Date.now() * 0.003) * 0.3;
      this.group.position.y = THREE.MathUtils.lerp(this.group.position.y, targetFlightY, 0.1);
    } else {
      // Ground insects (Grasshopper, Ladybug)
      if (!this.isGrounded) {
        this.jumpVelocity -= 20.0 * delta;
        this.group.position.y += this.jumpVelocity * delta;
        if (this.group.position.y <= terrainY) {
          this.group.position.y = terrainY;
          this.jumpVelocity = 0;
          this.isGrounded = true;
        }
      } else {
        this.group.position.y = terrainY;
      }
    }

    // Update model animations
    this.model.update(delta, this.state, isMoving);
  }

  private moveToTarget(step: number): boolean {
    const toTarget = this.targetPosition.clone().sub(this.group.position);
    toTarget.y = 0; // Horizontal movement
    const dist = toTarget.length();

    if (dist < 0.2) {
      return false;
    }

    toTarget.normalize();
    this.group.position.addScaledVector(toTarget, Math.min(step, dist));

    // Smooth rotation towards target
    const targetAngle = Math.atan2(toTarget.x, toTarget.z);
    this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, targetAngle, 0.15);

    return true;
  }

  private pickNewWanderTarget(): void {
    const angle = Math.random() * Math.PI * 2;
    const wanderRadius = 3.0 + Math.random() * 5.0;
    this.targetPosition.x = this.homePosition.x + Math.cos(angle) * wanderRadius;
    this.targetPosition.z = this.homePosition.z + Math.sin(angle) * wanderRadius;
  }

  public get position(): THREE.Vector3 {
    return this.group.position;
  }
}
