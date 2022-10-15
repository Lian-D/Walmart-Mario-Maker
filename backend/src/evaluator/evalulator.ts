export default class evaluator {

    private parsedData: any;
    private error: string = "";

    constructor(data: any){
        this.parsedData = data;
    }

    evaluate(): boolean {
        let candidate = this.parsedData;
        let validEnemyType = this.validateEnemyType(candidate.game.types.enemy);
        let validTerrainType = this.validateTerrainType(candidate.game.types.terrain);
        let validatePlatformType = this.validatePlatformType(candidate.game.types.platform);
        let validateDoorType = this.validateDoorType(candidate.game.types.door);
        let validateCoinType = this.validateCoinType(candidate.game.types.coin);
        let validateButtonType = this.validateButtonType(candidate.game.types.button);
        let validateLevels = this.validateLevels(candidate.game.levels);

        if (validEnemyType && validTerrainType 
            && validatePlatformType && validateDoorType
            && validateCoinType && validateButtonType && validateLevels) {
                return true;
            }
        return false;
    }

    validateEnemyType(enemiesTypes: any) {
        let checkPassed = true;
        for (const eType in enemiesTypes) {
            let enemy = enemiesTypes[eType];

            //Must have either colour or image
            if ((enemy.image == undefined) || (
                enemy.colour == undefined)) {
                    this.error+`image or colour must be defined in enemy: ${eType} \n`; 
                    checkPassed = false;
            }

            //Critical values are behavior and speed;
            if ((enemy.behaviour == undefined) &&
             (enemy.speed == undefined)) {
                this.error+`enemy missing behavior or speed field in enemy: ${eType} \n`; 
                checkPassed = false;
             }
        }
        return checkPassed;
    }

    validateTerrainType(terrainTypes: any) {
        let checkPassed = true;
        for (const tType in terrainTypes) {
            let terrain = terrainTypes[tType];

            //Must have either colour or image
            if ((terrain.image == undefined) || (
                terrain.colour == undefined)) {
                    this.error+`image or colour must be defined in terrain: ${tType} \n`; 
                    checkPassed = false;
            }
        }
        return checkPassed;
    }

    validatePlatformType(platformTypes: any) {
        let checkPassed = true;
        for (const pType in platformTypes) {
            let platform = platformTypes[pType];
            
            //Must have either colour or image
            if ((platform.image == undefined) || (
                platform.colour == undefined)) {
                    this.error+`image or colour must be defined in platform: ${pType} \n`; 
                    checkPassed = false;
            }
        }
        return checkPassed;
    }

    validateDoorType(doorTypes: any) {
        let checkPassed = true;
        for (const dType in doorTypes) {
            let door = doorTypes[dType];

            // Must have image or key
            if (door.image == undefined
                || door.key == undefined) {
                    this.error+`image or key must be defined in door: ${dType} \n`;
                    checkPassed = false;
                }
        }
        return checkPassed;
    }

    validateCoinType(coinTypes: any) {
        let checkPassed = true;
        for (const cType in coinTypes) {
            let coin = coinTypes[cType];

            // Must have image or value
            if (coin.image == undefined
                || coin.value == undefined) {
                    this.error+`image or colour must be defined in coin: ${cType} \n`;
                    checkPassed = false;
                }
        }
        return checkPassed;
    }

    validateButtonType(buttonTypes: any) {
        let checkPassed = true;
        for (const bType in buttonTypes) {
            let button = buttonTypes[bType];

            // Must have image or value
            if (button.image == undefined) {
                this.error+`image must be defined in button: ${bType} \n`;
                checkPassed = false;
            }
        }
        return checkPassed;

    }

    validateLevels(levels: any) {
        let checkPassed = true;
        for (const level of levels) {
            let validationResult = this.validateLevel(level);
            if (!validationResult) {
                checkPassed = false;
            }
        }
        return checkPassed;
    }

    validateLevel (level: any) {
        let checkPassed = true;
        if (level.name == undefined) {
            this.error+`name must be defined in level: name \n`;
            checkPassed = false;
        }
        if (level.background == undefined) {
            this.error+`background must be defined in level: background \n`;
            checkPassed = false;
        }
        if (!isNaN(level.width) && !isNaN(level.height)) {
            this.error+`level dimensions must be integer in level: width or height\n`;
            checkPassed = false;
        }
        if (!isNaN(level.playerStartX) && !isNaN(level.playerStartY)) {
            this.error+`level playerstarts  must be integer in level: playerStartX or playerStartY\n`; 
            checkPassed = false; 
        }
        if (!this.validateLevelDoors(level.doors)) checkPassed = false;
        if (!this.validateLevelPlatforms(level.platforms)) checkPassed = false;
        if (!this.validateLevelTerrain(level.terrain)) checkPassed = false;
        if (!this.validateLevelCoins(level.coins)) checkPassed = false;
        if (!this.validateLevelEnemies(level.enemies)) checkPassed = false;
        if (!this.validateLevelButtons(level.buttons)) checkPassed = false;
        if (!this.validateLevelChecks(level.check)) checkPassed = false;
        return checkPassed;
    }

    validateLevelDoors(doors: any) {
        let checkPassed = true;
        for (const door of doors) {
            if (door.name == undefined) {
                checkPassed = false;
                this.error+`level door missing a name declaration\n`;
            }
            if (door.type == undefined || this.parsedData.game.types.door[door.type]) {
                checkPassed = false;
                this.error+`level door not connected to a defined type\n`;
            }
            if (door.goesTo == undefined) {
                checkPassed = false;
                this.error+`level door missing a level destination\n`;
            }
            if (door.xPos == undefined || door.yPos == undefined) {
                checkPassed = false;
                this.error+`level door missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelPlatforms(platforms: any) {
        let checkPassed = true;
        for (const platform of platforms) {
            if (platform.name == undefined) {
                checkPassed = false;
                this.error+`level platform missing a name declaration\n`;
            }
            if (platform.type == undefined || this.parsedData.game.types.platform[platform.type]) {
                checkPassed = false;
                this.error+`level platform not connected to a defined type\n`;
            }
            if (platform.length == undefined) {
                checkPassed = false;
                this.error+`level platform missing a length\n`;
            }
            if (platform.xPos == undefined || platform.yPos == undefined) {
                checkPassed = false;
                this.error+`level platform missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelTerrain(terrains: any) {
        let checkPassed = true;
        for (const terrain of terrains) {
            if (terrain.name == undefined) {
                checkPassed = false;
                this.error+`level terrain missing a name declaration\n`;
            }
            if (terrain.type == undefined || this.parsedData.game.types.terrain[terrain.type]) {
                checkPassed = false;
                this.error+`level terrain not connected to a defined type\n`;
            }
            if (terrain.length == undefined) {
                checkPassed = false;
                this.error+`level terrain missing a length\n`;
            }
            if (terrain.xPos == undefined || terrain.yPos == undefined) {
                checkPassed = false;
                this.error+`level  terrain missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelCoins(coins: any) {
        let checkPassed = true;
        for (const coin of coins) {
            if (coin.name == undefined) {
                checkPassed = false;
                this.error+`level coin missing a name declaration\n`;
            }
            if (coin.type == undefined || this.parsedData.game.types.coin[coin.type]) {
                checkPassed = false;
                this.error+`level coin not connected to a defined type\n`;
            }
            if (coin.xPos == undefined || coin.yPos == undefined) {
                checkPassed = false;
                this.error+`level coin missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelEnemies(enemies: any) {
        let checkPassed = true;
        for (const enemy of enemies) {
            if (enemy.name == undefined) {
                checkPassed = false;
                this.error+`level enemy missing a name declaration\n`;
            }
            if (enemy.type == undefined || this.parsedData.game.types.enemy[enemy.type]) {
                checkPassed = false;
                this.error+`level enemy not connected to a defined type\n`;
            }
            if (enemy.xPos == undefined || enemy.yPos == undefined) {
                checkPassed = false;
                this.error+`level enemy missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelButtons(buttons: any) {
        let checkPassed = true;
        for (const button of buttons) {
            if (button.name == undefined) {
                checkPassed = false;
                this.error+`level button missing a name declaration\n`;
            }
            if (button.type == undefined || this.parsedData.game.types.enemy[button.type]) {
                checkPassed = false;
                this.error+`level button not connected to a defined type\n`;
            }
            if (button.xPos == undefined || button.yPos == undefined) {
                checkPassed = false;
                this.error+`level button missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelChecks(checks: any) {
        let checkPassed = true;
        for (checks of checks) {
            if (!this.validateCheckCond(checks.conditions) || !this.validateActions(checks.actions)) {
                checkPassed = false;
            }
        }
        return true;
    }

    validateCheckCond(check: any) {
        const operationWhitelist = ["or", "and", ">=", "<=", "buttonCheck", "!", "==", ">", "<"];
        let checkPassed = true;
        if (!operationWhitelist.includes(check.op)) {
            this.error+`level conditions ${check.op} not a valid condition\n`;
            checkPassed = false;
        }
        if (check.op == "OR" || check.op == "AND") {
            let opA = this.validateCheckCond(check.opA);
            let opB = this.validateCheckCond(check.opB);
            if (!opA && !opB) checkPassed = false; 
        } else {
            if ([">=", "<=", ">", "<", "=="].includes(check.op)) {
                if (check.opA == undefined || check.opB.isNaN) {
                    this.error+`level conditions ${check.op} not defined properly\n`;
                    checkPassed = false;  
                }
            }
            else if (["!", "buttonCjeck"].includes(check.op)) {
                if (check.opA == undefined || check.opB != undefined) {
                    this.error+`level conditions ${check.op} should not have a defined second condition\n`;
                    checkPassed = false; 
                }
            }
        }
        return checkPassed;
    }

    validateActions(actions: any) {
        let checkPassed = true;
        for (const action of actions) {
            if (action.effect == undefined) {
                this.error+`level conditions action is undefined\n`;
                checkPassed = false;
            }
            if (!["door", "platform", "enemy", "button"].includes(action.category)) {
                this.error+`level conditions action is not an actionable object\n`;
                checkPassed = false;
            }
            if (action.effect == "add") {
                if (!(action.payload.length >= 4)) {
                    this.error+`not enough params for the level action object add\n`;
                    checkPassed = false;
                }
            }
            if (action.effect == "remove") {
                if (!(action.payload.length == 1)) {
                    this.error+`too many params for the level action object remove\n`;
                    checkPassed = false;
                }
            }
        }
        return checkPassed;
    }
}

let eval = {
    "game": {
        "types": {
            "player": {
                "speed": 1,
                "health": 4
            },
            "enemy": {
                "slime": {
                    "image": "https://media.discordapp.net/attachments/969645894616096858/1028893886124412949/theTriangle.png",
                    "colour": "",
                    "behaviour": "STILL",
                    "speed": 0.2
                },
                "goblin": {
                    "image": "https://media.discordapp.net/attachments/969645894616096858/1028893886124412949/theTriangle.png",
                    "colour": "",
                    "behaviour": "FOLLOW",
                    "speed": 0.4
                }
            },
            "terrain": {
                "terrainType1": {
                    "image": "",
                    "colour": "#042b2b"
                }
            },
            "platform": {
                "platformType1": {
                    "image": "",
                    "colour": "#008080"
                }
            },
            "door": {
                "doorType1": {
                    "image": "https://cdn.discordapp.com/attachments/969645894616096858/1029102857728835604/door.png",
                    "key": null
                },
                "doorType2": {
                    "image": "https://cdn.discordapp.com/attachments/969645894616096858/1029102857728835604/door.png",
                    "key": "buttonType1"
                }
            },
            "coin": {
                "coinType1": {
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/1200px-Racket-logo.svg.png",
                    "height": 30,
                    "width": 30,
                    "value": 1
                }
            },
            "button": {
                "buttonType1": {
                    "image": "https://media.discordapp.net/attachments/1017526051989106740/1027763213896515615/key-png-11.png",
                    "height": 50,
                    "width": 50
                }
            }
        },
        "levels": [
            {
                "name": "level1",
                "background": "https://media.discordapp.net/attachments/1019466411044765716/1029542966185971822/bg.png",
                "height": 900,
                "width": 3000,
                "playerStartX": 200,
                "playerStartY": 50,
                "doors": [
                    {
                        "name": "door1",
                        "type": "doorType1",
                        "goesTo": "level2 door2",
                        "xPos": 2000,
                        "yPos": 50
                    }
                ],
                "platforms": [
                    {
                        "name": "plat1",
                        "type": "platformType1",
                        "xPos": 1000,
                        "yPos": 300,
                        "length": 500
                    },
                    {
                        "name": "plat2",
                        "type": "platformType1",
                        "xPos": 500,
                        "yPos": 200,
                        "length": 500 
                    },
                    {
                        "name": "plat3",
                        "type": "platformType1",
                        "xPos": 2000,
                        "yPos": 300,
                        "length": 500
                    }
                ],
                "terrain": [
                    {
                        "name": "terrain1",
                        "type": "terrainType1",
                        "xPos": 1500,
                        "yPos": 300,
                        "length": 500
                    },
                    {
                        "name": "terrain2",
                        "type": "terrainType1",
                        "xPos": 0,
                        "yPos": 0,
                        "length": 500
                    },
                    {
                        "name": "terrain3",
                        "type": "terrainType1",
                        "xPos": 1000,
                        "yPos": 0,
                        "length": 2000
                    }
                ],
                "coins": [
                    {
                        "name": "c1",
                        "type": "coinType1",
                        "xPos": 1200,
                        "yPos": 500
                    },
                    {
                        "name": "c2",
                        "type": "coinType1",
                        "xPos": 700,
                        "yPos": 400
                    }
                ],
                "enemies": [
                    {
                        "name": "slime1",
                        "type": "slime",
                        "xPos": 2500,
                        "yPos": 50
                    },
                    {
                        "name": "goblin1",
                        "type": "goblin",
                        "xPos": 1500,
                        "yPos": 50
                    }
                ],
                "buttons": [
                    {
                        "name": "button1",
                        "type": "buttonType1",
                        "xPos": 100,
                        "yPos": 100
                    }
                ],
                "checks": [
                    {
                        "conditions": {
                            "opA": 
                                {
                                    "opA": "coins",
                                    "op": ">=",
                                    "opB": 2
                                },
                            "op": "OR",
                            "opB":
                                {
                                    "opA": "buttonType1",
                                    "op": "buttonCheck",
                                    "opB": null
                                }
                            },
                        "actions": [ {
                            "effect": "add",
                            "category": "door",
                            "payload": ["d1spawn", "doorType1", 100, 90, "level2 door2"]
                        }, 
                        {
                            "effect": "remove",
                            "category": "platform",
                            "payload": ["platform1"]
                        },
                        {
                            "effect": "add",
                            "category": "enemy",
                            "payload": ["g1spawn", "goblin", 10, 110]
                        }
                    ]   
                    }
                ]
            },
            {
                "name": "level2",
                "background": "https://media.discordapp.net/attachments/1019466411044765716/1029542966185971822/bg.png",
                "height": 900,
                "width": 2000,
                "playerStartX": 500,
                "playerStartY": 250,
                "doors": [
                    {
                        "name": "door2",
                        "type": "doorType1",
                        "goesTo": "level1 door1",
                        "xPos": 200,
                        "yPos": 50
                    },
                    {
                        "name": "door3",
                        "type": "doorType2",
                        "goesTo": "win",
                        "xPos": 1550,
                        "yPos": 50
                    }
                ],
                "platforms": [
                    {
                        "name": "plat4",
                        "type": "platformType1",
                        "xPos": 900,
                        "yPos": 300,
                        "length": 400
                    },
                    {
                        "name": "plat5",
                        "type": "platformType1",
                        "xPos": 500,
                        "yPos": 200,
                        "length": 400
                    },
                    {
                        "name": "plat6",
                        "type": "platformType1",
                        "xPos": 1700,
                        "yPos": 500,
                        "length": 100
                    },
                    {
                        "name": "plat7",
                        "type": "platformType1",
                        "xPos": 1300,
                        "yPos": 650,
                        "length": 100
                    },
                    {
                        "name": "plat8",
                        "type": "platformType1",
                        "xPos": 750,
                        "yPos": 800,
                        "length": 200
                    }
                ],
                "terrain": [
                    {
                        "name": "terrain1",
                        "type": "terrainType1",
                        "xPos": 1500,
                        "yPos": 300,
                        "length": 500
                    },
                    {
                        "name": "terrain2",
                        "type": "terrainType1",
                        "xPos": 0,
                        "yPos": 0,
                        "length": 500
                    },
                    {
                        "name": "terrain3",
                        "type": "terrainType1",
                        "xPos": 1000,
                        "yPos": 0,
                        "length": 2000
                    }
                ],
                "coins": [
                    {
                        "name": "c1",
                        "type": "coinType1",
                        "xPos": 1200,
                        "yPos": 500
                    },
                    {
                        "name": "c2",
                        "type": "coinType1",
                        "xPos": 700,
                        "yPos": 400
                    }
                ],
                "enemies": [
                    {
                        "name": "goblin2",
                        "type": "goblin",
                        "xPos": 1800,
                        "yPos": 350
                    }
                ],
                "buttons": [
                    {
                        "name": "red1",
                        "type": "buttonType1",
                        "xPos": 750,
                        "yPos": 850
                    }
                ],
                "checks": []
            }
        ]
    }
}

new evaluator(eval);