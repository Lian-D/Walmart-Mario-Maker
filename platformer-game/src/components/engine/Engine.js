import React, { useState, useEffect } from 'react';
import { useEvent } from '../../hooks';
import {
    charWidth, 
    charHeight, 
    platformHeight, 
    terrainHeight, 
    tile, 
    enemyWidth, 
    enemyHeight, 
    doorWidth,
    doorHeight,
    terminalVelocity,
} from '../../data/constants';
import Game from '../entities/game';

let gameData = {};
let initialState = {};

const loadGame = (setState, setStart) => {
    delete require.cache['./src/data/gameData.json'];
    gameData = require('../../data/gameData.json');

    if (gameData.game) {
        gameData = gameData['game'];

        // grouping player properties together so I can reuse some functions
        let player = {
            xPos: gameData["level1"].playerStartX,
            yPos: gameData["level1"].playerStartY,
            xDirection: '',
            height: charHeight,
            width: charWidth,
        };

        initialState = {
            stageX: 0,
            stageY: 0,
            player: player,
            level: gameData["level1"],
            buttonMap: new Map(),
            cumCoins: 0,
            status: 'start',
        };

        loadLevel(initialState.level);
    
        setState(initialState);
        setStart(true);
        return "";
    } else {
        setStart(false);
        return gameData['error'];
    }
}

const loadLevel = (level) => {
    // do any mappings for level objects here
    level.enemies = level.enemies.map(
        enemy => ({
            ...enemy, 
            width: enemyWidth,
            height: enemyHeight
        }
    ));
};

