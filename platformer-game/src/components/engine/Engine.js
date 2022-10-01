import React, { useState, useEffect } from 'react';
import styles from './engine.module.scss';
import { useEvent } from '../../hooks';
import Door from '../entities/door';
import Platform from '../entities/platform';
import Character from '../entities/character';

const ENEMIES = [
    140,
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
    }
];

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

const charWidth = 100;
const charHeight = 100;

const platformHeight = 25;

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


    this.jump = false;
    this.xDirection = '';

    this.playerXPos = 200;
    this.playerYPos = 0;
    this.enemies = ENEMIES.map(b => (b * this.settings.tile));
    this.platforms = PLATFORMS.map(p => (
        {
            "xPos": p["xPos"] * this.settings.tile,
            "yPos": p["yPos"] * this.settings.tile,
            "length": p["length"] * this.settings.tile,
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

    const applyYAcceleration = () => {
        if ((this.playerYVelocity + this.playerYAcceleration) < this.playerTerminalVelocity){
            this.playerYVelocity = this.playerTerminalVelocity;
        } else {
            this.playerYVelocity += this.playerYAcceleration;
        }
    }

    const applyYVelocity = () => {
        if (this.playerYPos + this.playerYVelocity < 0) {
            this.playerYpos = 0;
            this.playerYVelocity = 0;
            this.inAir = false;
        } else if (checkPlatform(this.playerYPos + this.playerYVelocity)) {
            this.playerYPos =  checkPlatform(this.playerYPos + this.playerYVelocity);
            this.playerYVelocity = 0;
            this.inAir = false;
        } else {
            this.playerYPos += this.playerYVelocity;
        }
    }

    // returns false if the player is not about to go through a platform, else return the y position of the surface of the platform
    const checkPlatform = (newYPos) => {
        const charCenterXPos = this.playerXPos + (charWidth * 0.5);
        const charCurrentYPos = this.playerYPos;

        for (let platform of this.platforms) {
            let platformSurfaceYPos = platform["yPos"] + platformHeight;
            if (this.playerYVelocity < 0
                && charCenterXPos >= platform["xPos"]
                && charCenterXPos <= platform["xPos"] + platform["length"]
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
            this.playerXPos += this.settings.tile;
        } 
        else if (this.xDirection === 'left') {
            this.playerXPos -= this.settings.tile;
        }

        this.stageXPos = Math.max(this.playerXPos - 700, 0);
        this.playerXPos = Math.max(this.playerXPos, 0);
        // add another check for the max width of the stage when we get around to defining it
    };

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

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            playerX: this.playerXPos,
            playerY: this.playerYPos,
            playerXDirection: this.xDirection,
            blocks: this.blocks,
            enemies: this.enemies,
            platforms: this.platforms,
            doors: this.doors,
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
            if (!this.jump) {
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
    playerXDirection: '',
    blocks: [],
    enemies: [],
    platforms: [],
    doors: [],
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
                {
                    <Character
                        style={gameState.playerXDirection === 'left' ? 
                        {
                            height: {charHeight},
                            width: {charWidth},
                            transform: `translate(${gameState.playerX}px, -${gameState.playerY}px) scaleX(-1)`
                        } 
                        : {
                            height: {charHeight},
                            width: {charWidth},
                            transform: `translate(${gameState.playerX}px, -${gameState.playerY}px) scaleX(1)`
                        }}/>
                }
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
            </div>
        </div>
    );
}