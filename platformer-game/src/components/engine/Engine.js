import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
} from '../../data/constants';
import Game from '../entities/game';

let gameData = {};
let initialState = {};

const loadGame = (setState, setStart, propsGameData) => {
    delete require.cache['./src/data/gameData.json'];
    gameData = propsGameData;

    if (Object.prototype.hasOwnProperty.call(gameData, "game")) {
        gameData = gameData['game'];
        initialState = {
            stageX: 0,
            stageY: 0,
            playerX: gameData["level1"].playerStartX,
            playerY: gameData["level1"].playerStartY,
            playerXDirection: '',
            level: gameData["level1"],
            buttonMap: new Map(),
            cumCoins: 0,
            status: 'start',
        };
    
        setState(initialState);
        setStart(true);
        return "";
    } else {
        setStart(false);
        return gameData['error'];
    }
}

function CreateEngine(setState, initialState) {
    this.level = initialState.level;
    this.game = initialState.status;

    // current stage position
    this.stageXPos = initialState.stageX;
    this.stageYPos = initialState.stageY;

    this.inAir = true;
    this.playerYAcceleration = -1; // gravity, in m/s^2
    // every second, add this onto the velocity

    this.playerYVelocity = 0; // player speed, in m/s
    // every second, add this onto the y position

    // when the player is on a surface, set the velocity to be 0
    // when a jump is triggered, add a positive amount to the Y velocity

    this.playerTerminalVelocity = -40; // the maximum velocity a human can have
    // do not allow the player to be faster than this

    this.cumCoins = initialState.cumCoins;
    this.buttonMap = initialState.buttonMap;
    this.jump = false;
    this.xDirection = initialState.playerXDirection;

    this.playerXPos = initialState.playerX;
    this.playerYPos = initialState.playerY;

    const applyYAcceleration = () => {
        if ((this.playerYVelocity + this.playerYAcceleration) < this.playerTerminalVelocity){
            this.playerYVelocity = this.playerTerminalVelocity;
        } else {
            this.playerYVelocity += this.playerYAcceleration;
        }
    }

    const applyYVelocity = () => {
        if (this.playerYPos + this.playerYVelocity < 0) {
            this.game = 'fail';
        } else if (checkPlatform(this.playerYPos + this.playerYVelocity)) {
            this.playerYPos =  checkPlatform(this.playerYPos + this.playerYVelocity);
            this.playerYVelocity = 0;
            this.inAir = false;
        } else if (checkYTerrain(this.playerYPos + this.playerYVelocity)) {
            this.playerYPos = checkYTerrain(this.playerYPos + this.playerYVelocity);
            if (this.playerYVelocity < 0) {
                this.inAir = false;
            }
            this.playerYVelocity = 0;
        } else {
            this.playerYPos += this.playerYVelocity;
        }
    }

    const checkYTerrain = (newYPos) => {
        const charLeftXPos = this.playerXPos;
        const charRightXPos = this.playerXPos + charWidth;
        const charCurrentYPos = this.playerYPos;
        const charCurrentHeadYPos = this.playerYPos + charHeight;

        for (let t of this.level.terrain) {
            let terrainSurfaceYPos = t["yPos"] + terrainHeight;
            let terrainBottomYPos = t["yPos"];
            if (charRightXPos >= t["xPos"]
                && charLeftXPos <= t["xPos"] + t["length"]) {
                if (this.playerYVelocity < 0
                    && charCurrentYPos >= terrainSurfaceYPos
                    && newYPos <= terrainSurfaceYPos) {
                    return terrainSurfaceYPos;
                } else if (this.playerYVelocity > 0
                    && charCurrentHeadYPos <= terrainBottomYPos
                    && (newYPos + charHeight) >= terrainBottomYPos) {
                    return terrainBottomYPos - charHeight;
                }
            }
        }
        return false;
    }

    // returns false if the player is not about to go through a platform, else return the y position of the surface of the platform
    const checkPlatform = (newYPos) => {
        const charLeftXPos = this.playerXPos;
        const charRightXPos = this.playerXPos + charWidth;
        const charCurrentYPos = this.playerYPos;

        for (let platform of this.level.platforms) {
            let platformSurfaceYPos = platform["yPos"] + platformHeight;
            if (this.playerYVelocity < 0
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
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;

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
                    this.playerXPos = this.level.playerStartX;
                    this.playerYPos = this.level.playerStartY;
                }
            }
        });
    };

    const checkCoins = () => {
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;
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
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;
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
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;

        // if the char has passed all enemies
        if (charXPos > this.level.enemies[this.level.enemies.length - 1] + 200) {
            this.game = 'win';
        }

        this.level.enemies.forEach((enemy) => {
            // if char hits an enemy
            if (charXPos + charWidth >= enemy
                && charYPos <= enemyHeight
                && charYPos + charHeight >= 0
                && charXPos <= enemy + enemyWidth
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

    const doMove = () => {
        if (this.xDirection === 'right') {
            if (checkXTerrain(this.playerXPos + tile)){
                this.playerXPos = checkXTerrain(this.playerXPos + tile);
            } else {
                this.playerXPos += tile;
            }
        } 
        else if (this.xDirection === 'left') {
            if (checkXTerrain(this.playerXPos - tile)){
                this.playerXPos = checkXTerrain(this.playerXPos - tile);
            } else {
                this.playerXPos -= tile;
            }
        }
        this.playerXPos = Math.max(this.playerXPos, 0);

        if (this.playerXPos + charWidth > this.level.width) {
            this.playerXPos = this.level.width - charWidth;
        }
    };

    const moveCamera = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        
        this.stageXPos = Math.max(this.playerXPos - screenWidth / 2, 0);
        this.stageYPos = Math.max(this.playerYPos - screenHeight / 2, 0);

        if (this.stageXPos + screenWidth > this.level.width) {
            this.stageXPos = this.level.width - screenWidth;
        }

        if (this.stageYPos + screenHeight > this.level.height) {
            this.stageYPos = Math.max(this.level.height - screenHeight, 0);

        }
    };

    const checkXTerrain = (newXPos) => {
        for (let t of this.level.terrain) {
            let terrainYPos = t["yPos"];
            let terrainYSurface = t["yPos"] + terrainHeight;
            let playerYTopPos = this.playerYPos + charHeight;
            if ( // TODO: player is at correct y value
                (this.playerYPos >= terrainYPos && this.playerYPos < terrainYSurface)
                || (playerYTopPos <= terrainYSurface && playerYTopPos > terrainYPos)
                || (this.playerYPos >= terrainYPos && playerYTopPos <= terrainYSurface)
            ) {
                let terrainLeftXPos = t["xPos"];
                let terrainRightXPos = t["xPos"] + t["length"];
                if (this.xDirection === 'right'
                    && (newXPos + charWidth) > terrainLeftXPos
                    && this.playerXPos < terrainLeftXPos) { // moving right, we only want to check the left wall
                    return terrainLeftXPos - charWidth;
                } else if (this.xDirection === 'left'
                    && newXPos < terrainRightXPos
                    && this.playerXPos > terrainLeftXPos) { // moving left
                    return terrainRightXPos;
                }
            }
        }
        return false;
    }

    // function that will be continuously ran
    this.repaint = () => {
        doMove();
        // check and perform jump
        doJump();

        applyYAcceleration();
        applyYVelocity();

        moveCamera();

        // check if char has hit a enemy
        checkEnemies();

        checkDoors();
        checkCoins();
        checkButtons();

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            stageY: this.stageYPos,
            playerX: this.playerXPos,
            playerY: this.playerYPos,
            playerXDirection: this.xDirection,
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
            this.xDirection = '';
            this.playerYPos = 0;
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
            this.xDirection = direction;
        },
    });
}

export default function Engine(props) {
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
                setErrorTxt(loadGame(setGameState, setStart, props.gameData));
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
            setErrorTxt(loadGame(setGameState, setStart, props.gameData));
        }

        if (gameState.status === 'win' && started) {
            setStarted(false);
            alert('You won! Play again?');
            setErrorTxt(loadGame(setGameState, setStart, props.gameData));
        }
    });

    return ( 
        <>
            {!started && 
            <div className="startContainer">
                <div className='startScreen' >
                    <div className="introText">
                        Your game has been generated! Press SPACE to load game <br/><br/> Controls: <br/>WASD to move, SPACE to jump <br /> 
                    </div>
                    <div className="errorText"> {errorTxt} </div>
                </div>
            </div>
                
            }
            {started && <Game gameState={gameState} /> }
        </>
    );
}


Engine.propTypes = {
    gameData: PropTypes.object
}