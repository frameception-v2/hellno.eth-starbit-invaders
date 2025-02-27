### Step 1: Initialize Game State and Reset Endpoint
```text
- Build: Basic GameState structure with player position (X=50) and /game-reset endpoint that returns base64-encoded initial state
- Outcome: POST to /game-reset returns valid state with playerX:50, score:0, gameActive:true
```

### Step 2: Render Spaceship in Game Image
```text
- Build: /game-image endpoint that decodes state and draws spaceship at current playerX using @vercel/og
- Outcome: GET requests with test state show green pixel-art ship centered horizontally
```

### Step 3: Handle Player Movement Actions
```text
- Build: /game-action endpoint processing "move_left" and "move_right" actions with bounds checking (0-100)
- Outcome: Sending consecutive left/right actions shows ship moving diagonally in image responses
```

### Step 4: Add Invader Rows and Basic Rendering
```text
- Build: Initialize 3 invader rows in /game-reset and render them as colored blocks at their Y positions
- Outcome: New game shows red/yellow/cyan invader blocks at top of image
```

### Step 5: Implement Auto-Scrolling Invaders
```text
- Build: Process invader movement in /game-action (y += 1% per action), resetting to top if they reach bottom
- Outcome: Invaders visibly descend with each player action and wrap upon reaching bottom
```

### Step 6: Add Bullet Firing Mechanism
```text
- Build: Process "fire" actions in /game-action by adding bullets at playerX with upward velocity
- Outcome: Pressing fire button creates white projectile visible above ship in image
```

### Step 7: Implement Score Display System
```text
- Build: Render score counter using Press Start 2P font at top-center of game image
- Outcome: Score value appears in white text above gameplay area, updating with state changes
```

### Step 8: Create Bullet-Invader Collision Detection
```text
- Build: Check bullet positions against invaders each frame, remove hits and add +10 to score
- Outcome: Shooting invaders removes them and increases score in subsequent images
```

### Step 9: Add Game Over Condition Checking
```text
- Build: Set gameActive=false when any invader reaches 85% Y position. Render "GAME OVER" text overlay
- Outcome: Descending invaders trigger game over screen when reaching near bottom
```

### Step 10: Implement Restart Functionality
```text
- Build: Game over screen "Play Again" button that triggers /game-reset. Preserve high score across resets
- Outcome: Clicking restart clears invaders/bullets and resets positions while maintaining best score
```

### Step 11: Add State Security Validation
```text
- Build: HMAC signature verification for all endpoints. Invalidate tampered states with auto-reset
- Outcome: Modified state payloads trigger new game state rather than corrupting session
```