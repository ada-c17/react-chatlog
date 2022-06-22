import React from 'react';

const ColorChoices = (props) => {
  const changeColor = (newColor) => {
    const updatedEntries = props.entries.map((entry) => {
      if (props.sender === entry.sender) {
        const updatedEntry = {
          id: entry.id,
          sender: entry.sender,
          body: entry.body,
          timeStamp: entry.timeStamp,
          liked: entry.liked,
          color: newColor,
        };
        return updatedEntry;
      } else {
        return entry;
      }
    });
    props.updateChatColor(updatedEntries);
  };

  return (
    <div>
      <button onClick={() => changeColor('red')}>🔴</button>
      <button onClick={() => changeColor('orange')}>🟠 </button>
      <button onClick={() => changeColor('yellow')}>🟡 </button>
      <button onClick={() => changeColor('green')}>🟢 </button>
      <button onClick={() => changeColor('blue')}>🔵 </button>
      <button onClick={() => changeColor('purple')}>🟣 </button>
    </div>
  );
};

export default ColorChoices;
