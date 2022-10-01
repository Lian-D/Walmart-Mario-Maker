import React from 'react';
import PropTypes from 'prop-types';

const Character = ({style}) => {

    return (
        <span 
            className="character"
            style={style}
        />
    );
};

Character.propTypes = {
    style: PropTypes.object
};

export default Character;