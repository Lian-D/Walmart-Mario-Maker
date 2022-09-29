import React from 'react';
import PropTypes from 'prop-types';

const Platform = ({xPos, yPos, length, name}) => {
    const style = {
        xPos: xPos,
        yPos: yPos,
        length: length,
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
    name: PropTypes.string,
};

export default Platform;