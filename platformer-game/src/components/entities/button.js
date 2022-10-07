import React from 'react';
import PropTypes from 'prop-types';

const Button = ({height, width, xPos, yPos, name}) => {
    const style = {
        height: height,
        width: width,
        left: xPos,
        bottom: yPos
    };

    return (
        <span
            className="button"
            key={name}
            style={style}
        />
    );
};

Button.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    name: PropTypes.string,
};

export default Button;