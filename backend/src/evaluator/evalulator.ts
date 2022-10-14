export default class evaluator {

    private parsedData: any;
    private error: string = "";

    constructor(data: AnalyserOptions){
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

        if (validEnemyType && validTerrainType 
            && validatePlatformType && validateDoorType
            && validateCoinType && validateButtonType) {
                return true;
            }
        return false;
    }

    validateEnemyType(enemiesTypes: any) {
        for (const eType in enemiesTypes) {
            let enemy = enemiesTypes[eType];

            //Must have either colour or image
            if ((enemy.image != undefined) || (
                enemy.colour != undefined)) {
                    this.error+`image or colour must be defined in enemy: ${eType}`; 
                    return false;
            }

            //Critical values are behavior and speed;
            if ((enemy.behaviour != undefined) &&
             (enemy.speed != undefined)) {
                this.error+`enemy missing behavior or speed field in enemy: ${eType}`; 
                return false;
             }
        }
        return true;
    }

    validateTerrainType(terrainTypes: any) {
        for (const tType in terrainTypes) {
            let terrain = terrainTypes[tType];

            //Must have either colour or image
            if ((terrain.image != undefined) || (
                terrain.colour != undefined)) {
                    this.error+`image or colour must be defined in terrain: ${tType}`; 
                    return false;
            }
        }
        return true;
    }

    validatePlatformType(platformTypes: any) {
        for (const pType in platformTypes) {
            let platform = platformTypes[pType];
            
            //Must have either colour or image
            if ((platform.image != undefined) || (
                platform.colour != undefined)) {
                    this.error+`image or colour must be defined in platform: ${pType}`; 
                    return false;
            }
        }
        return true;
    }

    validateDoorType(doorTypes: any) {
        for (const dType in doorTypes) {
            let door = doorTypes[dType];

            // Must have image or key
            if (door.image != undefined
                || door.key != undefined) {
                    this.error+`image or key must be defined in door: ${dType}`;
                    return false;
                }
        }
        return true;
    }

    validateCoinType(coinTypes: any) {
        for (const cType in coinTypes) {
            let coin = coinTypes[cType];

            // Must have image or value
            if (coin.image != undefined
                || coin.value != undefined) {
                    this.error+`image or colour must be defined in coin: ${cType}`;
                    return false;
                }
        }
        return true;
    }

    validateButtonType(buttonTypes: any) {
        for (const bType in buttonTypes) {
            let button = buttonTypes[bType];

            // Must have image or value
            if (button.image != undefined) {
                this.error+`image must be defined in button: ${bType}`;
                return false;
            }
        }
        return true;

    }

    validateLevels(terrainTypes: any) {
        return false;

    }

    validateLevelDoors(terrainTypes: any) {
        return false;

    }

    validateLevelPlatforms(terrainTypes: any) {
        return false;

    }

    validateLevelTerrain(terrainTypes: any) {
        return false;

    }

    validateLevelCoins(terrainTypes: any) {
        return false;

    }

    validateLevelEnemies(terrainTypes: any) {
        return false;

    }

    validateLevelButtons(terrainTypes: any) {
        return false;

    }

    validateLevelChecks(terrainTypes: any) {
        return false;

    }
}