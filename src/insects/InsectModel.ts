import * as THREE from 'three';
import { InsectData } from './InsectData';

export interface AnimatedInsectModel {
  group: THREE.Group;
  update(delta: number, state: string, isMoving: boolean): void;
}

export class InsectModelFactory {
  public static createModel(data: InsectData): AnimatedInsectModel {
    switch (data.modelType) {
      case 'butterfly':
        return this.createButterfly(data);
      case 'grasshopper':
        return this.createGrasshopper(data);
      case 'ladybug':
        return this.createLadybug(data);
      case 'firefly':
        return this.createFirefly(data);
      case 'beetle':
        return this.createBeetle(data);
      case 'dragonfly':
        return this.createDragonfly(data);
      case 'snail':
        return this.createSnail(data);
      case 'cicada':
        return this.createCicada(data);
      case 'stag_beetle':
        return this.createStagBeetle(data);
      case 'wasp':
        return this.createWasp(data);
      case 'hercules':
        return this.createHercules(data);
      case 'rainbow_stag':
        return this.createRainbowStag(data);
      case 'paper_kite':
        return this.createPaperKite(data);
      case 'luna_moth':
        return this.createLunaMoth(data);
      case 'walking_stick':
        return this.createWalkingStick(data);
      case 'platinum_beetle':
        return this.createPlatinumBeetle(data);
      case 'emperor_cicada':
        return this.createEmperorCicada(data);
      case 'fungus_gnat':
        return this.createFungusGnat(data);
      case 'atlas_moth':
        return this.createAtlasMoth(data);
      case 'giant_water_bug':
        return this.createGiantWaterBug(data);
      case 'luehdorfia':
        return this.createLuehdorfia(data);
      case 'meganeura':
        return this.createMeganeura(data);
      case 'caucasus_beetle':
        return this.createCaucasusBeetle(data);
      case 'morpho_butterfly':
        return this.createMorphoButterfly(data);
      case 'golden_stag':
        return this.createGoldenStag(data);
      default:
        return this.createButterfly(data);
    }
  }

  // 1. Butterfly Model
  private static createButterfly(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x222222, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.06, 0.35, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Wings (Left & Right)
    const wingMat = new THREE.MeshLambertMaterial({
      color: new THREE.Color(data.primaryColor),
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.95
    });

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.quadraticCurveTo(0.35, 0.4, 0.55, 0.15);
    wingShape.quadraticCurveTo(0.4, -0.25, 0, 0);
    const wingGeo = new THREE.ShapeGeometry(wingShape);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.04, 0.05, 0);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;
    leftWingPivot.add(leftWing);
    group.add(leftWingPivot);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.04, 0.05, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.rotation.x = Math.PI / 2;
    rightWingPivot.add(rightWing);
    group.add(rightWingPivot);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        const flapSpeed = state === 'flee' ? 28 : 14;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.75;

