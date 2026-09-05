import * as THREE from 'three';

export interface MoveInput {
  x: number; // -1 (left) to 1 (right)
  z: number; // -1 (backward) to 1 (forward)
  isRunning: boolean;
  isJumping: boolean;
  isAction: boolean;
}

export interface CameraInput {
  deltaYaw: number;
  deltaPitch: number;
}

export class InputManager {
  private keys: Record<string, boolean> = {};
  
  // Camera dragging state
  private isPointerDown: boolean = false;
  private lastPointerX: number = 0;
  private lastPointerY: number = 0;
  private cameraDeltaYaw: number = 0;
  private cameraDeltaPitch: number = 0;

  // Virtual touch input (for Phase 2 compatibility)
  public virtualMove: THREE.Vector2 = new THREE.Vector2(0, 0);
  public virtualRunning: boolean = false;
  public virtualJumping: boolean = false;
  public virtualAction: boolean = false;

  constructor(targetElement: HTMLElement) {
    this.setupKeyboard();
    this.setupPointer(targetElement);
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    window.addEventListener('blur', () => {
      this.keys = {};
    });
  }

  private setupPointer(element: HTMLElement): void {
    // Mouse / Touch Dragging for Camera rotation
    element.addEventListener('pointerdown', (e) => {
      // If clicking on UI, ignore
      if ((e.target as HTMLElement).closest('#operation-guide, #status-bar')) return;
      this.isPointerDown = true;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isPointerDown) return;
      const dx = e.clientX - this.lastPointerX;
      const dy = e.clientY - this.lastPointerY;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;

      // Sensitivity
      const sensitivity = 0.005;
      this.cameraDeltaYaw -= dx * sensitivity;
      this.cameraDeltaPitch -= dy * sensitivity;
    });

    window.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });

    window.addEventListener('pointercancel', () => {
      this.isPointerDown = false;
    });
  }

  public getMoveInput(): MoveInput {
    let x = 0;
    let z = 0;

    // Keyboard controls
    if (this.keys['KeyW'] || this.keys['ArrowUp']) z += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) z -= 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;

    // Apply virtual joystick if active
    if (this.virtualMove.lengthSq() > 0.01) {
      x = this.virtualMove.x;
      z = this.virtualMove.y;
    }

    // Normalize diagonal movement
    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }

    const isRunning = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight'] || this.virtualRunning);
    const isJumping = !!(this.keys['Space'] || this.virtualJumping);
    const isAction = !!(this.keys['KeyE'] || this.keys['KeyF'] || this.virtualAction);

    return {
      x,
      z,
      isRunning,
      isJumping,
      isAction
    };
  }

  public addCameraDelta(deltaYaw: number, deltaPitch: number): void {
    this.cameraDeltaYaw += deltaYaw;
    this.cameraDeltaPitch += deltaPitch;
  }

  public consumeCameraInput(): CameraInput {
    const yaw = this.cameraDeltaYaw;
    const pitch = this.cameraDeltaPitch;
    this.cameraDeltaYaw = 0;
    this.cameraDeltaPitch = 0;
    return { deltaYaw: yaw, deltaPitch: pitch };
  }
}
