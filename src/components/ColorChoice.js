import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const ColorChoice = ({ setColorCallback, color, sender }) => {
  return (
    <section className="widget">
      <h3 class={color}>{sender}'s color:</h3>
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
};

export default ColorChoice;
