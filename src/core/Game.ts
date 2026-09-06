import * as THREE from 'three';
import { SkyAndLighting } from '../world/Sky';
import { World } from '../world/World';
import { Player } from '../player/Player';
import { PlayerController } from '../player/PlayerController';
import { CameraController } from '../player/CameraController';
import { InputManager } from './Input';
import { TouchController } from '../ui/TouchController';
import { InsectManager } from '../insects/InsectManager';
import { CollectionManager } from '../collection/CollectionManager';
import { BookUI } from '../ui/BookUI';
import { TimeManager } from '../time/TimeManager';
import { WeatherManager } from '../weather/WeatherManager';
import { InventoryManager } from '../inventory/InventoryManager';
import { ShopManager } from '../shop/ShopManager';
import { ShopUI } from '../ui/ShopUI';
import { SaveManager } from '../save/SaveManager';
import { AudioManager } from '../audio/AudioManager';
import { HealthManager } from '../player/HealthManager';
import { WaspSwarm } from '../insects/WaspSwarm';
import { CatchEffectUI } from '../ui/CatchEffectUI';
import { MuseumManager } from '../building/MuseumManager';
import { MuseumBuilding } from '../building/MuseumBuilding';
import { MuseumUI } from '../ui/MuseumUI';
import { QuestManager } from '../quest/QuestManager';
import { QuestUI } from '../ui/QuestUI';
import { PhotoModeUI } from '../ui/PhotoModeUI';
import { SumoArena } from '../arena/SumoArena';
import { SumoUI } from '../ui/SumoUI';
import { MysticCave } from '../world/MysticCave';
import { CampSite } from '../camp/CampSite';
import { HoneyTrapManager } from '../trap/HoneyTrapManager';
import { TournamentManager } from '../tournament/TournamentManager';
import { TournamentUI } from '../ui/TournamentUI';
import { BreedingManager } from '../breeding/BreedingManager';
import { BreedingUI } from '../ui/BreedingUI';
import { TreehouseManager } from '../treehouse/TreehouseManager';
import { TreehouseUI } from '../ui/TreehouseUI';
import { AncientAltarManager } from '../altar/AncientAltarManager';

export class Game {
  public container: HTMLElement;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;

  public skyAndLighting: SkyAndLighting;
  public world: World;
  public player: Player;
  public playerController: PlayerController;
  public cameraController: CameraController;
  public input: InputManager;
  public touchController: TouchController;

  // Phase 4: Collection & Encyclopedia
  public collection: CollectionManager;
  public bookUI: BookUI;

  // Phase 5 & 6: Audio, Health, Time, Weather, Inventory, Shop & Wasps
  public audio: AudioManager;
  public healthManager: HealthManager;
  public timeManager: TimeManager;
  public weatherManager: WeatherManager;
  public inventoryManager: InventoryManager;
  public shopManager: ShopManager;
  public shopUI: ShopUI;
  public waspSwarm: WaspSwarm;

  // Phase 7: Museum, Quests & Photo Mode
  public museumManager: MuseumManager;
  public museumBuilding: MuseumBuilding;
  public museumUI: MuseumUI;
  public questManager: QuestManager;
  public questUI: QuestUI;
  public photoModeUI: PhotoModeUI;
  private doctorPosition: THREE.Vector3;

  // Phase 8: Sumo Arena & Mystic Cave Isle
  public sumoArena: SumoArena;
  public sumoUI: SumoUI;
  public mysticCave: MysticCave;
  private screenFader: HTMLElement;

  // Phase 9: Camp, Light Trap, Honey Trap & Tournament
  public campSite: CampSite;
  public honeyTrapManager: HoneyTrapManager;
  public tournamentManager: TournamentManager;
  public tournamentUI: TournamentUI;

  // Phase 10: Breeding, Treehouse Base & Ancient Altar
  public breedingManager: BreedingManager;
  public breedingUI: BreedingUI;
  public treehouseManager: TreehouseManager;
  public treehouseUI: TreehouseUI;
  public ancientAltarManager: AncientAltarManager;