function CreateEngine(setState, initialState) {
    this.level = initialState.level;
    this.game = initialState.status;

    // current stage position
    this.stageXPos = initialState.stageX;
    this.stageYPos = initialState.stageY;

    this.player = initialState.player;

    this.jump = false;
    this.inAir = true;
    this.playerYAcceleration = -1; // gravity, in m/s^2
    // every second, add this onto the velocity

    this.playerYVelocity = 0; // player speed, in m/s
    // every second, add this onto the y position

    // when the player is on a surface, set the velocity to be 0
    // when a jump is triggered, add a positive amount to the Y velocity

    this.cumCoins = initialState.cumCoins;
    this.buttonMap = initialState.buttonMap;

    const applyYAcceleration = () => {
        if ((this.playerYVelocity + this.playerYAcceleration) < terminalVelocity){
            this.playerYVelocity = terminalVelocity;
        } else {
            this.playerYVelocity += this.playerYAcceleration;
        }
    }

    const applyYVelocity = () => {
        let nextPos = this.player.yPos + this.playerYVelocity;

        if (nextPos + this.player.height < 0) {
            this.game = 'fail';
        } else if (checkPlatform(this.player, nextPos, this.playerYVelocity)) {
            this.player.yPos = checkPlatform(this.player, nextPos, this.playerYVelocity);
            this.playerYVelocity = 0;
            this.inAir = false;
        } else if (checkYTerrain(this.player, nextPos, this.playerYVelocity)) {
            this.player.yPos = checkYTerrain(this.player, nextPos, this.playerYVelocity);
            if (this.playerYVelocity < 0) {
                this.inAir = false;
            }
            this.playerYVelocity = 0;
        } else {
            this.player.yPos += this.playerYVelocity;
        }
    }

    const checkYTerrain = (entity, newYPos, velocity) => {
        const charLeftXPos = entity.xPos;
        const charRightXPos = entity.xPos + entity.width;
        const charCurrentYPos = entity.yPos;
        const charCurrentHeadYPos = entity.yPos + entity.height;

        for (let t of this.level.terrain) {
            let terrainSurfaceYPos = t["yPos"] + terrainHeight;
            let terrainBottomYPos = t["yPos"];
            if (charRightXPos >= t["xPos"]
                && charLeftXPos <= t["xPos"] + t["length"]) {
                if (velocity < 0
                    && charCurrentYPos >= terrainSurfaceYPos
                    && newYPos <= terrainSurfaceYPos) {
                    return terrainSurfaceYPos;
                } else if (velocity > 0
                    && charCurrentHeadYPos <= terrainBottomYPos
                    && (newYPos + charHeight) >= terrainBottomYPos) {
                    return terrainBottomYPos - charHeight;
                }
            }
        }
        return false;
    }

    // returns false if the player is not about to go through a platform, else return the y position of the surface of the platform
    const checkPlatform = (entity, newYPos, velocity) => {
        const charLeftXPos = entity.xPos;
        const charRightXPos = entity.xPos + entity.width;
        const charCurrentYPos = entity.yPos;

        for (let platform of this.level.platforms) {
            let platformSurfaceYPos = platform["yPos"] + platformHeight;
            if (velocity < 0
                && charRightXPos >= platform["xPos"]
                && charLeftXPos <= platform["xPos"] + platform["length"]
                && charCurrentYPos >= platformSurfaceYPos
                && newYPos <= platformSurfaceYPos 
            ){
                return platformSurfaceYPos;
            }
        }
        return false;
    }

    const checkDoors = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;

        this.level.doors.forEach((door) => {
            if (
                charXPos + charWidth >= door.xPos + (doorWidth * 0.5)
                && charYPos <= door.yPos + (doorHeight * 0.5)
                && charYPos + charHeight >= door.yPos
                && charXPos <= door.xPos + doorWidth
                && this.buttonMap.has(door["key"])
            ) {
                if (door.goesTo === 'win') {
                    this.game = 'win';
                } else {
                    this.level = gameData[door.goesTo];
                    loadLevel(this.level);
                    this.player.xPos = this.level.playerStartX;
                    this.player.yPos = this.level.playerStartY;
                }
            }
        });
    };

    const checkCoins = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;
        let coinsIndex = 0;
        this.level.coins.forEach((coin) => {
            if (
                charXPos + charWidth >= coin.xPos + (coin.width * 0.5)
                && charYPos <= coin.yPos + (coin.height * 0.5)
                && charYPos + charHeight >= coin.yPos
                && charXPos <= coin.xPos + coin.width
            ) {
                this.level.coins.splice(coinsIndex, 1);
                this.cumCoins++;
            }
            coinsIndex++;
        });
    };

    const checkButtons = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;
        let buttonIndex = 0;
        this.level.buttons.forEach((button) => {
            if (
                charXPos + charWidth >= button.xPos + (button.width * 0.5)
                && charYPos <= button.yPos + (button.height * 0.5)
                && charYPos + charHeight >= button.yPos
                && charXPos <= button.xPos + button.width
            ) {
                this.level.buttons.splice(buttonIndex, 1);
                if (!this.buttonMap.get(button.name)) {
                    this.buttonMap.set(button.name, "triggered");
                }
            }
        });
    };

    const checkEnemies = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;

        this.level.enemies.forEach((enemy) => {
            // if char hits an enemy
            if (charXPos + charWidth >= enemy.xPos + (enemy.width * 0.5)
                && charYPos <= enemy.yPos + (enemy.height * 0.5)
                && charYPos + charHeight >= enemy.yPos
                && charXPos <= enemy["xPos"] + enemyWidth
            ) {
                this.game = 'fail';
            }
        });
    };

    const doJump = () => {
        if (this.jump) {
            if (this.inAir === false) {
                this.playerYVelocity += 25;
                this.inAir = true;
                this.jump = false;
            }
        }
    };

    const moveXPos = (entity, speedMultiplier) => {
        let newPos = entity["xPos"];
        if (entity.xDirection === 'right') {
            newPos = entity["xPos"] + tile * speedMultiplier;
        } 
        else if (entity.xDirection === 'left') {
            newPos = entity["xPos"] - tile * speedMultiplier;
        }

        newPos = checkXTerrain(entity, newPos) ? checkXTerrain(entity, newPos) : newPos;
        newPos = Math.max(newPos, 0);

        if (newPos + entity.width > this.level.width) {
            newPos = this.level.width - entity.width;
        }

        entity.xPos = newPos;
    };

    const movePlayer = () => {
        moveXPos(this.player, 1);

        // check and perform jump
        doJump();
        applyYAcceleration();
        applyYVelocity();
    }

    const moveEnemies = () => {
        let enemyIndex = 0;
        this.level.enemies.forEach(enemy => {
            if (enemy["behaviour"] === "FOLLOW" 
                && Math.abs(this.player.xPos - enemy.xPos) < window.innerWidth / 2) {
                if (this.player.xPos > enemy["xPos"]) {
                    enemy["xDirection"] = "right";
                } 
                else if (this.player.xPos < enemy["xPos"]) {
                    enemy["xDirection"] = "left";
                } else {
                    enemy["xDirection"] = "";
                }

                moveXPos(enemy, 0.5);
                applyEnemyYVelocity(enemy, enemyIndex);
            }
            enemyIndex++;
        });
    };

    const applyEnemyYVelocity = (enemy, enemyIndex) => {
        if (enemy.velocity === undefined) {
            enemy.velocity = 0;
        }
        let newVelocity = enemy.velocity - tile;
        let nextYPos = enemy.yPos + newVelocity;

        if (checkPlatform(enemy, nextYPos, newVelocity)) {
            enemy.yPos = checkPlatform(enemy, nextYPos, newVelocity);
            enemy.velocity = Math.max(terminalVelocity, newVelocity);
        } else if (checkYTerrain(enemy, nextYPos, newVelocity)) {
            enemy.yPos = checkYTerrain(enemy, nextYPos, newVelocity);
            enemy.velocity = Math.max(terminalVelocity, newVelocity);
        } else {
            enemy.yPos = nextYPos;
            enemy.velocity = 0;
        }

        if (enemy.yPos + enemy.height / 2 < 0) {
            this.level.enemies.splice(enemyIndex, 1);
        } 
    }

    const moveCamera = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        
        this.stageXPos = Math.max(this.player.xPos - screenWidth / 2, 0);
        this.stageYPos = Math.max(this.player.yPos - screenHeight / 2, 0);

        if (this.stageXPos + screenWidth > this.level.width) {
            this.stageXPos = this.level.width - screenWidth;
        }

        if (this.stageYPos + screenHeight > this.level.height) {
            this.stageYPos = Math.max(this.level.height - screenHeight, 0);

        }
    };

    const checkXTerrain = (entity, newXPos) => {
        for (let t of this.level.terrain) {
            let terrainYPos = t["yPos"];
            let terrainYSurface = t["yPos"] + terrainHeight;
            let entityYTopPos = entity.yPos + charHeight;
            if ( // TODO: player is at correct y value
                (entity.yPos >= terrainYPos && entity.yPos < terrainYSurface)
                || (entityYTopPos <= terrainYSurface && entityYTopPos > terrainYPos)
                || (entity.yPos >= terrainYPos && entityYTopPos <= terrainYSurface)
            ) {
                let terrainLeftXPos = t["xPos"];
                let terrainRightXPos = t["xPos"] + t["length"];
                if (entity.xDirection === 'right'
                    && (newXPos + charWidth) > terrainLeftXPos
                    && entity.xPos < terrainLeftXPos) { // moving right, we only want to check the left wall
                    return terrainLeftXPos - charWidth;
                } else if (entity.xDirection === 'left'
                    && newXPos < terrainRightXPos
                    && entity.xPos > terrainLeftXPos) { // moving left
                    return terrainRightXPos;
                }
            }
        }
        return false;
    }

    // function that will be continuously ran
    this.repaint = () => {
        movePlayer();

        moveCamera();

        moveEnemies();

        // check if char has hit a enemy
        checkEnemies();

        checkDoors();
        checkCoins();
        checkButtons();

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            stageY: this.stageYPos,
            player: {
                ...initialState.player,
                xPos: this.player.xPos,
                yPos: this.player.yPos,
                xDirection: this.player.xDirection
            },
            level: this.level,
            buttonMap: this.buttonMap,
            cumCoins: this.cumCoins,
            status: this.game,
        });

        // stop the game if the game var has been set to false
        if (this.game !== 'start') {
            // reset and stop
            this.game = 'start';
            this.stageXPos = 0;
            this.stageYPos = 0;
            this.jump = false;
            this.player.xDirection = '';
            this.player.yPos = 0;
            return null;
        }

        // start repaint on next frame
        return requestAnimationFrame(this.repaint);
    };

    // trigger initial paint
    this.repaint();
    return () => ({
        jump: () => {
            // if jump is not active, trigger jump
            if (!this.jump && this.playerYVelocity === 0) {
                this.jump = true;
            }
        },
        move: (direction) => {
            this.player.xDirection = direction;
        },
    });
}

