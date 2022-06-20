import React from 'react';
import PropTypes from 'prop-types';
import ColorButton from './ColorButton';

const ColorMenu = ({ colorClasses, updateColors, source }) => {
  const options = Array.from('🔴🟠🟡🟢🔵🟣');
  return options.map((color, i) => {
    return (
      <ColorButton
        key={i}
        option={color}
        source={source}
        active={color === colorClasses[source]}
        updateColors={updateColors}
      />
    );
  });
};

ColorMenu.propTypes = {
  colorClasses: PropTypes.shape({
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired,
  }).isRequired,
  updateColors: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

export default ColorMenu;
