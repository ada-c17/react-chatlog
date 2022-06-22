import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  let colorId;

  if (props.side === 'left') {
    colorId = 0;
  } else {
    colorId = 1;
  }

  const color = props.colors[colorId];

  const nameColor = { color: color, fontWeight: 'bold' };

  const name = props.name;
  return (
    <section>
      <p style={nameColor}>{name}'s color</p>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'red')}
      >
        🔴
      </button>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'orange')}
      >
        🟠
      </button>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'yellow')}
      >
        🟡
      </button>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'green')}
      >
        🟢
      </button>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'blue')}
      >
        🔵
      </button>
      <button
        className="color-button"
        onClick={() => props.changeColorCallback(props.side, 'purple')}
      >
        🟣
      </button>
    </section>
  );
};

ColorChoice.propTypes = {
  side: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeColorCallback: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
};

export default ColorChoice;