        leftWingPivot.rotation.z = -flapAngle;
        rightWingPivot.rotation.z = flapAngle;
      }
    };
  }

  // 2. Grasshopper Model
  private static createGrasshopper(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const mat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x1e3810, flatShading: true });

    const bodyGeo = new THREE.ConeGeometry(0.12, 0.65, 5);
    bodyGeo.rotateX(-Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, mat);
    body.position.set(0, 0.18, 0);
    group.add(body);

    const headGeo = new THREE.DodecahedronGeometry(0.12, 0);
    const head = new THREE.Mesh(headGeo, mat);
    head.position.set(0, 0.22, 0.35);
    group.add(head);

    const eyeMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const eyeGeo = new THREE.SphereGeometry(0.035, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.08, 0.26, 0.4);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.08, 0.26, 0.4);
    group.add(eyeL, eyeR);

    const legGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.45, 4);
    legGeo.translate(0, 0.22, 0);

    const legL = new THREE.Group();
    legL.position.set(-0.14, 0.15, -0.1);
    const legMeshL = new THREE.Mesh(legGeo, darkMat);
    legMeshL.rotation.z = -0.6;
    legMeshL.rotation.x = -0.3;
    legL.add(legMeshL);
    group.add(legL);

    const legR = new THREE.Group();
    legR.position.set(0.14, 0.15, -0.1);
    const legMeshR = new THREE.Mesh(legGeo, darkMat);
    legMeshR.rotation.z = 0.6;
    legMeshR.rotation.x = -0.3;
    legR.add(legMeshR);
    group.add(legR);

    let walkTimer = 0;

    return {
      group,
      update(delta: number, _state: string, isMoving: boolean) {
        if (isMoving) {
          walkTimer += delta * 12;
          legL.rotation.x = Math.sin(walkTimer) * 0.4;
          legR.rotation.x = -Math.sin(walkTimer) * 0.4;
        } else {
          legL.rotation.x = 0;
          legR.rotation.x = 0;
        }
      }
    };
  }

  // 3. Ladybug Model
  private static createLadybug(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const shellMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const shellGeo = new THREE.SphereGeometry(0.25, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const shell = new THREE.Mesh(shellGeo, shellMat);
    shell.position.y = 0.1;
    group.add(shell);

    const headMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });
    const headGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 0.12, 0.22);
    group.add(head);

    const spotMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const spotGeo = new THREE.CircleGeometry(0.04, 6);
    spotGeo.rotateX(-Math.PI / 2);

    const spotOffsets = [
      [-0.1, 0.32, 0.05],
      [0.1, 0.32, 0.05],
      [-0.16, 0.25, -0.1],
      [0.16, 0.25, -0.1],
      [0.0, 0.33, -0.08],
      [-0.08, 0.18, -0.18],
      [0.08, 0.18, -0.18]
    ];

    for (const [sx, sy, sz] of spotOffsets) {
      const spot = new THREE.Mesh(spotGeo, spotMat);
      spot.position.set(sx, sy + 0.01, sz);
      group.add(spot);
    }

    let crawlTimer = 0;

    return {
      group,
      update(delta: number, _state: string, isMoving: boolean) {
        if (isMoving) {
          crawlTimer += delta * 15;
          group.position.y += Math.sin(crawlTimer) * 0.002;
        }
      }
    };
  }

  // 4. Firefly Model (Glows at night)
  private static createFirefly(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Dark body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1e272e });
    const bodyGeo = new THREE.CapsuleGeometry(0.07, 0.2, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Glowing tail
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x7bed9f });
    const glowGeo = new THREE.SphereGeometry(0.09, 8, 8);
    const tail = new THREE.Mesh(glowGeo, glowMat);
    tail.position.set(0, 0, -0.18);
    group.add(tail);

    // Soft point light
    const pointLight = new THREE.PointLight(0x7bed9f, 0.8, 3.5);
    pointLight.position.set(0, 0, -0.18);
    group.add(pointLight);

    let timer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number) {
        timer += delta * 4.0;
        // Breathing pulse glow
        const pulse = 0.5 + Math.sin(timer) * 0.45;
        glowMat.color.setRGB(0.48 * pulse, 0.93 * pulse, 0.62 * pulse);
        pointLight.intensity = 0.4 + pulse * 0.8;
      }
    };
  }

  // 5. Beetle Model (Rhinoceros beetle with horn)
  private static createBeetle(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const carapaceMat = new THREE.MeshLambertMaterial({
      color: new THREE.Color(data.primaryColor),
      flatShading: true
    });

    // Abdomen & Carapace
    const shellGeo = new THREE.SphereGeometry(0.28, 8, 6);
    shellGeo.scale(1.0, 0.7, 1.4);
    const shell = new THREE.Mesh(shellGeo, carapaceMat);
    shell.position.set(0, 0.18, 0);
    group.add(shell);

    // Head
    const headGeo = new THREE.BoxGeometry(0.22, 0.15, 0.22);
    const head = new THREE.Mesh(headGeo, carapaceMat);
    head.position.set(0, 0.16, 0.45);
    group.add(head);

    // Y-shaped Rhinoceros Horn
    const hornBaseGeo = new THREE.CylinderGeometry(0.03, 0.06, 0.35, 5);
    hornBaseGeo.translate(0, 0.17, 0);
    const horn = new THREE.Mesh(hornBaseGeo, carapaceMat);
    horn.position.set(0, 0.22, 0.52);
    horn.rotation.x = Math.PI / 4;
    group.add(horn);

    const hornForkGeo = new THREE.BoxGeometry(0.16, 0.04, 0.04);
    const hornFork = new THREE.Mesh(hornForkGeo, carapaceMat);
    hornFork.position.set(0, 0.42, 0.68);
    group.add(hornFork);

    let crawlTimer = 0;

    return {
      group,
      update(delta: number, _state: string, isMoving: boolean) {
        if (isMoving) {
          crawlTimer += delta * 10;
          group.rotation.y += Math.sin(crawlTimer) * 0.02;
        }
      }
    };
  }

  // 6. Dragonfly Model
  private static createDragonfly(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const mat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide
    });

    // Slender tail
    const tailGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.7, 5);
    tailGeo.rotateX(Math.PI / 2);
    const tail = new THREE.Mesh(tailGeo, mat);
    tail.position.set(0, 0.1, -0.2);
    group.add(tail);

    // Head & big eyes
    const headGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const head = new THREE.Mesh(headGeo, mat);
    head.position.set(0, 0.12, 0.22);
    group.add(head);

    // 4 Wings (Fore and Hind)
    const wingGeo = new THREE.PlaneGeometry(0.5, 0.12);
    wingGeo.translate(0.25, 0, 0);

    const leftWing1 = new THREE.Mesh(wingGeo, wingMat);
    leftWing1.position.set(0.04, 0.16, 0.08);
    const rightWing1 = new THREE.Mesh(wingGeo, wingMat);
    rightWing1.position.set(-0.04, 0.16, 0.08);
    rightWing1.rotation.y = Math.PI;

    const leftWing2 = new THREE.Mesh(wingGeo, wingMat);
    leftWing2.position.set(0.04, 0.16, -0.04);
    const rightWing2 = new THREE.Mesh(wingGeo, wingMat);
    rightWing2.position.set(-0.04, 0.16, -0.04);
    rightWing2.rotation.y = Math.PI;

    group.add(leftWing1, rightWing1, leftWing2, rightWing2);

    let flapTimer = 0;

    return {
      group,
      update(delta: number) {
        flapTimer += delta * 45;
        const angle = Math.sin(flapTimer) * 0.4;
        leftWing1.rotation.z = angle;
        rightWing1.rotation.z = -angle;
        leftWing2.rotation.z = -angle * 0.8;
        rightWing2.rotation.z = angle * 0.8;
      }
    };
  }

  // 7. Snail Model
  private static createSnail(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Spiral shell
    const shellMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.secondaryColor), flatShading: true });
    const shellGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.14, 8);
    shellGeo.rotateZ(Math.PI / 2);
    const shell = new THREE.Mesh(shellGeo, shellMat);
    shell.position.set(0, 0.22, -0.05);
    group.add(shell);

    // Soft body
    const bodyMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor) });
    const bodyGeo = new THREE.CapsuleGeometry(0.08, 0.45, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.08, 0.05);
    group.add(body);

    // Eye tentacles
    const eyeGeo = new THREE.SphereGeometry(0.03, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, shellMat);
    eyeL.position.set(-0.05, 0.22, 0.32);
    const eyeR = new THREE.Mesh(eyeGeo, shellMat);
    eyeR.position.set(0.05, 0.22, 0.32);
    group.add(eyeL, eyeR);

    return {
      group,
      update() {}
    };
  }

  // 8. Cicada Model (セミ)
  private static createCicada(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Body (Round, compact)
    const bodyMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.secondaryColor), flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.14, 0.42, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.14, 0);
    group.add(body);

    // Head
    const headMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const headGeo = new THREE.BoxGeometry(0.24, 0.12, 0.14);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 0.15, 0.24);
    group.add(head);

    // Big red/dark eyes on sides
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xcc2222 });
    const eyeGeo = new THREE.SphereGeometry(0.04, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.13, 0.16, 0.24);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.13, 0.16, 0.24);
    group.add(eyeL, eyeR);

    // Glassy transparent wings folded on back
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xddf5ff,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });
    const wingGeo = new THREE.BoxGeometry(0.14, 0.02, 0.45);
    wingGeo.translate(0, 0, -0.15);

    const wingL = new THREE.Mesh(wingGeo, wingMat);
    wingL.position.set(-0.06, 0.22, 0.05);
    wingL.rotation.z = -0.2;
    wingL.rotation.y = -0.1;

    const wingR = new THREE.Mesh(wingGeo, wingMat);
    wingR.position.set(0.06, 0.22, 0.05);
    wingR.rotation.z = 0.2;
    wingR.rotation.y = 0.1;

    group.add(wingL, wingR);

    let vibTimer = 0;

    return {
      group,
      update(delta: number, state: string) {
        if (state === 'flee') {
          vibTimer += delta * 50;
          wingL.rotation.z = -0.2 + Math.sin(vibTimer) * 0.4;
          wingR.rotation.z = 0.2 - Math.sin(vibTimer) * 0.4;
        } else {
          wingL.rotation.z = -0.2;
          wingR.rotation.z = 0.2;
        }
      }
    };
  }

  // 9. Stag Beetle Model (ノコギリクワガタ)
  private static createStagBeetle(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const armorMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });

    // Abdomen
    const bodyGeo = new THREE.BoxGeometry(0.32, 0.15, 0.55);
    const body = new THREE.Mesh(bodyGeo, armorMat);
    body.position.set(0, 0.14, -0.08);
    group.add(body);

    // Thorax
    const thoraxGeo = new THREE.BoxGeometry(0.34, 0.16, 0.22);
    const thorax = new THREE.Mesh(thoraxGeo, darkMat);
    thorax.position.set(0, 0.16, 0.22);
    group.add(thorax);

    // Head
    const headGeo = new THREE.BoxGeometry(0.24, 0.13, 0.15);
    const head = new THREE.Mesh(headGeo, armorMat);
    head.position.set(0, 0.15, 0.36);
    group.add(head);

    // Huge curved Mandibles / Pincers (大アゴ)
    const mandibleShape = new THREE.Shape();
    mandibleShape.moveTo(0, 0);
    mandibleShape.lineTo(0.06, 0.12);
    mandibleShape.quadraticCurveTo(0.14, 0.38, -0.04, 0.48);
    mandibleShape.quadraticCurveTo(0.06, 0.32, 0.02, 0.1);
    mandibleShape.closePath();

    const mandibleGeo = new THREE.ExtrudeGeometry(mandibleShape, { depth: 0.03, bevelEnabled: false });
    mandibleGeo.rotateX(-Math.PI / 2);

    const leftMandible = new THREE.Mesh(mandibleGeo, armorMat);
    leftMandible.position.set(-0.06, 0.14, 0.42);

    const rightMandible = new THREE.Mesh(mandibleGeo, armorMat);
    rightMandible.position.set(0.06, 0.14, 0.42);
    rightMandible.scale.x = -1;

    group.add(leftMandible, rightMandible);

    let snapTimer = 0;

    return {
      group,
      update(delta: number, state: string) {
        if (state === 'flee' || state === 'alert') {
          snapTimer += delta * 8;
          const snap = Math.sin(snapTimer) * 0.18;
          leftMandible.rotation.y = snap;
          rightMandible.rotation.y = -snap;
        } else {
          leftMandible.rotation.y = 0;
          rightMandible.rotation.y = 0;
        }
      }
    };
  }

  // 10. Wasp Model (オオスズメバチ)
  private static createWasp(data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const yellowMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.primaryColor), flatShading: true });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });

    // Head
    const headGeo = new THREE.SphereGeometry(0.1, 5, 5);
    const head = new THREE.Mesh(headGeo, yellowMat);
    head.position.set(0, 0.15, 0.28);
    group.add(head);

    // Thorax
    const thoraxGeo = new THREE.CapsuleGeometry(0.09, 0.18, 4, 5);
    thoraxGeo.rotateX(Math.PI / 2);
    const thorax = new THREE.Mesh(thoraxGeo, darkMat);
    thorax.position.set(0, 0.16, 0.1);
    group.add(thorax);

    // Striped Abdomen (Yellow & Black Cone)
    const abGeo = new THREE.ConeGeometry(0.12, 0.45, 6);
    abGeo.rotateX(-Math.PI / 2);
    const ab = new THREE.Mesh(abGeo, yellowMat);
    ab.position.set(0, 0.12, -0.22);
    group.add(ab);

    // Wings
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const wingGeo = new THREE.BoxGeometry(0.35, 0.01, 0.12);
    const wingL = new THREE.Mesh(wingGeo, wingMat);
    wingL.position.set(-0.2, 0.22, 0.12);

    const wingR = new THREE.Mesh(wingGeo, wingMat);
    wingR.position.set(0.2, 0.22, 0.12);

    group.add(wingL, wingR);

    let flapTimer = 0;

    return {
      group,
      update(delta: number) {
        flapTimer += delta * 60;
        const angle = Math.sin(flapTimer) * 0.45;
        wingL.rotation.z = angle;
        wingR.rotation.z = -angle;
      }
    };
  }

  // 11. Hercules Beetle Model (ヘラクレスオオカブト)
  private static createHercules(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const yellowWingMat = new THREE.MeshLambertMaterial({ color: 0xeccc68, flatShading: true });
    const blackBodyMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });

    // Abdomen & Wings (Yellowish Olive)
    const wingGeo = new THREE.CapsuleGeometry(0.18, 0.45, 5, 8);
    wingGeo.rotateX(Math.PI / 2);
    const wings = new THREE.Mesh(wingGeo, yellowWingMat);
    wings.position.set(0, 0.16, -0.1);
    group.add(wings);

    // Thorax (Black)
    const thoraxGeo = new THREE.CapsuleGeometry(0.16, 0.22, 5, 6);
    thoraxGeo.rotateX(Math.PI / 2);
    const thorax = new THREE.Mesh(thoraxGeo, blackBodyMat);
    thorax.position.set(0, 0.17, 0.22);
    group.add(thorax);

    // Head (Black)
    const headGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const head = new THREE.Mesh(headGeo, blackBodyMat);
    head.position.set(0, 0.15, 0.4);
    group.add(head);

    // Huge Upper Thoracic Horn (前方に伸びる長大な胸角)
    const upperHornGeo = new THREE.ConeGeometry(0.045, 0.7, 5);
    upperHornGeo.rotateX(Math.PI / 2 + 0.15);
    const upperHorn = new THREE.Mesh(upperHornGeo, blackBodyMat);
    upperHorn.position.set(0, 0.28, 0.65);
    group.add(upperHorn);

    // Lower Head Horn (下側の頭角、上向きにカーブ)
    const lowerHornGeo = new THREE.ConeGeometry(0.04, 0.45, 5);
    lowerHornGeo.rotateX(Math.PI / 2 - 0.2);
    const lowerHorn = new THREE.Mesh(lowerHornGeo, blackBodyMat);
    lowerHorn.position.set(0, 0.12, 0.58);
    group.add(lowerHorn);

    // 6 Sturdy Legs
    const legMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const legGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35);
    for (let i = -1; i <= 1; i += 2) {
      for (let j = 0; j < 3; j++) {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(i * 0.2, 0.08, 0.35 - j * 0.28);
        leg.rotation.z = i * 0.75;
        group.add(leg);
      }
    }

    let breatheTimer = Math.random() * Math.PI;

    return {
      group,
      update(delta: number, _state: string, isMoving: boolean) {
        breatheTimer += delta * (isMoving ? 10 : 3);
        const bob = Math.sin(breatheTimer) * 0.02;
        group.position.y = bob;
        upperHorn.rotation.x = 0.08 + Math.sin(breatheTimer * 0.5) * 0.04;
      }
    };
  }

  // 12. Rainbow Stag Beetle Model (ニジイロクワガタ)
  private static createRainbowStag(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Metallic iridescent materials
    const rainbowMat = new THREE.MeshStandardMaterial({
      color: 0x00d2d3,
      emissive: 0x10ac84,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.85,
      flatShading: true
    });
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff9f43,
      emissive: 0xee5253,
      emissiveIntensity: 0.2,
      roughness: 0.15,
      metalness: 0.85,
      flatShading: true
    });

    // Body & Elytra
    const bodyGeo = new THREE.CapsuleGeometry(0.14, 0.36, 5, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, rainbowMat);
    body.position.set(0, 0.14, -0.05);
    group.add(body);

    const thoraxGeo = new THREE.BoxGeometry(0.24, 0.15, 0.18);
    const thorax = new THREE.Mesh(thoraxGeo, orangeMat);
    thorax.position.set(0, 0.14, 0.2);
    group.add(thorax);

    const headGeo = new THREE.BoxGeometry(0.18, 0.12, 0.14);
    const head = new THREE.Mesh(headGeo, rainbowMat);
    head.position.set(0, 0.13, 0.34);
    group.add(head);

    // Curved upward mandibles (大アゴ)
    const mandibleGeo = new THREE.ConeGeometry(0.035, 0.32, 5);
    mandibleGeo.rotateX(Math.PI / 2 + 0.35);

    const leftMandible = new THREE.Mesh(mandibleGeo, orangeMat);
    leftMandible.position.set(-0.07, 0.15, 0.5);
    leftMandible.rotation.z = -0.2;

    const rightMandible = new THREE.Mesh(mandibleGeo, orangeMat);
    rightMandible.position.set(0.07, 0.15, 0.5);
    rightMandible.rotation.z = 0.2;

    group.add(leftMandible, rightMandible);

    let sparkleTimer = 0;

    return {
      group,
      update(delta: number) {
        sparkleTimer += delta * 4;
        // Subtle color shifting shimmer
        const hue = (Math.sin(sparkleTimer * 0.5) * 0.5 + 0.5) * 0.3 + 0.45;
        rainbowMat.color.setHSL(hue, 0.85, 0.5);
      }
    };
  }

  // 13. Paper Kite Butterfly Model (オオゴマダラ)
  private static createPaperKite(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1e272e, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.07, 0.42, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Large Wings (White with black patterned borders)
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xf5f6fa,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.96
    });

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.quadraticCurveTo(0.55, 0.65, 0.85, 0.25);
    wingShape.quadraticCurveTo(0.65, -0.35, 0, 0);
    const wingGeo = new THREE.ShapeGeometry(wingShape);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.05, 0.06, 0);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;
    leftWingPivot.add(leftWing);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.05, 0.06, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.rotation.x = Math.PI / 2;
    rightWingPivot.add(rightWing);

    group.add(leftWingPivot, rightWingPivot);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        // Slow, elegant soaring wing flaps
        const flapSpeed = state === 'flee' ? 18 : 8;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.85;

        leftWingPivot.rotation.z = -flapAngle;
        rightWingPivot.rotation.z = flapAngle;
      }
    };
  }

  // 14. Luna Moth Model (オオミズアオ)
  private static createLunaMoth(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // White fluffy body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.09, 0.45, 5, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Pale Jade / Mint wings with long tails
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0x7bed9f,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.92
    });

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.quadraticCurveTo(0.5, 0.5, 0.8, 0.15);
    wingShape.quadraticCurveTo(0.7, -0.2, 0.35, -0.3);
    wingShape.quadraticCurveTo(0.2, -0.7, 0.15, -0.85); // Long tail
    wingShape.quadraticCurveTo(0.1, -0.4, 0, 0);
    const wingGeo = new THREE.ShapeGeometry(wingShape);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.06, 0.06, 0);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;
    leftWingPivot.add(leftWing);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.06, 0.06, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.rotation.x = Math.PI / 2;
    rightWingPivot.add(rightWing);

    group.add(leftWingPivot, rightWingPivot);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        const flapSpeed = state === 'flee' ? 22 : 10;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.7;

        leftWingPivot.rotation.z = -flapAngle;
        rightWingPivot.rotation.z = flapAngle;
      }
    };
  }

  // 15. Platinum Beetle Model (プラチナコガネ)
  private static createPlatinumBeetle(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Mirror-like polished platinum material
    const platinumMat = new THREE.MeshStandardMaterial({
      color: 0xf1f2f6,
      emissive: 0x747d8c,
      emissiveIntensity: 0.15,
      roughness: 0.08,
      metalness: 0.96,
      flatShading: true
    });

    // Elytra (Smooth rounded wing covers)
    const elytraGeo = new THREE.CapsuleGeometry(0.13, 0.28, 5, 8);
    elytraGeo.rotateX(Math.PI / 2);
    const elytra = new THREE.Mesh(elytraGeo, platinumMat);
    elytra.position.set(0, 0.11, -0.04);
    group.add(elytra);

    // Pronotum (Thorax)
    const thoraxGeo = new THREE.BoxGeometry(0.24, 0.12, 0.16);
    const thorax = new THREE.Mesh(thoraxGeo, platinumMat);
    thorax.position.set(0, 0.12, 0.14);
    group.add(thorax);

    // Head
    const headGeo = new THREE.BoxGeometry(0.16, 0.09, 0.12);
    const head = new THREE.Mesh(headGeo, platinumMat);
    head.position.set(0, 0.1, 0.25);
    group.add(head);

    // Legs
    const legMat = new THREE.MeshStandardMaterial({ color: 0xa4b0be, metalness: 0.8, roughness: 0.2 });
    const legGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.25);
    for (let i = -1; i <= 1; i += 2) {
      for (let j = 0; j < 3; j++) {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(i * 0.16, 0.06, 0.2 - j * 0.2);
        leg.rotation.z = i * 0.7;
        group.add(leg);
      }
    }

    let shimmerTimer = 0;

    return {
      group,
      update(delta: number) {
        shimmerTimer += delta * 3;
        // Subtle gleam / breathing pulse
        platinumMat.emissiveIntensity = 0.12 + Math.sin(shimmerTimer) * 0.08;
      }
    };
  }

  // 16. Emperor Cicada Model (テイオウゼミ)
  private static createEmperorCicada(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Sturdy huge body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x2f3542, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.18, 0.55, 5, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.16, -0.05);
    group.add(body);

    // Wide Thorax & Big Red Eyes
    const thoraxGeo = new THREE.BoxGeometry(0.34, 0.22, 0.25);
    const thorax = new THREE.Mesh(thoraxGeo, bodyMat);
    thorax.position.set(0, 0.18, 0.2);
    group.add(thorax);

    const eyeMat = new THREE.MeshLambertMaterial({ color: 0xff4757 });
    const eyeGeo = new THREE.SphereGeometry(0.06, 5, 5);
    for (let i = -1; i <= 1; i += 2) {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(i * 0.18, 0.22, 0.26);
      group.add(eye);
    }

    // Huge Transparent Wings
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xced6e0,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.14, 0.2, 0.1);
    const wingGeo = new THREE.PlaneGeometry(0.35, 0.85);
    wingGeo.rotateX(Math.PI / 2);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.set(-0.1, 0, -0.3);
    leftWingPivot.add(leftWing);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.14, 0.2, 0.1);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.set(0.1, 0, -0.3);
    rightWingPivot.add(rightWing);

    group.add(leftWingPivot, rightWingPivot);

    let chirpTimer = 0;

    return {
      group,
      update(delta: number) {
        chirpTimer += delta * 15;
        // Buzzing wing vibration
        const buzz = Math.sin(chirpTimer) * 0.08;
        leftWingPivot.rotation.z = -0.15 + buzz;
        rightWingPivot.rotation.z = 0.15 - buzz;
        body.position.y = 0.16 + Math.sin(chirpTimer * 0.5) * 0.015;
      }
    };
  }

  // 17. Fungus Gnat Model (ヒカリキノコバエ)
  private static createFungusGnat(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Glowing slender abdomen & body
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0x70a1ff,
      emissive: 0x00d2d3,
      emissiveIntensity: 0.85,
      roughness: 0.3,
      flatShading: true
    });

    const bodyGeo = new THREE.CapsuleGeometry(0.05, 0.22, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, glowMat);
    group.add(body);

    // Delicate translucent wings
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xe0f7fa,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.04, 0.04, 0);
    const wingGeo = new THREE.PlaneGeometry(0.14, 0.32);
    wingGeo.rotateX(Math.PI / 2);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.set(-0.06, 0, 0);
    leftWingPivot.add(leftWing);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.04, 0.04, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.set(0.06, 0, 0);
    rightWingPivot.add(rightWing);

    group.add(leftWingPivot, rightWingPivot);

    let gnatTimer = Math.random() * 10;

    return {
      group,
      update(delta: number) {
        gnatTimer += delta;
        // Fast fluttering
        const flutter = Math.sin(gnatTimer * 45) * 0.6;
        leftWingPivot.rotation.z = -flutter;
        rightWingPivot.rotation.z = flutter;

        // Ethereal bioluminescent pulse
        const pulse = 0.5 + Math.sin(gnatTimer * 3.5) * 0.45;
        glowMat.emissiveIntensity = pulse;
      }
    };
  }

  // 18. Atlas Moth Model (ヨナグニサン - 世界最大級の伝説の巨大蛾)
  private static createAtlasMoth(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Heavy furry rust-red abdomen & thorax
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x8b2500, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.18, 0.7, 5, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    const thoraxMat = new THREE.MeshLambertMaterial({ color: 0xd98032, flatShading: true });
    const thorax = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.26, 0.35), thoraxMat);
    thorax.position.set(0, 0.12, 0.2);
    group.add(thorax);

    // Feathery orange antennae
    const antMat = new THREE.MeshBasicMaterial({ color: 0xf5cd79 });
    for (let i of [-1, 1]) {
      const ant = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.35), antMat);
      ant.position.set(i * 0.12, 0.26, 0.38);
      ant.rotation.set(-0.3, i * 0.5, i * 0.2);
      group.add(ant);
    }

    // Gigantic Broad Wings with snake-head tips and triangular white windows
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xb33927,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.96
    });

    const windowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });

    // Custom shape with dramatic curved hook at top corner (snake head)
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.quadraticCurveTo(0.6, 0.9, 1.4, 0.85); // Forewing outer edge
    wingShape.quadraticCurveTo(1.6, 0.7, 1.5, 0.5);  // Snake-like hook tip
    wingShape.quadraticCurveTo(1.1, 0.1, 0.8, -0.4); // Outer margin
    wingShape.quadraticCurveTo(0.5, -0.8, 0.2, -0.6); // Hindwing lower lobe
    wingShape.quadraticCurveTo(0.05, -0.3, 0, 0);

    const wingGeo = new THREE.ShapeGeometry(wingShape);

    // Triangular translucent window geometry
    const winShape = new THREE.Shape();
    winShape.moveTo(0.45, 0.25);
    winShape.lineTo(0.75, 0.32);
    winShape.lineTo(0.62, 0.08);
    winShape.closePath();
    const winGeo = new THREE.ShapeGeometry(winShape);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.12, 0.12, 0.05);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;
    const leftWin = new THREE.Mesh(winGeo, windowMat);
    leftWin.rotation.x = Math.PI / 2;
    leftWin.rotation.y = Math.PI;
    leftWin.position.y = 0.005;
    leftWingPivot.add(leftWing, leftWin);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.12, 0.12, 0.05);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.rotation.x = Math.PI / 2;
    const rightWin = new THREE.Mesh(winGeo, windowMat);
    rightWin.rotation.x = Math.PI / 2;
    rightWin.position.y = 0.005;
    rightWingPivot.add(rightWing, rightWin);

    group.add(leftWingPivot, rightWingPivot);

    // Group scale for majesty (world's largest moth)
    group.scale.set(1.4, 1.4, 1.4);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        // Slow, grand, majestic flapping
        const flapSpeed = state === 'flee' ? 14 : 6;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.55;

        leftWingPivot.rotation.z = -flapAngle;
        rightWingPivot.rotation.z = flapAngle;
        body.position.y = Math.sin(flapTimer) * 0.03;
      }
    };
  }

  // 19. Giant Water Bug Model (タガメ - 水中の覇王)
  private static createGiantWaterBug(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Flat broad dark olive-brown body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x3d3d3d, flatShading: true });
    const bodyGeo = new THREE.BoxGeometry(0.38, 0.1, 0.72);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.1, 0);
    group.add(body);

    // Triangular head with big predatory eyes
    const headMat = new THREE.MeshLambertMaterial({ color: 0x2b2b2b, flatShading: true });
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.22, 4), headMat);
    head.rotation.x = -Math.PI / 2;
    head.rotation.y = Math.PI / 4;
    head.position.set(0, 0.1, 0.44);
    group.add(head);

    const eyeMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    for (let i of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 5, 5), eyeMat);
      eye.position.set(i * 0.12, 0.13, 0.46);
      group.add(eye);
    }

    // Powerful Raptor-like front raptorial legs (folded grasping claws)
    const clawMat = new THREE.MeshLambertMaterial({ color: 0x4f4f4f, flatShading: true });
    const clawGroupL = new THREE.Group();
    const clawGroupR = new THREE.Group();

    for (let [cg, sign] of [[clawGroupL, -1], [clawGroupR, 1]] as [THREE.Group, number][]) {
      cg.position.set(sign * 0.16, 0.1, 0.38);

      // Thigh
      const femur = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.22), clawMat);
      femur.position.set(sign * 0.08, 0, 0.08);
      femur.rotation.y = sign * 0.45;
      cg.add(femur);

      // Hook blade (sickle)
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.2), clawMat);
      blade.position.set(sign * 0.15, 0, 0.18);
      blade.rotation.y = -sign * 0.7;
      cg.add(blade);

      group.add(cg);
    }

    // Flattened swimming middle and hind legs
    const legMat = new THREE.MeshLambertMaterial({ color: 0x2f3542 });
    for (let sign of [-1, 1]) {
      // Middle leg
      const midLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.06), legMat);
      midLeg.position.set(sign * 0.25, 0.06, 0.05);
      midLeg.rotation.z = -sign * 0.25;
      group.add(midLeg);

      // Back swimming paddle leg
      const hindLeg = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.08), legMat);
      hindLeg.position.set(sign * 0.28, 0.06, -0.22);
      hindLeg.rotation.set(0, sign * 0.35, -sign * 0.2);
      group.add(hindLeg);
    }

    // Breathing siphon at rear tip
    const siphon = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16), legMat);
    siphon.rotation.x = Math.PI / 2;
    siphon.position.set(0, 0.09, -0.42);
    group.add(siphon);

    let crawlTimer = 0;

    return {
      group,
      update(delta: number, _state: string, isMoving: boolean) {
        if (isMoving) {
          crawlTimer += delta * 12;
          clawGroupL.rotation.y = Math.sin(crawlTimer) * 0.25;
          clawGroupR.rotation.y = -Math.sin(crawlTimer) * 0.25;
          body.position.y = 0.1 + Math.abs(Math.sin(crawlTimer)) * 0.02;
        } else {
          // Subtle predatory breathing sway
          clawGroupL.rotation.y = 0.1 + Math.sin(Date.now() * 0.003) * 0.08;
          clawGroupR.rotation.y = -0.1 - Math.sin(Date.now() * 0.003) * 0.08;
        }
      }
    };
  }

  // 20. Luehdorfia Butterfly Model (ギフチョウ - 春の女神)
  private static createLuehdorfia(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Slender dark body with gold accents
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1e272e, flatShading: true });
    const bodyGeo = new THREE.CapsuleGeometry(0.06, 0.38, 4, 6);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Striking yellow & black zebra/tiger striped wings with scalloped tails and red/blue jewel spots
    const wingMat = new THREE.MeshLambertMaterial({
      color: 0xf1c40f,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.98
    });

    const spotMatRed = new THREE.MeshBasicMaterial({ color: 0xe74c3c, side: THREE.DoubleSide });
    const spotMatBlue = new THREE.MeshBasicMaterial({ color: 0x3498db, side: THREE.DoubleSide });

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.quadraticCurveTo(0.45, 0.65, 0.75, 0.35); // Forewing apex
    wingShape.quadraticCurveTo(0.65, 0.0, 0.5, -0.2);
    wingShape.lineTo(0.42, -0.42); // Scalloped tail
    wingShape.lineTo(0.35, -0.36);
    wingShape.lineTo(0.28, -0.46); // Second tail
    wingShape.quadraticCurveTo(0.12, -0.3, 0, 0);

    const wingGeo = new THREE.ShapeGeometry(wingShape);

    const leftWingPivot = new THREE.Group();
    leftWingPivot.position.set(-0.05, 0.05, 0);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;

    // Red and blue spots near scalloped tail
    const spotRedL = new THREE.Mesh(new THREE.CircleGeometry(0.04, 6), spotMatRed);
    spotRedL.rotation.x = Math.PI / 2;
    spotRedL.position.set(0.32, 0.005, -0.34);
    const spotBlueL = new THREE.Mesh(new THREE.CircleGeometry(0.03, 6), spotMatBlue);
    spotBlueL.rotation.x = Math.PI / 2;
    spotBlueL.position.set(0.24, 0.005, -0.36);

    leftWingPivot.add(leftWing, spotRedL, spotBlueL);

    const rightWingPivot = new THREE.Group();
    rightWingPivot.position.set(0.05, 0.05, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.rotation.x = Math.PI / 2;

    const spotRedR = new THREE.Mesh(new THREE.CircleGeometry(0.04, 6), spotMatRed);
    spotRedR.rotation.x = Math.PI / 2;
    spotRedR.position.set(0.32, 0.005, -0.34);
    const spotBlueR = new THREE.Mesh(new THREE.CircleGeometry(0.03, 6), spotMatBlue);
    spotBlueR.rotation.x = Math.PI / 2;
    spotBlueR.position.set(0.24, 0.005, -0.36);

    rightWingPivot.add(rightWing, spotRedR, spotBlueR);

    group.add(leftWingPivot, rightWingPivot);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        // Lively, buoyant fluttering
        const flapSpeed = state === 'flee' ? 24 : 12;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.75;

        leftWingPivot.rotation.z = -flapAngle;
        rightWingPivot.rotation.z = flapAngle;
      }
    };
  }

  // 23. Meganeura Model (Ancient Giant Dragonfly, 70cm Wingspan)
  private static createMeganeura(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Scale up for gigantic ancient dragonfly impression
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x00d2d3,
      roughness: 0.35,
      metalness: 0.6,
      flatShading: true
    });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x222f3e, flatShading: true });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x10ac84,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x053326
    });
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xc8f7f5,
      transparent: true,
      opacity: 0.72,
      roughness: 0.2,
      metalness: 0.4,
      side: THREE.DoubleSide
    });

    // Head with massive compound eyes
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), darkMat);
    head.position.set(0, 0, 0.45);
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), eyeMat);
    eyeL.position.set(-0.11, 0.06, 0.05);
    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), eyeMat);
    eyeR.position.set(0.11, 0.06, 0.05);
    head.add(eyeL, eyeR);

    // Thorax (broad muscular flight engine)
    const thorax = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.14, 0.45, 8), bodyMat);
    thorax.rotation.x = Math.PI / 2;
    thorax.position.set(0, 0, 0.15);

    // Abdomen (long segmented ancient tail)
    const abdomen = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.04, 1.2, 8), bodyMat);
    abdomen.rotation.x = Math.PI / 2;
    abdomen.position.set(0, -0.02, -0.65);

    group.add(head, thorax, abdomen);

    // Spiny predatory legs
    for (let side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.35, 4), darkMat);
        leg.position.set(side * 0.16, -0.15, 0.25 - i * 0.14);
        leg.rotation.z = side * (Math.PI / 3);
        leg.rotation.x = (i - 1) * 0.2;
        group.add(leg);
      }
    }

    // 4 Long Ancient Wings (Two Forewings, Two Hindwings)
    const foreWingGeo = new THREE.PlaneGeometry(0.85, 0.22);
    foreWingGeo.translate(0.42, 0, 0);

    const hindWingGeo = new THREE.PlaneGeometry(0.78, 0.24);
    hindWingGeo.translate(0.39, 0, 0);

    // Left Forewing
    const leftForePivot = new THREE.Group();
    leftForePivot.position.set(-0.12, 0.12, 0.26);
    const leftFore = new THREE.Mesh(foreWingGeo, wingMat);
    leftFore.rotation.y = Math.PI;
    leftForePivot.add(leftFore);

    // Right Forewing
    const rightForePivot = new THREE.Group();
    rightForePivot.position.set(0.12, 0.12, 0.26);
    const rightFore = new THREE.Mesh(foreWingGeo, wingMat);
    rightForePivot.add(rightFore);

    // Left Hindwing
    const leftHindPivot = new THREE.Group();
    leftHindPivot.position.set(-0.12, 0.11, 0.08);
    const leftHind = new THREE.Mesh(hindWingGeo, wingMat);
    leftHind.rotation.y = Math.PI;
    leftHindPivot.add(leftHind);

    // Right Hindwing
    const rightHindPivot = new THREE.Group();
    rightHindPivot.position.set(0.12, 0.11, 0.08);
    const rightHind = new THREE.Mesh(hindWingGeo, wingMat);
    rightHindPivot.add(rightHind);

    group.add(leftForePivot, rightForePivot, leftHindPivot, rightHindPivot);

    let flightTimer = Math.random() * 10;

    return {
      group,
      update(delta: number, state: string) {
        const speed = state === 'flee' ? 45 : 30;
        flightTimer += delta * speed;

        // Counter-phase flapping for realistic high-speed ancient flight
        const foreAngle = Math.sin(flightTimer) * 0.45;
        const hindAngle = Math.sin(flightTimer + 1.2) * 0.45;

        leftForePivot.rotation.z = -foreAngle;
        rightForePivot.rotation.z = foreAngle;
        leftHindPivot.rotation.z = -hindAngle;
        rightHindPivot.rotation.z = hindAngle;
      }
    };
  }

  // 24. Caucasus Beetle Model (Three-Horned Giant Asian Titan)
  private static createCaucasusBeetle(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    const carapaceMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c1e,
      roughness: 0.18,
      metalness: 0.85,
      flatShading: true
    });
    const jointMat = new THREE.MeshLambertMaterial({ color: 0x0f1112, flatShading: true });

    // Abdomen & Elytra (Massive broad body)
    const elytra = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 8), carapaceMat);
    elytra.scale.set(1.0, 0.75, 1.25);
    elytra.position.set(0, 0.18, -0.2);

    // Thorax
    const thorax = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.32, 8), carapaceMat);
    thorax.rotation.x = Math.PI / 2;
    thorax.position.set(0, 0.22, 0.18);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), jointMat);
    head.position.set(0, 0.14, 0.42);

    // 3 Magnificent Horns!
    // 1. Central Head Horn (Curves upwards from head)
    const headHorn = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, 0.55, 6), carapaceMat);
    headHorn.position.set(0, 0.32, 0.52);
    headHorn.rotation.x = -Math.PI / 4;

    // 2 & 3. Left and Right Thoracic Horns (Long sweeping curved pikes)
    const hornL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.05, 0.62, 6), carapaceMat);
    hornL.position.set(-0.16, 0.36, 0.36);
    hornL.rotation.set(-Math.PI / 5, -0.15, -0.2);

    const hornR = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.05, 0.62, 6), carapaceMat);
    hornR.position.set(0.16, 0.36, 0.36);
    hornR.rotation.set(-Math.PI / 5, 0.15, 0.2);

    group.add(elytra, thorax, head, headHorn, hornL, hornR);

    // 6 Powerful Hooked Legs
    const legs: THREE.Mesh[] = [];
    for (let side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.015, 0.42, 4), jointMat);
        leg.position.set(side * 0.28, 0.05, 0.25 - i * 0.25);
        leg.rotation.z = side * (Math.PI / 3);
        group.add(leg);
        legs.push(leg);
      }
    }

    let walkTimer = Math.random() * 10;

    return {
      group,
      update(delta: number, state: string, isMoving: boolean) {
        if (isMoving || state === 'flee') {
          walkTimer += delta * (state === 'flee' ? 18 : 10);
          legs.forEach((leg, idx) => {
            const phase = idx % 2 === 0 ? 1 : -1;
            leg.rotation.x = Math.sin(walkTimer + idx) * 0.3 * phase;
          });
        }
      }
    };
  }

  // 25. Morpho Butterfly Model (Miraculous Electric Metallic Blue)
  private static createMorphoButterfly(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Body
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1e272e });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.025, 0.42, 6), bodyMat);
    body.rotation.x = Math.PI / 2;
    group.add(body);

    // Magnificent Metallic Blue Wings with black border
    const wingMatBlue = new THREE.MeshStandardMaterial({
      color: 0x0984e3,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x0652dd,
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide
    });
    const wingMatBorder = new THREE.MeshLambertMaterial({
      color: 0x111111,
      side: THREE.DoubleSide
    });

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.15, 0.35, 0.45, 0.55, 0.72, 0.48);
    shape.bezierCurveTo(0.85, 0.3, 0.88, 0.05, 0.78, -0.22);
    shape.bezierCurveTo(0.65, -0.42, 0.35, -0.48, 0.12, -0.32);
    shape.lineTo(0, 0);

    const wingGeo = new THREE.ShapeGeometry(shape);

    const leftPivot = new THREE.Group();
    leftPivot.position.set(-0.03, 0.04, 0);
    const leftWing = new THREE.Mesh(wingGeo, wingMatBlue);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.y = Math.PI;

    // Outer edge border
    const borderL = new THREE.Mesh(wingGeo, wingMatBorder);
    borderL.scale.set(1.05, 1.05, 1);
    borderL.position.set(0, -0.002, 0);
    borderL.rotation.x = Math.PI / 2;
    borderL.rotation.y = Math.PI;
    leftPivot.add(borderL, leftWing);

    const rightPivot = new THREE.Group();
    rightPivot.position.set(0.03, 0.04, 0);
    const rightWing = new THREE.Mesh(wingGeo, wingMatBlue);
    rightWing.rotation.x = Math.PI / 2;

    const borderR = new THREE.Mesh(wingGeo, wingMatBorder);
    borderR.scale.set(1.05, 1.05, 1);
    borderR.position.set(0, -0.002, 0);
    borderR.rotation.x = Math.PI / 2;
    rightPivot.add(borderR, rightWing);

    group.add(leftPivot, rightPivot);

    let flapTimer = Math.random() * Math.PI * 2;

    return {
      group,
      update(delta: number, state: string) {
        const flapSpeed = state === 'flee' ? 20 : 9;
        flapTimer += delta * flapSpeed;
        const flapAngle = Math.sin(flapTimer) * 0.85;

        leftPivot.rotation.z = -flapAngle;
        rightPivot.rotation.z = flapAngle;
      }
    };
  }

  // 26. Golden Stag Beetle Model (Glorious Metallic Gold)
  private static createGoldenStag(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();

    // Dazzling high-polish gold material
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf9ca24,
      metalness: 0.92,
      roughness: 0.18,
      flatShading: true
    });
    const jointMat = new THREE.MeshStandardMaterial({
      color: 0xb77b10,
      metalness: 0.75,
      roughness: 0.35,
      flatShading: true
    });

    // Body & Elytra
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 8), goldMat);
    body.scale.set(0.9, 0.65, 1.25);
    body.position.set(0, 0.15, -0.15);

    // Thorax
    const thorax = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.28, 0.26, 8), goldMat);
    thorax.rotation.x = Math.PI / 2;
    thorax.position.set(0, 0.16, 0.16);

    // Head
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.18, 8), goldMat);
    head.rotation.x = Math.PI / 2;
    head.position.set(0, 0.14, 0.34);

    // Characteristic Golden Down-Curved Mandibles
    const jawGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.38, 6);
    jawGeo.translate(0, 0.19, 0);

    const leftJaw = new THREE.Mesh(jawGeo, goldMat);
    leftJaw.position.set(-0.08, 0.12, 0.42);
    leftJaw.rotation.set(Math.PI / 2 - 0.1, 0.25, -0.3);

    const rightJaw = new THREE.Mesh(jawGeo, goldMat);
    rightJaw.position.set(0.08, 0.12, 0.42);
    rightJaw.rotation.set(Math.PI / 2 - 0.1, -0.25, 0.3);

    group.add(body, thorax, head, leftJaw, rightJaw);

    // Golden Legs
    const legs: THREE.Mesh[] = [];
    for (let side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.012, 0.35, 4), jointMat);
        leg.position.set(side * 0.24, 0.04, 0.2 - i * 0.2);
        leg.rotation.z = side * (Math.PI / 3);
        group.add(leg);
        legs.push(leg);
      }
    }

    let walkTimer = Math.random() * 10;

    return {
      group,
      update(delta: number, state: string, isMoving: boolean) {
        if (isMoving || state === 'flee') {
          walkTimer += delta * (state === 'flee' ? 16 : 8);
          legs.forEach((leg, idx) => {
            const phase = idx % 2 === 0 ? 1 : -1;
            leg.rotation.x = Math.sin(walkTimer + idx) * 0.25 * phase;
          });
        }
      }
    };
  }

  // 27. Walking Stick Model (Twig Mimicry)
  private static createWalkingStick(_data: InsectData): AnimatedInsectModel {
    const group = new THREE.Group();
    const stickMat = new THREE.MeshStandardMaterial({
      color: 0x795548,
      roughness: 0.85,
      metalness: 0.1,
      flatShading: true
    });
    const jointMat = new THREE.MeshLambertMaterial({ color: 0x4e342e });

    // Long slender twig-like body
    const bodyGeo = new THREE.CylinderGeometry(0.02, 0.015, 0.85, 5);
    const body = new THREE.Mesh(bodyGeo, stickMat);
    body.rotation.x = Math.PI / 2;
    group.add(body);

    // Head and long antennae
    const headGeo = new THREE.SphereGeometry(0.028, 5, 5);
    const head = new THREE.Mesh(headGeo, jointMat);
    head.position.set(0, 0, 0.44);
    group.add(head);

    const antGeo = new THREE.CylinderGeometry(0.003, 0.002, 0.35, 3);
    const antL = new THREE.Mesh(antGeo, stickMat);
    antL.position.set(-0.02, 0.02, 0.6);
    antL.rotation.x = Math.PI / 2 + 0.1;
    antL.rotation.z = 0.15;
    const antR = new THREE.Mesh(antGeo, stickMat);
    antR.position.set(0.02, 0.02, 0.6);
    antR.rotation.x = Math.PI / 2 + 0.1;
    antR.rotation.z = -0.15;
    group.add(antL, antR);

    // 6 long slender legs
    const legs: THREE.Mesh[] = [];
    const legGeo = new THREE.CylinderGeometry(0.005, 0.003, 0.45, 3);
    for (let i = 0; i < 3; i++) {
      for (const side of [-1, 1]) {
        const leg = new THREE.Mesh(legGeo, stickMat);
        leg.position.set(side * 0.14, -0.02, 0.3 - i * 0.28);
        leg.rotation.z = side * (Math.PI / 3.5);
        group.add(leg);
        legs.push(leg);
      }
    }

    let swayTimer = Math.random() * 10;

    return {
      group,
      update(delta: number, state: string, isMoving: boolean) {
        if (isMoving || state === 'flee') {
          swayTimer += delta * (state === 'flee' ? 12 : 5);
          legs.forEach((leg, idx) => {
            const phase = idx % 2 === 0 ? 1 : -1;
            leg.rotation.x = Math.sin(swayTimer + idx) * 0.22 * phase;
          });
          // Gentle sway like a twig in the breeze
          group.rotation.z = Math.sin(swayTimer * 0.8) * 0.05;
        }
      }
    };
  }
}
