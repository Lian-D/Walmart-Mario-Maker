import React from 'react';
import PropTypes from 'prop-types';

const Platform = ({xPos, yPos, length, height, name}) => {
    const style = {
        transform: `translate(${xPos}px, -${yPos}px)`,
        height: height,
        width: length
    };

    return (
        <span 
            className="platform"
            key={name}
            style={style}
        />
    );
};

Platform.propTypes = {
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    length: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
};

export default Platform;