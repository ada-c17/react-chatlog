import React from 'react';
// import { useState } from 'react';
const ColorChoice = (props) => {
  return (
    <div>
      <button
        onClick={() => props.setColorCallBack(props.color, props.userLocal)}
      >
        {props.button}
      </button>
    </div>
  );
};

export default ColorChoice;
