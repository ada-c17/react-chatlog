import React, { useState } from 'react';
import './ColorChoice.css';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  return (
    <div className="color-choice">
      <p> {props.sender}'s color: </p>
      <div className="color-selection">
        <button
          onClick={() => {
            props.setColorCallback('red');
          }}
        >
          🟥
        </button>
        <button
          onClick={() => {
            props.setColorCallback('orange');
          }}
        >
          🟧
        </button>
        <button
          onClick={() => {
            props.setColorCallback('yellow');
          }}
        >
          🟨{' '}
        </button>
        <button
          onClick={() => {
            props.setColorCallback('green');
          }}
        >
          🟩
        </button>
        <button
          onClick={() => {
            props.setColorCallback('blue');
          }}
        >
          🟦{' '}
        </button>
        <button
          onClick={() => {
            props.setColorCallback('purple');
          }}
        >
          🟪
        </button>
        <button
          onClick={() => {
            props.setColorCallback('grey');
          }}
        >
          🟫
        </button>
      </div>
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
