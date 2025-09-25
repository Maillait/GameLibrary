import {currentLevel, nonPlayerCharacters, enemies, levelForeground, levelBackground} from "./levelData.mjs";

const plot1 = document.getElementById("screen");
const ctx1 = plot1.getContext("2d");
const tileLookup = ["green", "grey", "black", "blue"]; // for testing, will be replaced soon

export function drawTiles() {
  for (let i = 0; i < currentLevel.length; i++) {
    ctx1.fillStyle = tileLookup[currentLevel[i].type];
    ctx1.fillRect(currentLevel[i].x, currentLevel[i].y, currentLevel[i].width, currentLevel[i].height);
  }
  return;
};

export function drawEntities() {};

export function drawPlayer() {
  ctx1.fillStyle = "red";
  ctx1.fillRect(300, 160, 40, 40);
  return;
};

export function drawLightingEffects(darkPercent) {
  ctx1.fillStyle = `hsla(0,0%,${darkPercent}%, 50%)`;
  ctx1.fillRect(0, 0, 640, 360);
};

export function drawForegro0und() {};

export function drawBackground() {};

export function clearDraw() {
  ctx1.clearRect(0, 0, 640, 360);
  return;
};
