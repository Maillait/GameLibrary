export var currentLevel = [{x : null, y : null, width : null, height : null, type : null, state : null}];
export var nonPlayerCharacters = [{x : null, y : null, type : null, state : null}];
export var enemies = [{x : null, y : null, type : null}];
export var levelForeground = {spritex : null, spritey : null};
export var levelBackground = {spritex : null, spritey : null};

export function defineLevel(level) {
  currentLevel.length = 0;
  nonPlayerCharacters.length = 0;
  enemies.length = 0;
  levelForeground.length = 0;
  levelBackground.length = 0;
  switch(level) {
    case 1 :
        // blue print for levels
        levelForeground.spritey = 0;
        levelForeground.spritex = 0;
        levelBackground.spritey = 0;
        levelBackground.spritex = 0;
        nonPlayerCharacters[0]= {x : 0, y : 0, type : 0, state : 0}; // do to all
        nonPlayerCharacters[1]= {x : 0, y : 0, type : 0, state : 0};
        enemies[0] = {x : 0, y : 0, type : 0};
        enemies[1] = {x : 0, y : 0, type : 0};
        enemies[2] = {x : 0, y : 0, type : 0};
        enemies[3] = {x : 0, y : 0, type : 0};
        enemies[4] = {x : 0, y : 0, type : 0};
        currentLevel[0] = {x : 0, y : 0, width : 0, height : 100, type : 100, state : 0};
        currentLevel[1] = {x : 10, y : 70, width : 10, height : 40, type : 0, state : 0};
        currentLevel[2] = {x : 0, y : 0, width : 0, height : 0, type : 0, state : 0};
        currentLevel[3] = {x : 0, y : 0, width : 0, height : 0, type : 0, state : 0};
        currentLevel[4] = {x : 0, y : 0, width : 0, height : 0, type : 0, state : 0};
        currentLevel[5] = {x : 0, y : 0, width : 0, height : 0, type : 0, state : 0};
        currentLevel[6] = {x : 0, y : 0, width : 0, height : 0, type : 0, state : 0};
        break;
      default : defineLevel(1);
    };
    return;
};
