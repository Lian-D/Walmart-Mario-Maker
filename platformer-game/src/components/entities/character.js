import React from 'react';
import PropTypes from 'prop-types';
import { charHeight, charWidth } from '../../data/constants';

const Character = ({playerXDirection, playerX, playerY}) => {
    let transform = playerXDirection === 'left' 
        ? `translate(${playerX}px, -${playerY}px) scaleX(-1)`
        : `translate(${playerX}px, -${playerY}px) scaleX(1)`;

    let style = {
        height: charHeight,
        width: charWidth,
        transform: transform
    } ;

    return (
        <span 
            className="character"
            style={style}
        />
    );
};

Character.propTypes = {
    playerXDirection: PropTypes.string,
    playerX: PropTypes.number,
    playerY: PropTypes.number
};

export default Character;