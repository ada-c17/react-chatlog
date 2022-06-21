import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  const colors = {
    red: '🔴',
    orange: '🟠',
    yellow: '🟡',
    green: '🟢',
    blue: '🔵',
    purple: '🟣',
  };
  return (
    <div>
      <div>
        <h1 className={props.currentUserColors}> {props.sender}'s color: </h1>
      </div>
      {/* <button onClick={() => props.onColorChange('red')}>🔴</button>
      <button onClick={() => props.onColorChange('orange')}>🟠</button>
      <button onClick={() => props.onColorChange('yellow')}>🟡</button>
      <button onClick={() => props.onColorChange('green')}>🟢</button>
      <button onClick={() => props.onColorChange('blue')}>🔵</button>
      <button onClick={() => props.onColorChange('purple')}>🟣</button> */}
      {Object.keys(colors).map((color) => {
        return (
          <button onClick={() => props.onColorChange(color)}>
            {colors[color]}
          </button>
        );
      })}
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  currentUserColors: PropTypes.string.isRequired,
};

export default ColorChoice;
