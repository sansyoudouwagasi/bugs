import * as THREE from 'three';

export type PlayerAnimState = 'idle' | 'walk' | 'run' | 'jump' | 'action' | 'inspect' | 'stun' | 'faint';
export type PlayerFacing = 'front' | 'back' | 'side';

export class Player {
  public group: THREE.Group;
  public spriteMesh: THREE.Mesh;
  public shadowMesh: THREE.Mesh;
  public swingMesh: THREE.Mesh;
  private texture: THREE.Texture;
  private material: THREE.MeshLambertMaterial;

  // Animation state
  public animState: PlayerAnimState = 'idle';
  public facing: PlayerFacing = 'front';
  private frameIndex: number = 0;
  private animTimer: number = 0;
  private facingRight: boolean = true;

  // Sprite Sheet Configuration: 8 cols x 8 rows (2048 x 2048)
  // Row 0: Front Idle (5 frames, col 0..4), Front Jump (3 frames, col 5..7)
  // Row 1: Front Walk (4 frames, col 0..3), Front Run (4 frames, col 4..7)
  // Row 2: Front Action / Net (6 frames, col 0..5), Inspect Basket (2 frames, col 6..7)
  // Row 3: Back Idle (5 frames, col 0..4), Back Jump (3 frames, col 5..7)
  // Row 4: Back Walk (6 frames, col 0..5), Defeat / Faint (2 frames, col 6..7)
  // Row 5: Back Action / Net (5 frames, col 0..4), Side Jump (3 frames, col 5..7) from public/textures/player/jump_*.png
  // Row 6: Side Walk (8 frames, col 0..7) from public/textures/player/walk_*.png
  // Row 7: Side Run (8 frames, col 0..7) from public/textures/player/run_*.png
  private readonly COLS = 8;
  private readonly ROWS = 8;

  constructor() {
    this.group = new THREE.Group();

    // 1. Texture & Material
    const textureLoader = new THREE.TextureLoader();
    this.texture = textureLoader.load('/textures/player_sheet.png');
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.texture.repeat.set(1 / this.COLS, 1 / this.ROWS);

    this.material = new THREE.MeshLambertMaterial({
      map: this.texture,
      transparent: true,
      alphaTest: 0.08,
      side: THREE.DoubleSide,
    });

    // 2. Sprite Plane (Height ~ 2.1m, Width ~ 2.1m)
    // Pivot at bottom center (y=1.05)
    const planeGeo = new THREE.PlaneGeometry(2.1, 2.1);
    planeGeo.translate(0, 1.05, 0);

    this.spriteMesh = new THREE.Mesh(planeGeo, this.material);
    this.spriteMesh.castShadow = true;
    this.spriteMesh.receiveShadow = false;
    this.group.add(this.spriteMesh);

    // 3. Blob Shadow at feet
    const shadowGeo = new THREE.CircleGeometry(0.55, 16);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1a2e1a,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.position.y = 0.03;
    this.group.add(this.shadowMesh);

    // 4. Net Swing Swoosh Mesh (Visual feedback for net swing)
    const swingGeo = new THREE.RingGeometry(0.8, 1.5, 24, 1, 0, Math.PI * 0.9);
    swingGeo.rotateX(-Math.PI / 4);
    const swingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.swingMesh = new THREE.Mesh(swingGeo, swingMat);
    this.swingMesh.position.set(0.6, 0.9, 0.4);
    this.group.add(this.swingMesh);

    // Initial frame
    this.setFrame(0, 0); // Front idle frame 0
  }

  /**
   * Set UV frame on sprite sheet
   * col: 0..7
   * row: 0..7 (0 is top row)
   */
  public setFrame(row: number, col: number): void {
    const u = col / this.COLS;
    const v = (this.ROWS - 1 - row) / this.ROWS;
    this.texture.offset.set(u, v);
  }

  public setFacing(right: boolean): void {
    if (this.facingRight !== right) {
      this.facingRight = right;
      this.spriteMesh.scale.x = right ? 1 : -1;
    }
  }

  public setFacingDirection(direction: PlayerFacing): void {
    if (this.facing !== direction) {
      this.facing = direction;
      this.frameIndex = 0;
      this.animTimer = 0;
    }
  }

  // Backwards compatibility helper
  public setFacingBack(back: boolean): void {
    this.setFacingDirection(back ? 'back' : 'front');
  }

  public setAnimState(state: PlayerAnimState): void {
    if (this.animState !== state) {
      this.animState = state;
      this.frameIndex = 0;
      this.animTimer = 0;
    }
  }

