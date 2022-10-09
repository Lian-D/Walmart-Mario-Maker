import React from 'react';
import PropTypes from 'prop-types';
import { doorWidth, doorHeight } from '../../data/constants';

// just pass in the door and we create the style here
const Door = ({xPos, yPos, isOpen}) => {
    const style = {
        height: doorHeight,
        width: doorWidth,
        left: xPos,
        bottom: yPos
    };

    return (isOpen && <span className="door" style={style} />);
};

Door.propTypes = {
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    isOpen: PropTypes.bool,
};

export default Door;