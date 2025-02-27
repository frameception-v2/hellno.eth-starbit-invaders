import { useEffect, useRef } from 'react';
import { GameState } from '~/lib/gameState';

const PLAYER_COLOR = '#00ff00';
const INVADER_COLOR = '#ff0000';
const BULLET_COLOR = '#ffffff';
const BACKGROUND_COLOR = '#000000';

interface GameCanvasProps {
  gameState: GameState;
  width: number;
  height: number;
}

export function GameCanvas({ gameState, width, height }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);

    // Draw player
    ctx.fillStyle = PLAYER_COLOR;
    ctx.fillRect(gameState.playerX, height - 30, 40, 20);

    // Draw invaders
    ctx.fillStyle = INVADER_COLOR;
    gameState.invaders.forEach((row, rowIndex) => {
      row.forEach((invader, colIndex) => {
        if (invader) {
          ctx.fillRect(colIndex * 50, rowIndex * 50, 30, 30);
        }
      });
    });

    // Draw bullets
    ctx.fillStyle = BULLET_COLOR;
    gameState.bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, 4, 10);
    });

  }, [gameState, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border border-gray-500"
    />
  );
}
