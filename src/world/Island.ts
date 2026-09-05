import * as THREE from 'three';

export class Island {
  public group: THREE.Group;
  public terrainMesh: THREE.Mesh;
  public oceanMesh: THREE.Mesh;
  public pondMesh: THREE.Mesh;
  
  // Island dimensions
  public readonly islandRadius: number = 85; // Approx 170~200m across

  constructor() {
    this.group = new THREE.Group();

    // 1. Terrain Mesh (Procedural Low-poly Grid)
    const segments = 120;
    const size = 220;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const posAttr = geometry.attributes.position;
    const colors: number[] = [];

    // Palette
    const sandColor = new THREE.Color(0xf5e6aa);
    const grassColor = new THREE.Color(0x76c043);
    const darkGrassColor = new THREE.Color(0x4a9438);
    const rockColor = new THREE.Color(0x8c7c6d);
    const mountainSnowColor = new THREE.Color(0xdce5db);

    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);

      // Compute procedural height
      const y = this.computeTerrainHeight(x, z);
      posAttr.setY(i, y);

      // Color based on height and zone
      const col = new THREE.Color();

      if (y < 0.6) {
        // Beach Sand
        col.copy(sandColor);
      } else if (y < 7.0) {
        // Low grass / plains
        const t = (y - 0.6) / 6.4;
        col.copy(grassColor).lerp(darkGrassColor, t * 0.4);
      } else if (y < 14.0) {
        // Hills / Mountain foot
        const t = (y - 7.0) / 7.0;
        col.copy(darkGrassColor).lerp(rockColor, t);
      } else {
        // Mountain peak
        const t = Math.min(1, (y - 14.0) / 6.0);
        col.copy(rockColor).lerp(mountainSnowColor, t);
      }

      // Slightly perturb color for low-poly painterly look
      const noise = Math.sin(x * 0.4) * Math.cos(z * 0.4) * 0.04;
      col.r = THREE.MathUtils.clamp(col.r + noise, 0, 1);
      col.g = THREE.MathUtils.clamp(col.g + noise, 0, 1);
      col.b = THREE.MathUtils.clamp(col.b + noise, 0, 1);

      colors.push(col.r, col.g, col.b);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    const terrainMaterial = new THREE.MeshLambertMaterial({
      vertexColors: true,
      flatShading: true,
    });

    this.terrainMesh = new THREE.Mesh(geometry, terrainMaterial);
    this.terrainMesh.receiveShadow = true;
    this.group.add(this.terrainMesh);

    // 2. Ocean Water
    const oceanGeo = new THREE.PlaneGeometry(600, 600);
    oceanGeo.rotateX(-Math.PI / 2);
    const oceanMat = new THREE.MeshLambertMaterial({
      color: 0x48cae4,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    this.oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    this.oceanMesh.position.y = 0.0;
    this.group.add(this.oceanMesh);

    // 3. Inland Pond Water
    const pondGeo = new THREE.CircleGeometry(11, 24);
    pondGeo.rotateX(-Math.PI / 2);
    const pondMat = new THREE.MeshLambertMaterial({
      color: 0x0096c7,
      transparent: true,
      opacity: 0.8,
    });
    this.pondMesh = new THREE.Mesh(pondGeo, pondMat);
    // Placed in the pond basin: x: -5, z: 15
    this.pondMesh.position.set(-5, 0.85, 15);
    this.group.add(this.pondMesh);
  }

  /**
   * Procedural terrain height formula.
   * Matches 5 areas:
   * - Center/West: Grassland
   * - North: Forest
   * - East: Mountain
   * - South-Center: Pond
   * - Outskirts: Shoreline & Beach
   */
  public computeTerrainHeight(x: number, z: number): number {
    const dist = Math.hypot(x, z);

    // Island falloff towards water
    let falloff = 1.0;
    if (dist > this.islandRadius * 0.6) {
      const t = (dist - this.islandRadius * 0.6) / (this.islandRadius * 0.4);
      falloff = Math.max(0, 1.0 - t * t);
    }
    if (dist >= this.islandRadius) {
      return -2.5; // Under ocean
    }

    // Base elevation
    let h = 2.0;

    // East Mountain peak (around x: 45, z: -10)
    const mtnDist = Math.hypot(x - 45, z + 10);
    if (mtnDist < 45) {
      const mtnFactor = Math.cos((mtnDist / 45) * (Math.PI / 2));
      h += Math.pow(mtnFactor, 1.6) * 18.0;
    }

    // Rolling gentle hills in North (Forest)
    h += Math.sin(x * 0.08) * Math.cos(z * 0.08) * 1.5;
    h += Math.sin(x * 0.15 + 1.2) * Math.sin(z * 0.12) * 0.8;

    // Pond depression around (x: -5, z: 15)
    const pondDist = Math.hypot(x - (-5), z - 15);
    if (pondDist < 14) {
      const pFactor = Math.cos((pondDist / 14) * (Math.PI / 2));
      h -= Math.pow(pFactor, 2.0) * 3.5;
    }

    // Apply island mask
    h *= falloff;

    // Coast threshold flattening
    if (h < 0.2) {
      h = Math.max(-2.5, h * 1.5 - 0.2);
    }

    return h;
  }

  /**
   * Get surface height at any coordinate for player & objects
   */
  public getHeightAt(x: number, z: number): number {
    return this.computeTerrainHeight(x, z);
  }
}
