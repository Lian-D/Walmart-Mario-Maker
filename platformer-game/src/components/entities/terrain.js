import React from 'react';
import PropTypes from 'prop-types';

const Terrain = ({xPos, yPos, length, height, name}) => {
    const style = {
        transform: `translate(${xPos}px, -${yPos}px)`,
        height: height,
        width: length
    };

    return (
        <span 
            className="terrain"
            key={name}
            style={style}
        />
    );
};

Terrain.propTypes = {
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    length: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
};

export default Terrain;