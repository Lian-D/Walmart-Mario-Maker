import React, { useState, useEffect } from 'react';
import styles from './engine.module.scss';
import { useEvent } from '../../hooks';
import Door from '../entities/door';
import Platform from '../entities/platform';
import Terrain from "../entities/terrain";
import Coin from "../entities/coin";

const ENEMIES = [
    250,
    390,
];

// Defining platforms here for now, but we can probably pass this in as a prop later

const PLATFORMS = [
    {
        "xPos": 100,
        "yPos": 30,
        "length": 50
    },
    {
        "xPos": 50,
        "yPos": 20,
        "length": 50 
    },
    {
        "xPos": 200,
        "yPos": 30,
        "length": 50
    }
];

const TERRAIN = [
    {
        "xPos": 150,
        "yPos": 30,
        "length": 50
    },
    {
        "xPos": 0,
        "yPos": 0,
        "length": 50
    },
    {
        "xPos": 100,
        "yPos": 0,
        "length": 200
    }
]

const DOORS = [
    {
        "xPos": 200,
        "yPos": 0,
        "height": 130,
        "width": 110,
        "isOpen": true,
        "name": "door1"
    }
];

const COINS = [
    {
        "xPos": 120,
        "yPos": 50,
        "height": 30,
        "width": 30,
        "name": "c1"
    },
    {
        "xPos": 70,
        "yPos": 40,
        "height": 30,
        "width": 30,
        "name": "c2"
    }
];

const charWidth = 100;
const charHeight = 100;

const platformHeight = 25;
const terrainHeight = 50;

const enemyWidth = 80;
const enemyHeight = 200;

