import * as THREE from 'three';
import { Player } from './Player';
import { World } from '../world/World';
import { InputManager } from '../core/Input';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  private player: Player;
  private world: World;
  private input: InputManager;

  // Spherical coordinate offsets
  public yaw: number = 0; // Horizontal rotation around player
  public pitch: number = 0.35; // Vertical tilt (radians)
  public distance: number = 7.5; // Distance behind player

  // Pitch constraints
  private readonly minPitch: number = 0.08; // Limit looking up
  private readonly maxPitch: number = 1.15; // Limit looking straight down

  // Camera target smoothing
  private currentTarget: THREE.Vector3 = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera, player: Player, world: World, input: InputManager) {
    this.camera = camera;
    this.player = player;
    this.world = world;
    this.input = input;

    this.currentTarget.copy(this.player.position);
    this.currentTarget.y += 1.2;
    this.updateCameraTransform();
  }

  public update(): void {
    // 1. Consume mouse/drag rotation input
    const camInput = this.input.consumeCameraInput();
    this.yaw += camInput.deltaYaw;
    this.pitch = THREE.MathUtils.clamp(
      this.pitch + camInput.deltaPitch,
      this.minPitch,
      this.maxPitch
    );

    // 2. Smoothly track player position
    const desiredTarget = this.player.position.clone();
    desiredTarget.y += 1.2; // Look at player chest/head
    this.currentTarget.lerp(desiredTarget, 0.18);

    // 3. Position camera
    this.updateCameraTransform();
  }

  private updateCameraTransform(): void {
    const horizontalDist = this.distance * Math.cos(this.pitch);
    const verticalDist = this.distance * Math.sin(this.pitch);

    const camX = this.currentTarget.x + horizontalDist * Math.sin(this.yaw);
    const camZ = this.currentTarget.z + horizontalDist * Math.cos(this.yaw);
    let camY = this.currentTarget.y + verticalDist;

    // Prevent camera from clipping through terrain
    const terrainHeightAtCam = this.world.getTerrainHeight(camX, camZ);
    if (camY < terrainHeightAtCam + 0.8) {
      camY = terrainHeightAtCam + 0.8;
    }

    this.camera.position.set(camX, camY, camZ);
    this.camera.lookAt(this.currentTarget);
  }

  public reset(): void {
    this.currentTarget.copy(this.player.position);
    this.currentTarget.y += 1.2;
    this.updateCameraTransform();
  }
}