export default function Engine() {
    // game state
    const [gameState, setGameState] = useState(initialState);

    // trigger game to start
    const [start, setStart] = useState(false);

    // if game is running
    const [started, setStarted] = useState(false);

    // instance of game engine
    const [engine, setEngine] = useState(null);

    // record any error from the JSON
    const [errorTxt, setErrorTxt] = useState("");

    const handleKeyPress = (e) => {
        // the ' ' char actually represents the space bar key.
        if (e.key === ' ') {
            // start the game when the user first presses the space bar
            if (!started && !start) {
                setErrorTxt(loadGame(setGameState, setStart));
            }

            // if the game has not been initialized return
            if (engine === null) return;

            // otherwise jump
            engine.jump();
        }
        else if (e.key === 'a' || e.key === 'd') {
            if (engine === null) return;
            engine.move('');
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'd') {
            if (engine === null) return;
            engine.move('right');
        }
        else if (e.key === 'a') {
            if (engine === null) return;
            engine.move('left');
        }
    };

    useEvent('keyup', handleKeyPress);
    useEvent('keydown', handleKeyDown);

    useEffect(() => {
        if (start) {
            setStarted(true);
            setStart(false);
            // create a new engine and save it to the state to use
            setEngine(
                new CreateEngine(
                    // set state
                    state => setGameState(state),
                    initialState
                ),
            );
        }

        if (gameState.status === 'fail' && started) {
            setStarted(false);
            alert('You lost! Try again?');
            setErrorTxt(loadGame(setGameState, setStart));
        }

        if (gameState.status === 'win' && started) {
            setStarted(false);
            alert('You won! Play again?');
            setErrorTxt(loadGame(setGameState, setStart));
        }
    });

    return ( 
        <>
            {!started && 
                <div className='startScreen' >
                    <div className="introText">
                        Controls:<br/>WASD to move, SPACE to jump <br/><br/> Press Space to load game
                    </div>
                    <div className="errorText"> {errorTxt} </div>
                </div>
            }
            {started && <Game gameState={gameState} /> }
        </>
    );
}