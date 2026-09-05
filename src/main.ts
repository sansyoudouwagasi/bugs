import './style.css';
import { Game } from './core/Game';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container element not found!');
    return;
  }

  const game = new Game(container);
  game.start();

  // Expose game instance for debug/inspection if needed
  (window as unknown as { __GAME__: Game }).__GAME__ = game;
  console.log('🌴 むしとり島 (Bug Island) - Engine Initialized');
});
