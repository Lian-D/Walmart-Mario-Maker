import React from 'react';
import PropTypes from 'prop-types';

const Door = ({height, width, xPos, yPos, name}) => {
    const style = {
        height: height,
        width: width,
        left: xPos,
        bottom: yPos
    };

    return (
        <span 
            className="door"
            key={name}
            style={style}
        />
    );
};

Door.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    name: PropTypes.string,
};

export default Door;