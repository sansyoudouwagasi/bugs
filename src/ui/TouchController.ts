import * as THREE from 'three';
import { InputManager } from '../core/Input';

export class TouchController {
  private input: InputManager;

  // Joystick elements
  private joystickZone: HTMLElement | null = null;
  private joystickBase: HTMLElement | null = null;
  private joystickStick: HTMLElement | null = null;
  private joystickPointerId: number | null = null;
  private joystickCenter: THREE.Vector2 = new THREE.Vector2();
  private maxRadius: number = 42; // Max pixel offset for stick

  // Camera swipe
  private cameraPointerId: number | null = null;
  private lastCameraX: number = 0;
  private lastCameraY: number = 0;

  // Buttons
  private btnAction: HTMLElement | null = null;
  private btnDash: HTMLElement | null = null;
  private btnJump: HTMLElement | null = null;

  constructor(input: InputManager) {
    this.input = input;
    this.initElements();
    this.initJoystick();
    this.initButtons();
    this.initCameraSwipe();
  }

  private initElements(): void {
    this.joystickZone = document.getElementById('joystick-zone');
    this.joystickBase = document.getElementById('joystick-base');
    this.joystickStick = document.getElementById('joystick-stick');

    this.btnAction = document.getElementById('btn-action');
    this.btnDash = document.getElementById('btn-dash');
    this.btnJump = document.getElementById('btn-jump');
  }

  private initJoystick(): void {
    if (!this.joystickZone || !this.joystickBase || !this.joystickStick) return;

    const onPointerDown = (e: PointerEvent) => {
      if (this.joystickPointerId !== null) return;
      this.joystickPointerId = e.pointerId;
      this.joystickZone?.setPointerCapture(e.pointerId);

      const rect = this.joystickBase!.getBoundingClientRect();
      this.joystickCenter.set(rect.left + rect.width / 2, rect.top + rect.height / 2);
      this.updateJoystick(e.clientX, e.clientY);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerId !== this.joystickPointerId) return;
      this.updateJoystick(e.clientX, e.clientY);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerId !== this.joystickPointerId) return;
      this.resetJoystick();
    };

    this.joystickZone.addEventListener('pointerdown', onPointerDown);
    this.joystickZone.addEventListener('pointermove', onPointerMove);
    this.joystickZone.addEventListener('pointerup', onPointerUp);
    this.joystickZone.addEventListener('pointercancel', onPointerUp);
  }

  private updateJoystick(clientX: number, clientY: number): void {
    const dx = clientX - this.joystickCenter.x;
    const dy = clientY - this.joystickCenter.y;
    const dist = Math.hypot(dx, dy);

    let clampedX = dx;
    let clampedY = dy;

    if (dist > this.maxRadius) {
      clampedX = (dx / dist) * this.maxRadius;
      clampedY = (dy / dist) * this.maxRadius;
    }

    // Move visual stick knob
    if (this.joystickStick) {
      this.joystickStick.style.transform = `translate(calc(-50% + ${clampedX}px), calc(-50% + ${clampedY}px))`;
    }

    // Normalized input vector:
    // Screen X: positive right -> game X: positive right
    // Screen Y: positive down -> game Z: positive forward (-dy / maxRadius)
    const normX = clampedX / this.maxRadius;
    const normZ = -clampedY / this.maxRadius;

    this.input.virtualMove.set(normX, normZ);
  }

  private resetJoystick(): void {
    this.joystickPointerId = null;
    this.input.virtualMove.set(0, 0);
    if (this.joystickStick) {
      this.joystickStick.style.transform = 'translate(-50%, -50%)';
    }
  }

  private initButtons(): void {
    // Action (Net swing) Button
    if (this.btnAction) {
      const triggerAction = (e: Event) => {
        e.preventDefault();
        this.btnAction?.classList.add('active');
        this.input.virtualAction = true;
        setTimeout(() => {
          this.input.virtualAction = false;
          this.btnAction?.classList.remove('active');
        }, 300);
      };
      this.btnAction.addEventListener('pointerdown', triggerAction);
    }

    // Dash Button (Hold or toggle)
    if (this.btnDash) {
      this.btnDash.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.btnDash?.classList.add('active');
        this.input.virtualRunning = true;
      });

      const endDash = (e: Event) => {
        e.preventDefault();
        this.btnDash?.classList.remove('active');
        this.input.virtualRunning = false;
      };
      this.btnDash.addEventListener('pointerup', endDash);
      this.btnDash.addEventListener('pointercancel', endDash);
      this.btnDash.addEventListener('pointerleave', endDash);
    }

    // Jump Button
    if (this.btnJump) {
      this.btnJump.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.btnJump?.classList.add('active');
        this.input.virtualJumping = true;
      });

      const endJump = (e: Event) => {
        e.preventDefault();
        this.btnJump?.classList.remove('active');
        this.input.virtualJumping = false;
      };
      this.btnJump.addEventListener('pointerup', endJump);
      this.btnJump.addEventListener('pointercancel', endJump);
      this.btnJump.addEventListener('pointerleave', endJump);
    }
  }

  private initCameraSwipe(): void {
    // Enable camera rotation on right half of screen when not touching buttons
    window.addEventListener('pointerdown', (e) => {
      // Ignore if clicking UI elements
      const target = e.target as HTMLElement;
      if (target.closest('#joystick-zone, #action-buttons-zone, #status-bar, #operation-guide')) {
        return;
      }

      if (this.cameraPointerId === null) {
        this.cameraPointerId = e.pointerId;
        this.lastCameraX = e.clientX;
        this.lastCameraY = e.clientY;
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.cameraPointerId) return;

      const dx = e.clientX - this.lastCameraX;
      const dy = e.clientY - this.lastCameraY;
      this.lastCameraX = e.clientX;
      this.lastCameraY = e.clientY;

      // Sensitivity
      const sensitivity = 0.005;
      this.input.addCameraDelta(-dx * sensitivity, -dy * sensitivity);
    });

    const endCamera = (e: PointerEvent) => {
      if (e.pointerId === this.cameraPointerId) {
        this.cameraPointerId = null;
      }
    };

    window.addEventListener('pointerup', endCamera);
    window.addEventListener('pointercancel', endCamera);
  }
}
