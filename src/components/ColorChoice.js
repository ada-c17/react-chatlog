import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = ({ setColorCallback, color, sender }) => {
  return (
    <section className="widget">
      <h3 className={color}>{sender}'s color:</h3>
      <button onClick={() => setColorCallback('red')}>🔴</button>
      <button onClick={() => setColorCallback('orange')}>🟠</button>
      <button onClick={() => setColorCallback('yellow')}>🟡</button>
      <button onClick={() => setColorCallback('green')}>🟢</button>
      <button onClick={() => setColorCallback('blue')}>🔵</button>
      <button onClick={() => setColorCallback('purple')}>🟣</button>
    </section>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default ColorChoice;
