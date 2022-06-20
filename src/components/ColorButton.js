import React from 'react';
import './ColorButton.css';
import PropTypes from 'prop-types';

const ColorButton = ({ option, source, active, updateColors }) => {
  return (
    <button
      className={active ? 'selected' : ''}
      onClick={() => updateColors(option, source)}
    >
      {option}
    </button>
  );
};

ColorButton.propTypes = {
  option: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  updateColors: PropTypes.func.isRequired,
};

export default ColorButton;
