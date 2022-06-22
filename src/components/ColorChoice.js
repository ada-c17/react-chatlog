import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  return (
    <div className="color-choice">
      <p className={props.color}> {props.sender}'s color: </p>
      <div className="color-selection">
        <button
          className="red"
          onClick={() => {
            props.setColorCallback('red');
          }}
        >
          🔴
        </button>
        <button
          className="orange"
          onClick={() => {
            props.setColorCallback('orange');
          }}
        >
          🟠
        </button>
        <button
          className="yellow"
          onClick={() => {
            props.setColorCallback('yellow');
          }}
        >
          🟡
        </button>
        <button
          className="green"
          onClick={() => {
            props.setColorCallback('green');
          }}
        >
          🟢
        </button>
        <button
          className="blue"
          onClick={() => {
            props.setColorCallback('blue');
          }}
        >
          🔵
        </button>
        <button
          className="purple"
          onClick={() => {
            props.setColorCallback('purple');
          }}
        >
          🟣
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
