import * as THREE from 'three';
import { TimeManager } from '../time/TimeManager';
import { WeatherManager } from '../weather/WeatherManager';

export class SkyAndLighting {
  public scene: THREE.Scene;
  public dirLight: THREE.DirectionalLight;
  public hemiLight: THREE.HemisphereLight;
  private stars: THREE.Points | null = null;

  // Target lighting properties for smooth lerp transitions
  private targetSkyColor: THREE.Color = new THREE.Color(0x87ceeb);
  private targetGroundColor: THREE.Color = new THREE.Color(0x93c572);
  private targetDirColor: THREE.Color = new THREE.Color(0xfffae8);
  private targetDirIntensity: number = 1.4;
  private targetHemiIntensity: number = 0.95;
  private targetFogDensity: number = 0.0015;
  private targetStarsOpacity: number = 0.0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. Initial Scene background & Crisp Fog (gentle distant horizon)
    const initialSky = 0x87ceeb;
    this.scene.background = new THREE.Color(initialSky);
    this.scene.fog = new THREE.FogExp2(initialSky, 0.0015);

    // 2. Ambient / Hemisphere Light
    this.hemiLight = new THREE.HemisphereLight(initialSky, 0x93c572, 0.95);
    this.scene.add(this.hemiLight);

    // 3. Directional Sun / Moon Light
    this.dirLight = new THREE.DirectionalLight(0xfffae8, 1.4);
    this.dirLight.position.set(60, 100, 50);
    this.dirLight.castShadow = true;
    
    // Shadow settings
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 250;
    
    const d = 60;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.bias = -0.0005;

    this.scene.add(this.dirLight);

    // 4. Night Sky Stars
    this.initStars();
  }

  private initStars(): void {
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Hemisphere sky dome distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0) * 0.5; // upper hemisphere
      const r = 180 + Math.random() * 40;

      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) + 10;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });

    this.stars = new THREE.Points(geo, mat);
    this.scene.add(this.stars);
  }

  /**
   * Update atmospheric conditions based on Time & Weather
   */
  public updateAtmosphere(time: TimeManager, weather: WeatherManager): void {
    const period = time.getPeriod();
    const curWeather = weather.currentWeather;

    if (curWeather === 'rain') {
      // Rainy weather atmosphere (gentle overcast)
      this.targetSkyColor.setHex(0x687b8c);
      this.targetGroundColor.setHex(0x3d4e5f);
      this.targetDirColor.setHex(0xa0aec0);
      this.targetDirIntensity = 0.85;
      this.targetHemiIntensity = 0.75;
      this.targetFogDensity = 0.003;
      this.targetStarsOpacity = 0.0;
      return;
    }

    if (curWeather === 'cloudy') {
      // Soft cloudy day
      this.targetSkyColor.setHex(0x95a5a6);
      this.targetGroundColor.setHex(0x636e72);
      this.targetDirColor.setHex(0xecf0f1);
      this.targetDirIntensity = 1.1;
      this.targetHemiIntensity = 0.85;
      this.targetFogDensity = 0.002;
      this.targetStarsOpacity = 0.0;
      return;
    }

    // Sunny time-based palettes
    switch (period) {
      case 'morning':
        this.targetSkyColor.setHex(0xffc078); // Warm sunrise gold-peach
        this.targetGroundColor.setHex(0x93c572);
        this.targetDirColor.setHex(0xffecc7);
        this.targetDirIntensity = 1.3;
        this.targetHemiIntensity = 0.9;
        this.targetFogDensity = 0.0016;
        this.targetStarsOpacity = 0.0;
        break;

      case 'day':
        this.targetSkyColor.setHex(0x87ceeb); // Bright tropical blue
        this.targetGroundColor.setHex(0x93c572);
        this.targetDirColor.setHex(0xfffae8);
        this.targetDirIntensity = 1.4;
        this.targetHemiIntensity = 0.95;
        this.targetFogDensity = 0.0015;
        this.targetStarsOpacity = 0.0;
        break;

      case 'evening':
        this.targetSkyColor.setHex(0xe15f41); // Fiery sunset orange-magenta
        this.targetGroundColor.setHex(0x634b35);
        this.targetDirColor.setHex(0xf8a5c2);
        this.targetDirIntensity = 1.2;
        this.targetHemiIntensity = 0.85;
        this.targetFogDensity = 0.0016;
        this.targetStarsOpacity = 0.15;
        break;

      case 'night':
        // Crisp, moonlit magical night
        this.targetSkyColor.setHex(0x152642); // Clear deep blue
        this.targetGroundColor.setHex(0x22354c);
        this.targetDirColor.setHex(0xa4c4f5); // Bright moonlight
        this.targetDirIntensity = 1.05;
        this.targetHemiIntensity = 0.8;
        this.targetFogDensity = 0.0018;
        this.targetStarsOpacity = 0.95;
        break;
    }
  }

  public update(delta: number, playerPos: THREE.Vector3, time?: TimeManager, weather?: WeatherManager): void {
    if (time && weather) {
      this.updateAtmosphere(time, weather);
    }

    // Smooth transition for sky background & fog
    if (this.scene.background instanceof THREE.Color) {
      this.scene.background.lerp(this.targetSkyColor, delta * 1.5);
    }
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.lerp(this.targetSkyColor, delta * 1.5);
      this.scene.fog.density = THREE.MathUtils.lerp(this.scene.fog.density, this.targetFogDensity, delta * 1.5);
    }

    // Smooth transition for lights
    this.hemiLight.color.lerp(this.targetSkyColor, delta * 1.5);
    this.hemiLight.groundColor.lerp(this.targetGroundColor, delta * 1.5);
    this.hemiLight.intensity = THREE.MathUtils.lerp(this.hemiLight.intensity, this.targetHemiIntensity, delta * 1.5);

    this.dirLight.color.lerp(this.targetDirColor, delta * 1.5);
    this.dirLight.intensity = THREE.MathUtils.lerp(this.dirLight.intensity, this.targetDirIntensity, delta * 1.5);

    // Stars opacity transition
    if (this.stars) {
      const starMat = this.stars.material as THREE.PointsMaterial;
      starMat.opacity = THREE.MathUtils.lerp(starMat.opacity, this.targetStarsOpacity, delta * 1.5);
      this.stars.position.copy(playerPos);
    }

    // Keep directional light centered near player for crisp mobile shadows
    this.dirLight.position.set(playerPos.x + 60, 100, playerPos.z + 50);
    this.dirLight.target.position.copy(playerPos);
    this.dirLight.target.updateMatrixWorld();
  }
}
