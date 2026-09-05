import * as THREE from 'three';

export type WeatherType = 'sunny' | 'cloudy' | 'rain';

export class WeatherManager {
  public currentWeather: WeatherType = 'sunny';
  private timer: number = 0;
  private changeInterval: number = 240; // Weather can shift every ~4 real minutes

  private onWeatherChangeCallbacks: ((weather: WeatherType) => void)[] = [];

  // Rain particle system
  private scene: THREE.Scene;
  private rainParticles: THREE.Points | null = null;
  private rainCount: number = 1200;
  private rainGeometry: THREE.BufferGeometry | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initRain();
  }

  private initRain(): void {
    const positions = new Float32Array(this.rainCount * 3);
    for (let i = 0; i < this.rainCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }

    this.rainGeometry = new THREE.BufferGeometry();
    this.rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const rainMat = new THREE.PointsMaterial({
      color: 0xa4d8f0,
      size: 0.25,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
    });

    this.rainParticles = new THREE.Points(this.rainGeometry, rainMat);
    this.scene.add(this.rainParticles);
  }

  public update(delta: number, playerPos: THREE.Vector3): void {
    this.timer += delta;
    if (this.timer >= this.changeInterval) {
      this.timer = 0;
      this.rollWeather();
    }

    // Update Rain particles if raining
    if (this.rainParticles && this.rainGeometry) {
      const mat = this.rainParticles.material as THREE.PointsMaterial;
      const targetOpacity = this.currentWeather === 'rain' ? 0.75 : 0.0;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3.0);

      if (mat.opacity > 0.02) {
        // Move rain center with player
        this.rainParticles.position.x = playerPos.x;
        this.rainParticles.position.z = playerPos.z;

        const posAttr = this.rainGeometry.getAttribute('position') as THREE.BufferAttribute;
        const array = posAttr.array as Float32Array;

        for (let i = 0; i < this.rainCount; i++) {
          array[i * 3 + 1] -= delta * 24; // Fall down fast
          if (array[i * 3 + 1] < 0) {
            array[i * 3 + 1] = 25 + Math.random() * 5;
            array[i * 3 + 0] = (Math.random() - 0.5) * 60;
            array[i * 3 + 2] = (Math.random() - 0.5) * 60;
          }
        }
        posAttr.needsUpdate = true;
      }
    }
  }

  public onWeatherChange(callback: (weather: WeatherType) => void): void {
    this.onWeatherChangeCallbacks.push(callback);
  }

  public setWeather(weather: WeatherType): void {
    if (this.currentWeather !== weather) {
      this.currentWeather = weather;
      for (const cb of this.onWeatherChangeCallbacks) {
        cb(weather);
      }
    }
  }

  public toggleNextWeather(): void {
    const types: WeatherType[] = ['sunny', 'cloudy', 'rain'];
    const next = types[(types.indexOf(this.currentWeather) + 1) % types.length];
    this.setWeather(next);
  }

  private rollWeather(): void {
    const r = Math.random();
    let next: WeatherType = 'sunny';
    if (r < 0.65) {
      next = 'sunny';
    } else if (r < 0.85) {
      next = 'cloudy';
    } else {
      next = 'rain';
    }
    this.setWeather(next);
  }
}
