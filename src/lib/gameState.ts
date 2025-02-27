export interface GameState {
  playerX: number;        // Player ship x position (0-100)
  invaders: boolean[][]; // Grid of invaders (true=alive)
  bullets: {x: number, y: number}[]; // Active bullets
  score: number;
  gameOver: boolean;
}

export const GAME_WIDTH = 100;
export const GAME_HEIGHT = 100;
export const INITIAL_ROWS = 3;
export const INITIAL_COLS = 8;

export function createInitialState(): GameState {
  // Create initial invader grid
  const invaders = Array(INITIAL_ROWS).fill(null).map(() => 
    Array(INITIAL_COLS).fill(true)
  );

  return {
    playerX: GAME_WIDTH / 2,
    invaders,
    bullets: [],
    score: 0,
    gameOver: false
  };
}
