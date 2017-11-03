import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256);

// render repeat

(function gameLoop() {
    game.render();
    // // sets loop to browser refresh rate
    requestAnimationFrame(gameLoop);
})();
