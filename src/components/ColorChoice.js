import React from 'react';
import './ColorChoice.css';

const ColorChoice = (props) => {
  return (
    <div className="colorButton">
      <button id="red" onClick={() => props.setColorCallback('red')}></button>
      <button
        id="orange"
        onClick={() => props.setColorCallback('orange')}
      ></button>
      <button
        id="yellow"
        onClick={() => props.setColorCallback('yellow')}
      ></button>
      <button
        id="green"
        onClick={() => props.setColorCallback('green')}
      ></button>
      <button id="blue" onClick={() => props.setColorCallback('blue')}></button>
      <button
        id="purple"
        onClick={() => props.setColorCallback('purple')}
      ></button>
    </div>
  );
};

export default ColorChoice;
