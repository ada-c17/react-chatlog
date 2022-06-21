import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const ColorChoice = ({ setColorCallback }) => {
  <div className="colorSelect">
    <button class="red">🔴</button>
    <button class="orange">🟠</button>
    <button class="yellow">🟡</button>
    <button class="green">🟢</button>
    <button class="blue">🔵</button>
    <button class="purple">🟣</button>
  </div>;
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
