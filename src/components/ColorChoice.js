import React from 'react';

const ColorChoice = (props) => {
  const setColorCallback = (event) => {
    if (props.onUpdateLocal) {
      props.onUpdateLocal(event.currentTarget.id);
    } else {
      props.onUpdateRemote(event.currentTarget.id);
    }
  };

  const getButtonsMap = () => {
    const colors = {
      red: '🔴',
      yellow: '🟡',
      purple: '🟣',
      green: '🟢',
      orange: '🟠',
      blue: '🔵',
    };
    return Object.entries(colors).map(([key, value]) => {
      return (
        <button onClick={setColorCallback} key={key} id={key}>
          {value}
        </button>
      );
    });
  };
  return <div>{getButtonsMap()}</div>;
};

export default ColorChoice;
