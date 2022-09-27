import React, { useState, useEffect } from 'react';
import styles from './engine.module.scss';
import { useEvent } from '../../hooks';

const BLOCKS = [
    140,
    250,
    390,
];

const charWidth = 100;
const charHeight = 100;

const blockWidth = 80;
const blockHeight = 200;

// this is in comparison to the rest of the game
// 2 is twice the speed
// 1 is the same speed
const JUMP_VELOCITY = 1.4;

function CreateEngine(setState) {
    this.settings = {
        tile: 10, // width of one tile
    };

    // current stage position
    this.game = 'start';
    this.stageXPos = 0;

    this.jump = false;
    this.yDirection = 'up';
    this.xDirection = '';

    this.playerXPos = 200;
    this.playerYPos = 0;
    this.jumpMaxHeight = this.settings.tile * 40;
    this.blocks = BLOCKS.map(b => (b * this.settings.tile));

    const checkBlocks = () => {
        const charXPos = this.playerXPos;
        const charYPos = this.playerYPos;

        // if the char has past all blocks
        if (charXPos > this.blocks[this.blocks.length - 1] + 200 && this.playerYPos <= 0) {
            this.game = 'win';
        }

        this.blocks.forEach((block) => {
            // if char hits a block
            if (
                charXPos + charWidth >= block
                && charYPos <= blockHeight
                && charYPos + charHeight >= 0
                && charXPos <= block + blockWidth
            ) {
                this.game = 'fail';
            }
        });
    };

    const doJump = () => {
        // if not jumping, reset and return
        if (!this.jump) {
            this.playerYPos = 0;
            this.yDirection = 'up';
            return;
        }

        // if finished jumping, reset and return
        if (this.yDirection === 'down' && this.playerYPos <= 0) {
            this.jump = false;
            this.playerYPos = 0;
            this.yDirection = 'up';
            return;
        }

        // if the jump is at its max, start falling
        if (this.playerYPos >= this.jumpMaxHeight) this.yDirection = 'down';

        // depending on the direction increment the jump.
        if (this.yDirection === 'up') {
            this.playerYPos += (this.settings.tile * finalVelocity(this.playerYPos, 0.2, 4));
        } else {
            this.playerYPos -= (this.settings.tile * finalVelocity(this.playerYPos, 0.3, 5));
        }
    };

    const finalVelocity = (yPos, distanceThreshold, multiplier) => {
        let distance = Math.max(this.jumpMaxHeight - yPos, 0) / this.jumpMaxHeight;
        let velocity = distance < distanceThreshold ? JUMP_VELOCITY * distance * multiplier : JUMP_VELOCITY;
        return Math.max(0.2, velocity);
    }

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
        // move the stage by one tile
        doMove();

        // check if char has hit a block
        checkBlocks();

        // check and perform jump
        doJump();

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            playerX: this.playerXPos,
            playerY: this.playerYPos,
            blocks: this.blocks,
            status: this.game,
        });

        // stop the game if the game var has been set to false
        if (this.game !== 'start') {
            // reset and stop
            this.game = 'start';
            this.stageXPos = 0;
            this.jump = false;
            this.yDirection = 'up';
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
    blocks: [],
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
            // start the game when the user first presses the spacebar
            if (!started && !start) {
                setStart(true);
            }

            // if the game has not been initialized return
            if (engine === null) return;

            // otherwise jump
            engine.jump();
        }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            if (engine === null) return;
            engine.move('');
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            if (engine === null) return;
            engine.move('right');
        }
        else if (e.key === 'ArrowLeft') {
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
                    gameState.blocks.map(
                        block => (
                            <span
                                className={styles.block}
                                key={block}
                                style={{
                                    transform: `translate(${block}px, 0px)`, // move stage
                                    height: blockHeight,
                                    width: blockWidth,
                                }}
                            />
                        ),
                    )
                }
            </div>
        </div>
    );
}