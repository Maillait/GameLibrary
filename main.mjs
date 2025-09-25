// event listeners, and game code goes here, won't be much until all other modules are complete, though.
import {drawStats, clearHUD, drawCraft, drawHotbar} from "./drawHud.mjs";
import {drawTiles, drawEntities, drawPlayer, drawLightingEffects, drawForegro0und, drawBackground, clearDraw} from "./drawMain.mjs";
import {checkColliders, completeCollisions, addPlayerVelocityVectors, pathfind, enemyCollisions} from "./physics.mjs";
import {drawBox, clearBox, timeDraw, hideBox, showBox} from "./textBox.mjs"; // complete
import {drawTitle, timedTitle, hideTitle, clearTitle} from "./title.mjs"; // complete
import {currentLevel, nonPlayerCharacters, enemies, levelForeground, levelBackground, defineLevel} from "./levelData.mjs"; // blueprint complete

// testing functions
defineLevel(1);
drawTiles();
drawLightingEffects(.5);
timedTitle("---World 1---", "The Forest", 1000);
timeDraw("Welcome to The Forest, and prepare to be destroyed by the many monsters and oddly kind travelors who just want to test line wrapping.", 30);

document.addEventListener("mousemove", (event) => {
  drawTitle("---World 2---", "Tests");
  clearBox();
  timeDraw("Isn't this just painfully slow, you've got to love that the function has a speed control. What did you call me? how dare you, you're more of a sloth tghan this text will ever be!!!...@@@###$$$%%^^^&&&***((())) You actually stayed?? Thank you (;", 100);
});