  public insectManager: InsectManager;
  private catchUI: CatchEffectUI;

  private clock: THREE.Clock;
  private isRunning: boolean = false;
  private saveTimer: number = 0;

  constructor(container: HTMLElement) {
    this.container = container;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 500);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);

    // 4. Core Systems & Audio
    this.clock = new THREE.Clock();
    this.input = new InputManager(this.container);
    this.audio = new AudioManager();

    // 5. Phase 5 & 6 Systems
    this.timeManager = new TimeManager();
    this.weatherManager = new WeatherManager(this.scene);
    this.inventoryManager = new InventoryManager();
    this.shopManager = new ShopManager(this.inventoryManager, this.audio);

    // Load saved time if available, or default to clear bright daytime (13:00)
    const saved = SaveManager.load();
    if (saved?.timeHours !== undefined && saved.timeHours >= 7 && saved.timeHours <= 18) {
      this.timeManager.setTime(saved.timeHours);
    } else {
      this.timeManager.setTime(13, 0);
    }

    // 6. World & Environment
    this.skyAndLighting = new SkyAndLighting(this.scene);
    this.world = new World(this.scene);

    // 7. Player & Health
    this.player = new Player();
    this.scene.add(this.player.group);

    this.healthManager = new HealthManager(this.player, this.audio);
    this.healthManager.onFaintComplete = () => {
      // Teleport player safely back to center plaza
      const spawnY = this.world.getTerrainHeight(0, 0);
      this.player.position.set(0, spawnY, 0);
    };

    this.shopUI = new ShopUI(this.inventoryManager, this.shopManager, this.healthManager);

    this.cameraController = new CameraController(
      this.camera,
      this.player,
      this.world,
      this.input
    );

    this.playerController = new PlayerController(
      this.player,
      this.world,
      this.input,
      this.cameraController
    );

    // Wire player footstep & jump sounds
    this.playerController.onFootstep = () => this.audio.playFootstep();
    this.playerController.onJump = () => this.audio.playJump();

    // 8. Touch Controller (Phase 2)
    this.touchController = new TouchController(this.input);

    // 9. Collection & Encyclopedia Book (Phase 4)
    this.collection = new CollectionManager();
    this.bookUI = new BookUI(this.collection);

    // 10. Catch UI & Insects System
    this.catchUI = new CatchEffectUI();
    this.insectManager = new InsectManager(
      this.scene,
      this.world,
      this.collection,
      this.inventoryManager,
      this.player,
      this.timeManager,
      this.weatherManager
    );

    // 11. Wasp Swarm (Phase 6 Hazard)
    this.waspSwarm = new WaspSwarm(
      this.scene,
      this.player,
      this.healthManager,
      this.collection,
      this.inventoryManager,
      this.catchUI,
      this.audio
    );

    // 12. Apply shop upgrades (Sneakers, Net tiers)
    this.applyShopUpgrades();
    this.shopManager.onUpgradeChange = () => {
      this.applyShopUpgrades();
    };

    // 13. Phase 7: Museum System
    this.museumManager = new MuseumManager(this.inventoryManager);
    if (saved?.donations) {
      this.museumManager.deserialize(saved.donations);
    }
    const musX = 0;
    const musZ = 16.5;
    const musY = this.world.getTerrainHeight(musX, musZ);
    this.museumBuilding = new MuseumBuilding(this.scene, this.museumManager, new THREE.Vector3(musX, musY, musZ));
    this.museumUI = new MuseumUI(this.museumManager, this.inventoryManager, this.audio);

    // 14. Phase 7: Quest System (Dr. Fabre)
    this.questManager = new QuestManager(this.shopManager, this.audio);
    if (saved?.quests) {
      this.questManager.deserialize(saved.quests);
    }
    this.questUI = new QuestUI(this.questManager);
    this.doctorPosition = new THREE.Vector3(3.8, this.world.getTerrainHeight(3.8, 6.2), 6.2);
    this.createDoctorNPC();

    // Catch trigger forwards to quest manager
    this.insectManager.onCatch = (record) => {
      this.questManager.handleCatch(record);
    };

    // 15. Phase 7: Photo Mode
    this.photoModeUI = new PhotoModeUI(this.camera, this.cameraController, this.audio);

    // 16. Phase 8: Sumo Arena & UI
    this.sumoArena = new SumoArena(this.world.island);
    this.scene.add(this.sumoArena.group);
    this.sumoUI = new SumoUI(this.inventoryManager, this.shopManager, this.audio);
    this.sumoArena.onInteract = () => {
      this.sumoUI.show();
    };

    // 17. Phase 8: Mystic Cave Isle & Boat Travel
    this.mysticCave = new MysticCave();
    this.scene.add(this.mysticCave.group);

    this.screenFader = document.createElement('div');
    this.screenFader.className = 'screen-fader';
    document.body.appendChild(this.screenFader);

    this.mysticCave.onTravelToCave = () => {
      this.travelBoat('cave');
    };
    this.mysticCave.onTravelToMainland = () => {
      this.travelBoat('mainland');
    };

    // 18. Tree Shake & Net Action Trigger
    this.playerController.onActionTrigger = () => {
      this.handlePlayerAction();
    };

    // 19. Phase 9: CampSite, Honey Trap & Tournament
    this.campSite = new CampSite(this.world, this.insectManager, this.healthManager, this.timeManager);
    this.honeyTrapManager = new HoneyTrapManager(this.world.nature, this.shopManager, this.insectManager, this.audio);
    this.tournamentManager = new TournamentManager(this.shopManager, this.audio);
    this.tournamentUI = new TournamentUI(this.tournamentManager);

    this.insectManager.addCatchListener((record) => {
      this.tournamentManager.onInsectCaught(record);
    });

    // 20. Phase 10: Breeding, Treehouse Base & Ancient Altar
    this.breedingManager = new BreedingManager(this.inventoryManager, this.shopManager);
    this.breedingUI = new BreedingUI(this.breedingManager, this.inventoryManager, this.shopManager, this.audio);

    this.treehouseManager = new TreehouseManager(this.world.island, this.timeManager, this.healthManager, this.audio);
    this.scene.add(this.treehouseManager.group);

    this.ancientAltarManager = new AncientAltarManager(
      this.world.island,
      this.weatherManager,
      this.insectManager,
      this.shopManager,
      this.audio
    );
    this.scene.add(this.ancientAltarManager.group);

    this.treehouseUI = new TreehouseUI(
      this.treehouseManager,
      this.ancientAltarManager,
      this.breedingManager,
      this.audio
    );

    // 21. UI Button Listeners & Keybinds
    this.initUIEventListeners();

    // Auto save on page unload
    window.addEventListener('beforeunload', () => {
      SaveManager.save(
        this.shopManager,
        this.inventoryManager,
        this.collection,
        this.timeManager,
        this.museumManager,
        this.questManager
      );
    });
  }

  private travelBoat(dest: 'cave' | 'mainland'): void {
    this.audio.playFootstep();
    this.screenFader.classList.add('fade-in');

    setTimeout(() => {
      if (dest === 'cave') {
        this.player.position.copy(this.mysticCave.caveSpawnPosition);
      } else {
        this.player.position.set(0, this.world.getTerrainHeight(0, -42), -42);
      }
      this.cameraController.reset();

      setTimeout(() => {
        this.screenFader.classList.remove('fade-in');
      }, 300);
    }, 600);
  }

  private applyShopUpgrades(): void {
    // 1. Sneakers boost speed 20%
    this.playerController.speedMultiplier = this.shopManager.hasSneakers ? 1.2 : 1.0;

    // 2. Net tier upgrade
    this.insectManager.equippedNet = this.shopManager.equippedNet;
  }

  private handlePlayerAction(): void {
    this.audio.playNetSwing();

    // Priority 1: If wasps are chasing, try to catch the wasp swarm!
    if (this.waspSwarm.isActive) {
      let reach = 3.2;
      if (this.shopManager.equippedNet === 'silver') reach = 4.0;
      if (this.shopManager.equippedNet === 'gold') reach = 4.8;

      if (this.waspSwarm.tryCatch(this.player.position, reach)) {
        return; // Successfully caught wasps!
      }
    }

    // Priority 2: If standing next to a tree, shake the tree!
    const nearTree = this.world.nature.getNearestTree(this.player.position, 2.8);
    if (nearTree) {
      this.world.nature.shakeTree(nearTree.index);
      this.audio.playTreeShake();

      // If player has honey, ask or automatically apply honey if tree doesn't have it
      if (this.shopManager.honeyCount > 0 && !nearTree.tree.hasHoney && Math.random() < 0.3) {
        if (this.shopManager.useHoney()) {
          this.world.nature.applyHoney(nearTree.index);
        }
      }

      // 15% chance of wasp nest dropping (5% if honeyed tree)
      const waspChance = nearTree.tree.hasHoney ? 0.06 : 0.16;
      if (Math.random() < waspChance && !this.waspSwarm.isActive) {
        this.waspSwarm.triggerSwarm(nearTree.tree.basePos);
        return;
      }

      // 45% chance of insect flying out of tree (80% if honeyed)
      const insectChance = nearTree.tree.hasHoney ? 0.85 : 0.45;
      if (Math.random() < insectChance) {
        this.insectManager.spawnTreeInsect(nearTree.tree.basePos, nearTree.tree.hasHoney);
        if (nearTree.tree.hasHoney) {
          nearTree.tree.hasHoney = false; // Honey consumed
        }
      }
      return;
    }

    // Priority 3: Regular bug catching swing
    this.insectManager.tryCatch(
      this.player.position,
      this.player.isFacingRight,
      this.cameraController.yaw
    );
  }

  private initUIEventListeners(): void {
    // Book button
    const btnOpenBook = document.getElementById('btn-open-book');
    btnOpenBook?.addEventListener('click', () => {
      this.bookUI.toggle();
    });

    // Shop & Basket button in status bar
    const moneyBadge = document.querySelector('.money-badge');
    moneyBadge?.addEventListener('click', () => {
      this.shopUI.open('buy');
    });

    const btnOpenShop = document.getElementById('btn-open-shop');
    btnOpenShop?.addEventListener('click', () => {
      this.shopUI.open('sell');
    });

    // Shop stall prompt
    const shopPrompt = document.getElementById('shop-stall-prompt');
    shopPrompt?.addEventListener('click', () => {
      this.shopUI.open('sell');
    });

    // Tree shake prompt
    const treePrompt = document.getElementById('tree-shake-prompt');
    treePrompt?.addEventListener('click', () => {
      this.handlePlayerAction();
    });

    // Audio toggle button
    const btnToggleAudio = document.getElementById('btn-toggle-audio');
    btnToggleAudio?.addEventListener('click', () => {
      const isMuted = this.audio.toggleMute();
      btnToggleAudio.classList.toggle('muted', isMuted);
      const icon = btnToggleAudio.querySelector('.badge-icon');
      if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
    });

    // Time badge click advances time 3 hours
    const timeBadge = document.querySelector('.time-badge');
    timeBadge?.addEventListener('click', () => {
      this.timeManager.advanceHours(3);
    });

    // Phase 7: Museum button & prompt
    const btnOpenMuseum = document.getElementById('btn-open-museum');
    btnOpenMuseum?.addEventListener('click', () => {
      this.museumUI.toggle();
    });

    const museumPrompt = document.getElementById('museum-prompt');
    museumPrompt?.addEventListener('click', () => {
      this.museumUI.open();
    });

    // Phase 7: Quest button & prompt
    const btnOpenQuest = document.getElementById('btn-open-quest');
    btnOpenQuest?.addEventListener('click', () => {
      this.questUI.toggle();
    });

    const questPrompt = document.getElementById('quest-prompt');
    questPrompt?.addEventListener('click', () => {
      this.questUI.open();
    });

    // Phase 7: Photo mode button
    const btnOpenPhoto = document.getElementById('btn-open-photo');
    btnOpenPhoto?.addEventListener('click', () => {
      this.photoModeUI.toggle();
    });

    // Phase 7: Sneak button
    const btnToggleSneak = document.getElementById('btn-toggle-sneak');
    btnToggleSneak?.addEventListener('click', () => {
      const isSneak = this.playerController.toggleSneak();
      btnToggleSneak.classList.toggle('active', isSneak);
    });

    // Phase 8: Sumo Arena button
    const btnOpenSumo = document.getElementById('btn-open-sumo');
    btnOpenSumo?.addEventListener('click', () => {
      this.sumoUI.show();
    });

    // Phase 9: Tournament button
    const btnOpenTourney = document.getElementById('btn-open-tourney');
    btnOpenTourney?.addEventListener('click', () => {
      this.tournamentUI.toggleLobby();
    });

    // Phase 10: Breeding button
    const btnOpenBreeding = document.getElementById('btn-open-breeding');
    btnOpenBreeding?.addEventListener('click', () => {
      if (this.breedingUI.isOpen()) {
        this.breedingUI.close();
      } else {
        this.breedingUI.open();
      }
    });

    // Phase 9 & 10: Prompts Click Handlers
    document.getElementById('campfire-prompt')?.addEventListener('click', () => {
      this.campSite.restAtCampfire();
    });
    document.getElementById('light-trap-prompt')?.addEventListener('click', () => {
      this.campSite.toggleTrap();
    });
    document.getElementById('honey-apply-prompt')?.addEventListener('click', () => {
      this.honeyTrapManager.applyHoneyToCurrentTree();
    });
    document.getElementById('treehouse-prompt')?.addEventListener('click', () => {
      const prompt = this.treehouseManager.update(this.player.position);
      if (prompt && prompt.type === 'bed') {
        this.treehouseUI.openBed();
      } else if (prompt && prompt.type === 'breeding') {
        this.breedingUI.open();
      } else if (prompt && prompt.type === 'radio') {
        this.treehouseUI.openRadio();
      } else {
        this.breedingUI.open();
      }
    });
    document.getElementById('altar-prompt')?.addEventListener('click', () => {
      this.treehouseUI.openAltar();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyB') {
        this.bookUI.toggle();
      } else if (e.code === 'KeyI') {
        this.shopUI.open('sell');
      } else if (e.code === 'KeyP') {
        this.shopUI.open('buy');
      } else if (e.code === 'KeyO') {
        this.museumUI.toggle();
      } else if (e.code === 'KeyQ') {
        this.questUI.toggle();
      } else if (e.code === 'KeyZ') {
        this.photoModeUI.toggle();
      } else if (e.code === 'KeyK') {
        this.sumoUI.show();
      } else if (e.code === 'KeyJ') {
        this.tournamentUI.toggleLobby();
      } else if (e.code === 'KeyH') {
        this.honeyTrapManager.applyHoneyToCurrentTree();
      } else if (e.code === 'Space') {
        // Check Campfire, Sumo Arena or Boat interaction before jumping
        if (this.campSite.isNearCampfire(this.player.position)) {
          this.campSite.restAtCampfire();
          e.preventDefault();
        } else if (this.sumoArena.checkInteraction()) {
          e.preventDefault();
        } else if (this.mysticCave.checkInteraction()) {
          e.preventDefault();
        }
      } else if (e.code === 'KeyE') {
        const treehousePrompt = this.treehouseManager.update(this.player.position);
        if (treehousePrompt && treehousePrompt.type) {
          if (treehousePrompt.type === 'bed') {
            this.treehouseUI.openBed();
          } else if (treehousePrompt.type === 'breeding') {
            this.breedingUI.open();
          } else if (treehousePrompt.type === 'radio') {
            this.treehouseUI.openRadio();
          } else if (treehousePrompt.type === 'trophy') {
            alert('🏆 これまで獲得した大会トロフィーや自慢のキング冠昆虫が飾られた標本棚です！');
          }
        } else if (this.ancientAltarManager.update(0, this.player.position)) {
          this.treehouseUI.openAltar();
        } else if (this.campSite.isNearLightTrap(this.player.position)) {
          this.campSite.toggleTrap();
        }
      } else if (e.code === 'KeyL') {
        if (this.breedingUI.isOpen()) {
          this.breedingUI.close();
        } else {
          this.breedingUI.open();
        }
      } else if (e.code === 'KeyC') {
        const isSneak = this.playerController.toggleSneak();
        const sneakBtn = document.getElementById('btn-toggle-sneak');
        sneakBtn?.classList.toggle('active', isSneak);
      } else if (e.code === 'KeyT') {
        this.timeManager.advanceHours(2);
      } else if (e.code === 'KeyY') {
        this.weatherManager.toggleNextWeather();
      } else if (e.code === 'KeyM') {
        btnToggleAudio?.click();
      }
    });

    // Window Resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.animate();
  }

  private animate = (): void => {
    if (!this.isRunning) return;
    requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // 1. Update Game Time & Weather
    this.timeManager.update(delta);
    this.weatherManager.update(delta, this.player.position);

    // 2. Update Ambience Audio (Birds, Waves, Cicadas, Night crickets, Rain)
    this.audio.updateAmbience(this.timeManager.getPeriod(), this.weatherManager.currentWeather, delta);

    // 3. Update Player & Controls
    this.playerController.update(delta);

    // 4. Update Camera
    this.cameraController.update();

    // 5. Update Insects (movement & AI with sneak & run awareness)
    this.insectManager.update(
      delta,
      this.player.position,
      this.playerController.isSneaking,
      this.input.getMoveInput().isRunning
    );

    // 6. Update Wasp Swarm (Hazard)
    this.waspSwarm.update(delta);

    // 7. Update Museum Exhibits (Phase 7)
    this.museumBuilding.update(delta);

    // 8. Update Nature (Shaking trees & falling leaves)
    this.world.nature.update(delta);

    // 9. Update Sky & Dynamic Lighting (Sun/Moon/Stars/Fog)
    this.skyAndLighting.update(delta, this.player.position, this.timeManager, this.weatherManager);

    // 10. Check proximity to Shop Stall in town center (x: 5, z: 6)
    const distToShop = Math.hypot(this.player.position.x - 5, this.player.position.z - 6);
    const shopPrompt = document.getElementById('shop-stall-prompt');
    if (shopPrompt) {
      shopPrompt.style.display = distToShop < 3.2 ? 'flex' : 'none';
    }

    // 11. Check proximity to Museum Entrance (Phase 7)
    const distToMuseum = this.museumBuilding.getDistanceToEntrance(this.player.position);
    const museumPrompt = document.getElementById('museum-prompt');
    if (museumPrompt) {
      museumPrompt.style.display = distToMuseum < 4.2 ? 'flex' : 'none';
    }

    // 12. Check proximity to Doctor Fabre NPC (Phase 7)
    const distToDoctor = this.player.position.distanceTo(this.doctorPosition);
    const questPrompt = document.getElementById('quest-prompt');
    if (questPrompt) {
      questPrompt.style.display = distToDoctor < 3.2 ? 'flex' : 'none';
    }

    // 13. Check proximity to Trees for Shake Prompt
    const nearTree = this.world.nature.getNearestTree(this.player.position, 2.8);
    const treePrompt = document.getElementById('tree-shake-prompt');
    if (treePrompt) {
      treePrompt.style.display = nearTree && !this.waspSwarm.isActive ? 'flex' : 'none';
    }

    // 14. Phase 8: Update Sumo Arena & Mystic Cave
    this.sumoArena.update(this.player.position, delta);
    this.mysticCave.update(this.player.position, delta);

    // 15. Phase 9: Update CampSite, Honey Trap & Tournament
    this.campSite.update(delta);
    this.honeyTrapManager.update(delta);
    this.tournamentManager.update(delta);

    // 16. Phase 9: Proximity Prompts Check
    const campfirePrompt = document.getElementById('campfire-prompt');
    if (campfirePrompt) {
      campfirePrompt.style.display = this.campSite.isNearCampfire(this.player.position) ? 'flex' : 'none';
    }

    const lightTrapPrompt = document.getElementById('light-trap-prompt');
    if (lightTrapPrompt) {
      lightTrapPrompt.style.display = this.campSite.isNearLightTrap(this.player.position) ? 'flex' : 'none';
    }

    const nearHoneyTree = this.honeyTrapManager.checkNearbyTree(this.player.position);
    const honeyPrompt = document.getElementById('honey-apply-prompt');
    if (honeyPrompt) {
      const hasAnyHoney = this.shopManager.honeyCount > 0 || (this.shopManager as any).bananaHoneyCount > 0;
      honeyPrompt.style.display = nearHoneyTree && hasAnyHoney && !nearHoneyTree.hasHoney ? 'flex' : 'none';
    }

    // 17. Phase 10: Update Breeding, Treehouse & Ancient Altar
    this.breedingManager.update(delta);

    const treehousePrompt = this.treehouseManager.update(this.player.position);
    const treehousePromptEl = document.getElementById('treehouse-prompt');
    if (treehousePromptEl) {
      if (treehousePrompt) {
        treehousePromptEl.style.display = 'flex';
        treehousePromptEl.textContent = treehousePrompt.message;
      } else {
        treehousePromptEl.style.display = 'none';
      }
    }

    const altarPrompt = this.ancientAltarManager.update(delta, this.player.position);
    const altarPromptEl = document.getElementById('altar-prompt');
    if (altarPromptEl) {
      if (altarPrompt) {
        altarPromptEl.style.display = 'flex';
        altarPromptEl.textContent = altarPrompt.message;
      } else {
        altarPromptEl.style.display = 'none';
      }
    }

    // 15. Auto Save every 30s
    this.saveTimer += delta;
    if (this.saveTimer > 30.0) {
      this.saveTimer = 0;
      SaveManager.save(
        this.shopManager,
        this.inventoryManager,
        this.collection,
        this.timeManager,
        this.museumManager,
        this.questManager
      );
    }

    // 15. Render 3D Scene
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Phase 7: Create Dr. Fabre NPC and Research Desk in plaza
   */
  private createDoctorNPC(): void {
    const group = new THREE.Group();
    group.position.copy(this.doctorPosition);

    // 1. Research Wooden Desk
    const deskMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.9), deskMat);
    deskTop.position.y = 0.85;

    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.85);
    for (let x of [-0.68, 0.68]) {
      for (let z of [-0.35, 0.35]) {
        const leg = new THREE.Mesh(legGeo, deskMat);
        leg.position.set(x, 0.425, z);
        group.add(leg);
      }
    }
    group.add(deskTop);

    // 2. Desk Props: Microscope & Research Papers
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.7, roughness: 0.3 });
    const scopeGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.35);
    const scope = new THREE.Mesh(scopeGeo, brassMat);
    scope.position.set(0.35, 1.05, 0);
    scope.rotation.z = -0.2;
    group.add(scope);

    const paperMat = new THREE.MeshLambertMaterial({ color: 0xf5f6fa });
    const paper = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.3), paperMat);
    paper.position.set(-0.25, 0.92, 0.05);
    paper.rotation.y = 0.15;
    group.add(paper);

    // 3. Doctor Character Model (White Lab Coat & Friendly Glasses)
    const doctorGroup = new THREE.Group();
    doctorGroup.position.set(0, 0, -0.6); // Behind desk

    const coatMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const pantsMat = new THREE.MeshLambertMaterial({ color: 0x34495e });
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdbac });
    const hairMat = new THREE.MeshLambertMaterial({ color: 0x7f8c8d });

    // Legs
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6), pantsMat);
    legL.position.set(-0.12, 0.3, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6), pantsMat);
    legR.position.set(0.12, 0.3, 0);

    // Body (Lab Coat)
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.75, 0.28), coatMat);
    body.position.y = 0.9;

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), skinMat);
    head.position.y = 1.42;

    // Gray Hair
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), hairMat);
    hair.position.set(0, 1.46, -0.04);

    // Glasses frame
    const glassFrame = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.04), brassMat);
    glassFrame.position.set(0, 1.44, 0.19);

    doctorGroup.add(legL, legR, body, head, hair, glassFrame);
    group.add(doctorGroup);

    this.scene.add(group);
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
