import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({height, width, xPos, yPos, name}) => {
    const style = {
        height: height,
        width: width,
        left: xPos,
        bottom: yPos
    };

    return (
        <span
            className="coin"
            key={name}
            style={style}
        />
    );
};

Coin.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    name: PropTypes.string,
};

export default Coin;