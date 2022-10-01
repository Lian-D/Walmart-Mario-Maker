import React from 'react';
import PropTypes from 'prop-types';

const Character = ({height, width, xPos, yPos}) => {

    const style = {
        height: height,
        width: width,
        left: xPos,
        bottom: yPos,
        transform: 'scaleX(1)'
    };

    return (
        <span 
            className="character"
            style={style}
        />
    );
};

Character.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number
};

export default Character;