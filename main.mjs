// event listeners, and game code goes here, won't be much until all other modules are complete, though.
import {drawStats, clearHUD, drawCraft, drawHotbar} from "./drawHud.mjs";
import {drawTiles, drawEntities, drawPlayer, drawLightingEffects, drawForegro0und, drawBackground, clearDraw} from "./drawMain.mjs";
import {checkColliders, completeCollisions, addPlayerVelocityVectors, pathfind, enemyCollisions} from "./physics.mjs";
import {drawBox, clearBox, timeDraw, hideBox, showBox} from "./textBox.mjs"; // complete
import {drawTitle, timedTitle, hideTitle, clearTitle} from "./title.mjs"; // complete

timedTitle("---World 1---", "The Forest", 500);
timeDraw("Welcome to The Forest, and prepare to be destroyed by the many monsters and oddly kind travelors who just want to test line wrapping.", 30)
