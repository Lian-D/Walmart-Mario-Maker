import React from 'react';
import PropTypes from 'prop-types';
import { doorWidth, doorHeight } from '../../data/constants';

// just pass in the door and we create the style here
const Door = ({xPos, yPos, name, key}) => {
    const style = {
        height: doorHeight,
        width: doorWidth,
        left: xPos,
        bottom: yPos
    };

    return key && <span className="door" key={name} style={style} />;
};

Door.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    name: PropTypes.string,
    key: PropTypes.bool,
};

export default Door;