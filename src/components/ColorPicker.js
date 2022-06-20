import React from 'react';
import './ColorPicker.css';
import PropTypes from 'prop-types';
import ColorMenu from './ColorMenu';

const ColorPicker = ({ colorClasses, source, updateColors }) => {
  return (
    <div className="menuContainer">
      <h3>{source} color:</h3>
      <div className="colorMenu">
        <ColorMenu
          colorClasses={colorClasses}
          updateColors={updateColors}
          source={source}
        />
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  colorClasses: PropTypes.shape({
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired,
  }).isRequired,
  source: PropTypes.string.isRequired,
  updateColors: PropTypes.func.isRequired,
};

export default ColorPicker;
