import * as THREE from 'three';
import { Player } from './Player';
import { World } from '../world/World';
import { InputManager } from '../core/Input';
import { CameraController } from './CameraController';

export class PlayerController {
  public player: Player;
  private world: World;
  private input: InputManager;
  private cameraCtrl: CameraController;

  // Speeds
  private walkSpeed: number = 4.5;
  private runSpeed: number = 7.8;
  public speedMultiplier: number = 1.0;
  public isSneaking: boolean = false;
  
  // Audio & Footstep timer
  private footstepTimer: number = 0;
  public onFootstep?: () => void;
  public onJump?: () => void;

  public toggleSneak(): boolean {
    this.isSneaking = !this.isSneaking;
    return this.isSneaking;
  }

  // Jump / Gravity
  private verticalVelocity: number = 0;
  private gravity: number = -22.0;
  private jumpForce: number = 8.5;
  private isGrounded: boolean = true;
  private wasActionPressed: boolean = false;

  public onActionTrigger?: () => void;

  constructor(player: Player, world: World, input: InputManager, cameraCtrl: CameraController) {
    this.player = player;
    this.world = world;
    this.input = input;
    this.cameraCtrl = cameraCtrl;

    // Initial spawn position (Center of grassland, safe on ground)
    const spawnX = 0;
    const spawnZ = 0;
    const spawnY = this.world.getTerrainHeight(spawnX, spawnZ);
    this.player.position.set(spawnX, spawnY, spawnZ);
  }

  public update(delta: number): void {
    // If inspecting basket or stunned/fainted, freeze player movement
    if (this.player.animState === 'inspect' || this.player.animState === 'faint') {
      this.player.update(delta, this.cameraCtrl.camera);
      return;
    }

    const moveInput = this.input.getMoveInput();

    // 1. Calculate camera-relative movement direction
    const cameraYaw = this.cameraCtrl.yaw;
    const forward = new THREE.Vector3(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw));
    const right = new THREE.Vector3(Math.cos(cameraYaw), 0, -Math.sin(cameraYaw));

    // Desired horizontal move vector
    const moveDir = new THREE.Vector3();
    moveDir.addScaledVector(forward, moveInput.z);
    moveDir.addScaledVector(right, moveInput.x);

    const isMoving = moveDir.lengthSq() > 0.001;
    let baseSpeed = moveInput.isRunning ? this.runSpeed : this.walkSpeed;
    if (this.isSneaking) {
      baseSpeed = this.walkSpeed * 0.52; // Sneak: 52% walk speed
    }
    const currentSpeed = baseSpeed * this.speedMultiplier;

    if (isMoving) {
      moveDir.normalize();
      
      // Move horizontal position
      this.player.position.x += moveDir.x * currentSpeed * delta;
      this.player.position.z += moveDir.z * currentSpeed * delta;

      // Footstep sound triggering while grounded (silenced while sneaking)
      if (this.isGrounded && !this.isSneaking) {
        this.footstepTimer -= delta;
        const stepInterval = moveInput.isRunning ? 0.26 : 0.38;
        if (this.footstepTimer <= 0) {
          this.footstepTimer = stepInterval;
          if (this.onFootstep) {
            this.onFootstep();
          }
        }
      }

      const dotRight = moveDir.dot(right);
      const dotForward = moveDir.dot(forward);

      // Horizontal flip: face right if moving right, face left if moving left
      if (Math.abs(dotRight) > 0.08) {
        this.player.setFacing(dotRight > 0);
      }

      // Natural 4-direction motion classification:
      // angle: 0 = forward (away from camera), ±PI/2 = sideways, ±PI = backward (towards camera)
      const angle = Math.atan2(dotRight, dotForward);
      const absAngle = Math.abs(angle);

      if (absAngle <= Math.PI * 0.32) {
        // Moving away from camera -> show back
        this.player.setFacingDirection('back');
      } else if (absAngle >= Math.PI * 0.68) {
        // Moving towards camera -> show front
        this.player.setFacingDirection('front');
      } else {
        // Moving sideways (left/right) -> show side walk/run from player folder!
        this.player.setFacingDirection('side');
      }
    }

    // Keep player inside island boundaries
    this.world.clampToIsland(this.player.position);

    // 2. Vertical movement (Gravity & Ground check)
    const terrainY = this.world.getTerrainHeight(this.player.position.x, this.player.position.z);

    if (moveInput.isJumping && this.isGrounded && this.player.animState !== 'action') {
      this.verticalVelocity = this.jumpForce;
      this.isGrounded = false;
      this.player.setAnimState('jump');
      if (this.onJump) {
        this.onJump();
      }
    }

    if (!this.isGrounded) {
      this.verticalVelocity += this.gravity * delta;
      this.player.position.y += this.verticalVelocity * delta;

      if (this.player.position.y <= terrainY) {
        this.player.position.y = terrainY;
        this.verticalVelocity = 0;
        this.isGrounded = true;
      }
    } else {
      // Snap smoothly to terrain surface
      this.player.position.y = THREE.MathUtils.lerp(this.player.position.y, terrainY, 0.35);
    }

    // 3. Animation State Management & Action Trigger
    if (moveInput.isAction && !this.wasActionPressed && this.player.animState !== 'action') {
      this.player.setAnimState('action');
      this.onActionTrigger?.();
    } else if (this.isGrounded && this.player.animState !== 'action' && this.player.animState !== 'stun') {
      if (isMoving) {
        this.player.setAnimState(moveInput.isRunning ? 'run' : 'walk');
      } else {
        this.player.setAnimState('idle');
      }
    }
    this.wasActionPressed = moveInput.isAction;

    // Update player sprite billboard
    this.player.update(delta, this.cameraCtrl.camera);
  }
}
