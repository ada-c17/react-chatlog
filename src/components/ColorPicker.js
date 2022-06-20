import React from 'react';
import './ColorPicker.css';
import PropTypes from 'prop-types';
import ColorMenu from './ColorMenu';

const ColorPicker = ({ colorClasses, updateColors }) => {
  return (
    <div className="menubar">
      <div className="menuContainer">
        <h3>Local color:</h3>
        <div className="colorMenu">
          <ColorMenu
            colorClasses={colorClasses}
            updateColors={updateColors}
            source="local"
          />
        </div>
      </div>
      <div className="menuContainer">
        <h3>Remote color:</h3>
        <div className="colorMenu">
          <ColorMenu
            colorClasses={colorClasses}
            updateColors={updateColors}
            source="remote"
          />
        </div>
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  colorClasses: PropTypes.shape({
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired,
  }).isRequired,
  updateColors: PropTypes.func.isRequired,
};

export default ColorPicker;