function CreateEngine(setState) {
    this.settings = {
        tile: 10, // width of one tile
    };

    // current stage position
    this.game = 'start';
    this.stageXPos = 0;

    this.inAir = true;
    this.playerYAcceleration = -1; // gravity, in m/s^2
    // every second, add this onto the velocity

    this.playerYVelocity = 0; // player speed, in m/s
    // every second, add this onto the y position

    // when the player is on a surface, set the velocity to be 0
    // when a jump is triggered, add a positive amount to the Y velocity

    this.playerTerminalVelocity = -40; // the maximum velocity a human can have
    // do not allow the player to be faster than this

    this.cumCoins = 0;
    this.jump = false;
    this.xDirection = '';

    this.playerXPos = 200;
    this.playerYPos = 100;
    this.enemies = ENEMIES.map(b => (b * this.settings.tile));
    this.platforms = PLATFORMS.map(p => (
        {
            "xPos": p["xPos"] * this.settings.tile,
            "yPos": p["yPos"] * this.settings.tile,
            "length": p["length"] * this.settings.tile,
        }
    ));
    this.terrain = TERRAIN.map(t => (
        {
            "xPos": t["xPos"] * this.settings.tile,
            "yPos": t["yPos"] * this.settings.tile,
            "length": t["length"] * this.settings.tile,
        }
    ));
    this.doors = DOORS.map(d => ({
        "xPos": d["xPos"] * this.settings.tile,
        "yPos": d["yPos"] * this.settings.tile,
        "height": d["height"],
        "width": d["width"],
        "isOpen": d["isOpen"],
        "name": d["name"],
    }));

    this.coins = COINS.map(c => (
        {
        "xPos": c["xPos"] * this.settings.tile,
        "yPos": c["yPos"] * this.settings.tile,
        "height": c["height"],
        "width": c["width"],
        "name": c["name"],
        }
    ));

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

        for (let t of this.terrain) {
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

        for (let platform of this.platforms) {
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

        this.doors.forEach((door) => {
            if (
                charXPos + charWidth >= door.xPos + (door.width * 0.5)

                && charYPos <= door.yPos + (door.height * 0.5)
                && charYPos + charHeight >= door.yPos
                && charXPos <= door.xPos + door.width
                && door.isOpen
            ) {
                this.game = 'win';
            }
        });
    };

    const checkCoins = () => {
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;
        let coinsIndex = 0;
        this.coins.forEach((coin) => {
            if (
                charXPos + charWidth >= coin.xPos + (coin.width * 0.5)
                && charYPos <= coin.yPos + (coin.height * 0.5)
                && charYPos + charHeight >= coin.yPos
                && charXPos <= coin.xPos + coin.width
            ) {
                this.coins.splice(coinsIndex, 1);
                this.cumCoins++;
//                alert(this.cumCoins);
            }
            coinsIndex++;
        });
    };

    const checkEnemies = () => {
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;

        // if the char has passed all enemies
        if (charXPos > this.enemies[this.enemies.length - 1] + 200) {
            this.game = 'win';
        }

        this.enemies.forEach((enemy) => {
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
            if (checkXTerrain(this.playerXPos + this.settings.tile)){
                this.playerXPos = checkXTerrain(this.playerXPos + this.settings.tile);
            } else {
                this.playerXPos += this.settings.tile;
            }
        } 
        else if (this.xDirection === 'left') {
            if (checkXTerrain(this.playerXPos - this.settings.tile)){
                this.playerXPos = checkXTerrain(this.playerXPos - this.settings.tile);
            } else {
                this.playerXPos -= this.settings.tile;
            }
        }
        this.stageXPos = Math.max(this.playerXPos - 700, 0);
        this.playerXPos = Math.max(this.playerXPos, 0);
        // add another check for the max width of the stage when we get around to defining it
    };

    const checkXTerrain = (newXPos) => {
        for (let t of this.terrain) {
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

        // check if char has hit a enemy
        checkEnemies();

        checkDoors();
        checkCoins();

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            playerX: this.playerXPos,
            playerY: this.playerYPos,
            enemies: this.enemies,
            platforms: this.platforms,
            terrain: this.terrain,
            doors: this.doors,
            coins: this.coins,
            status: this.game,
        });

        // stop the game if the game var has been set to false
        if (this.game !== 'start') {
            // reset and stop
            this.game = 'start';
            this.stageXPos = 0;
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

const initialState = {
    stageX: 0,
    playerX: 200,
    playerY: 0,
    enemies: [],
    platforms: [],
    terrain: [],
    doors: [],
    coins: [],
    status: 'start',
};

export default function Engine() {
    // game state
    const [gameState, setGameState] = useState(initialState);

    // trigger game to start
    const [start, setStart] = useState(false);

    // if game is running
    const [started, setStarted] = useState(false);

    // instance of game engine
    const [engine, setEngine] = useState(null);

    const handleKeyPress = (e) => {
        // the ' ' char actually represents the space bar key.
        if (e.key === ' ') {
            // start the game when the user first presses the space bar
            if (!started && !start) {
                setStart(true);
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
                ),
            );
        }

        if (gameState.status === 'fail' && started) {
            setStarted(false);
            alert('You lost! Try again?');
            setGameState(initialState);
            setStart(true);
        }

        if (gameState.status === 'win' && started) {
            setStarted(false);
            alert('You won! Play again?');
            setGameState(initialState);
            setStart(true);
        }
    });

    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.stage}
                style={{
                    transform: `translate(-${gameState.stageX}px, 0px)`, // move stage
                }}
            >
                <span
                    className={styles.character}
                    style={{
                        transform: `translate(${gameState.playerX}px, -${gameState.playerY}px)`, // move char in opposite direction
                        height: charHeight,
                        width: charWidth,
                    }}
                />
                {
                    gameState.enemies.map(
                        (enemy,index) => (
                            <span
                                className={styles.enemy}
                                key={index}
                                style={{
                                    transform: `translate(${enemy}px, 0px)`, // move stage
                                    height: enemyHeight,
                                    width: enemyWidth,
                                }}
                            />
                        ),
                    )
                }
                {
                    gameState.platforms.map(
                        (platform, index) => (
                            <Platform
                                xPos={platform["xPos"]}
                                yPos={platform["yPos"]}
                                length={platform["length"]}
                                height={platformHeight}
                                key={index}
                                name={`${index}`}
                            />
                        )
                    )   
                }
                {
                    gameState.terrain.map(
                        (platform, index) => (
                            <Terrain
                                xPos={platform["xPos"]}
                                yPos={platform["yPos"]}
                                length={platform["length"]}
                                height={terrainHeight}
                                key={index}
                                name={`${index}`}
                            />
                        )
                    )
                }
                {
                    gameState.doors.map(
                        door => (
                            <Door 
                                height={door["height"]} 
                                width={door["width"]} 
                                xPos={door["xPos"]} 
                                yPos={door["yPos"]} 
                                key={door["name"]}
                            />
                        )
                    )
                }
                {
                    gameState.coins.map(
                        coin => (
                            <Coin
                                height={coin["height"]}
                                width={coin["width"]}
                                xPos={coin["xPos"]}
                                yPos={coin["yPos"]}
                                key={coin["name"]}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}