  public update(delta: number, camera: THREE.Camera): void {
    // Y-Billboard: rotate sprite around Y axis to face camera
    const camEuler = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
    this.spriteMesh.rotation.y = camEuler.y;

    this.animTimer += delta;

    switch (this.animState) {
      case 'idle': {
        const frameDuration = 0.22;
        const totalFrames = 5;
        if (this.animTimer >= frameDuration) {
          this.animTimer -= frameDuration;
          this.frameIndex = (this.frameIndex + 1) % totalFrames;
        }
        if (this.facing === 'back') {
          this.setFrame(3, this.frameIndex); // Row 3 = Back Idle (5 frames)
        } else {
          this.setFrame(0, this.frameIndex); // Row 0 = Front Idle (5 frames)
        }
        break;
      }

      case 'walk': {
        if (this.facing === 'side') {
          // Row 6 = Side Walk from player folder (8 frames, walk_0..7)
          const frameDuration = 0.09;
          const totalFrames = 8;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(6, this.frameIndex);
        } else if (this.facing === 'back') {
          // Row 4 = Back Walk (6 frames)
          const frameDuration = 0.10;
          const totalFrames = 6;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(4, this.frameIndex);
        } else {
          // Row 1 = Front Walk (4 frames, cols 0..3)
          const frameDuration = 0.12;
          const totalFrames = 4;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(1, this.frameIndex);
        }
        break;
      }

      case 'run': {
        if (this.facing === 'side') {
          // Row 7 = Side Run from player folder (8 frames, run_0..7)
          const frameDuration = 0.075;
          const totalFrames = 8;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(7, this.frameIndex);
        } else if (this.facing === 'back') {
          // Back run plays back walk at high speed
          const frameDuration = 0.07;
          const totalFrames = 6;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(4, this.frameIndex);
        } else {
          // Front run (4 frames, Row 1 cols 4..7)
          const frameDuration = 0.08;
          const totalFrames = 4;
          if (this.animTimer >= frameDuration) {
            this.animTimer -= frameDuration;
            this.frameIndex = (this.frameIndex + 1) % totalFrames;
          }
          this.setFrame(1, 4 + this.frameIndex);
        }
        break;
      }

      case 'jump': {
        // Jump frames: 3 frames
        const frameDuration = 0.12;
        if (this.animTimer >= frameDuration && this.frameIndex < 2) {
          this.animTimer -= frameDuration;
          this.frameIndex += 1;
        }
        if (this.facing === 'side') {
          // Row 5, cols 5..7 = Side Jump from player folder (jump_0..2.png)
          this.setFrame(5, 5 + this.frameIndex);
        } else if (this.facing === 'back') {
          this.setFrame(3, 5 + this.frameIndex); // Row 3, cols 5..7
        } else {
          this.setFrame(0, 5 + this.frameIndex); // Row 0, cols 5..7
        }
        break;
      }

      case 'action': {
        // Dynamic Net swing animation!
        if (this.facing === 'back') {
          // Back net action: 5 frames (Row 5, cols 0..4)
          const frameDuration = 0.06;
          const totalFrames = 5;
          const curIndex = Math.min(totalFrames - 1, Math.floor(this.animTimer / frameDuration));
          this.setFrame(5, curIndex);

          const progress = Math.min(1.0, this.animTimer / (frameDuration * totalFrames));
          (this.swingMesh.material as THREE.MeshBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.7;
          this.swingMesh.rotation.z = (this.facingRight ? -1 : 1) * progress * Math.PI * 0.8;
          this.swingMesh.position.x = this.facingRight ? 0.6 : -0.6;

          if (this.animTimer > frameDuration * totalFrames + 0.05) {
            (this.swingMesh.material as THREE.MeshBasicMaterial).opacity = 0;
            this.setAnimState('idle');
          }
        } else {
          // Front/Side net action: 6 frames (Row 2, cols 0..5)
          const frameDuration = 0.055;
          const totalFrames = 6;
          const curIndex = Math.min(totalFrames - 1, Math.floor(this.animTimer / frameDuration));
          this.setFrame(2, curIndex);

          const progress = Math.min(1.0, this.animTimer / (frameDuration * totalFrames));
          (this.swingMesh.material as THREE.MeshBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.85;
          this.swingMesh.rotation.z = (this.facingRight ? -1 : 1) * progress * Math.PI * 0.9;
          this.swingMesh.position.x = this.facingRight ? 0.6 : -0.6;

          if (this.animTimer > frameDuration * totalFrames + 0.05) {
            (this.swingMesh.material as THREE.MeshBasicMaterial).opacity = 0;
            this.setAnimState('idle');
          }
        }
        break;
      }

      case 'inspect': {
        // Inspect bug basket: Row 2, cols 6..7 (2 frames, 0.25s each)
        const frameDuration = 0.25;
        const totalFrames = 2;
        if (this.animTimer >= frameDuration) {
          this.animTimer -= frameDuration;
          this.frameIndex = (this.frameIndex + 1) % totalFrames;
        }
        this.setFrame(2, 6 + this.frameIndex);
        break;
      }

      case 'stun':
      case 'faint': {
        // Defeat / Faint: Row 4, cols 6..7 (2 frames)
        const frameDuration = 0.3;
        const curIndex = Math.min(1, Math.floor(this.animTimer / frameDuration));
        this.setFrame(4, 6 + curIndex);
        if (this.animState === 'stun' && this.animTimer > 0.8) {
          this.setAnimState('idle');
        }
        break;
      }
    }
  }

  public get position(): THREE.Vector3 {
    return this.group.position;
  }

  public get isFacingRight(): boolean {
    return this.facingRight;
  }

  public get isFacingBack(): boolean {
    return this.facing === 'back';
  }
}
