export interface GameState {
  playerX: number;        // Player ship x position (0-292)
  invaders: boolean[][]; // Grid of invaders (true=alive)
  bullets: {x: number, y: number}[]; // Active bullets
  score: number;
  gameOver: boolean;
}

// Game canvas is 300x300
export const GAME_WIDTH = 300;
export const GAME_HEIGHT = 300;
export const INITIAL_ROWS = 3;
export const INITIAL_COLS = 6;

// Player and game object sizes
export const PLAYER_WIDTH = 32;
export const INVADER_SIZE = 24;
export const BULLET_WIDTH = 4;
export const BULLET_HEIGHT = 12;

export function createInitialState(): GameState {
  // Create initial invader grid
  const invaders = Array(INITIAL_ROWS).fill(null).map(() => 
    Array(INITIAL_COLS).fill(true)
  );

  return {
    playerX: (GAME_WIDTH - PLAYER_WIDTH) / 2, // Center the player
    invaders,
    bullets: [],
    score: 0,
    gameOver: false
  };
}
