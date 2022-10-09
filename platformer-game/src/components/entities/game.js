import React from 'react';
import PropTypes from 'prop-types';
import Character from "./character";
import Level from './level';

const Game = ({gameState}) => {
    let style = {};

    if (Object.prototype.hasOwnProperty.call(gameState.level, "background") && gameState.level.background !== null) {
        style = {
            background: `#568cd2 url("${gameState.level.background}") center / cover no-repeat`
        }
    }

    return (
        <div className='container' style={style} >
            <span className="coinCounter">Coins obtained: {gameState.cumCoins ? gameState.cumCoins : 0}</span>
            <Level  
                player={
                    <Character
                        playerXDirection={gameState.playerXDirection}
                        playerX={gameState.playerX}
                        playerY={gameState.playerY}
                    />
                }
                stageX={gameState.stageX}
                stageY={gameState.stageY}
                level={gameState.level}
            />
        </div>
    );
};

Game.propTypes = {
    gameState: PropTypes.object,
};

export default Game;