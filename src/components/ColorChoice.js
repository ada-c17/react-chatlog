import React from 'react';

const ColorChoice = (props) => {
  const setColorCallback = (event) => {
    if (props.onUpdateLocal) {
      props.onUpdateLocal(event.currentTarget.id);
    } else {
      props.onUpdateRemote(event.currentTarget.id);
    }
  };
  return (
    <div>
      <button id="red" onClick={setColorCallback}>
        🔴
      </button>
      <button id="yellow" onClick={setColorCallback}>
        🟡
      </button>
      <button id="purple" onClick={setColorCallback}>
        🟣
      </button>
      <button id="green" onClick={setColorCallback}>
        🟢
      </button>
      <button id="orange" onClick={setColorCallback}>
        🟠
      </button>
      <button id="blue" onClick={setColorCallback}>
        🔵
      </button>
    </div>
  );
};

export default ColorChoice;
