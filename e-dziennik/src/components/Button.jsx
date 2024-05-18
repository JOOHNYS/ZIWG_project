import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({onClickFunction, buttonText, addArrow = false}) => {
    return (
        <button className='centre-button' onClick={onClickFunction}>{buttonText}
            {addArrow && <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>}
        </button>
    );
};

Button.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    addArrow: PropTypes.bool
};

export default Button;
