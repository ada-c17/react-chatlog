import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likesCount, setLikes] = useState(0);
  const [colors, setColors] = useState(['black', 'black']);

  const toggleLikes = (id) => {
    const newEntries = entries.map((entry) => {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        countLikes(id);
        newEntry.liked = !newEntry.liked;
      }
      return newEntry;
    });
    setEntries(newEntries);
  };

  const countLikes = (id) => {
    for (const entry of entries) {
      if (entry.id === id) {
        if (entry.liked === true) {
          setLikes(likesCount - 1);
        } else {
          setLikes(likesCount + 1);
        }
      }
    }
  };

  const changeColor = (side, chosenColor) => {
    let sender;

    if (side === 'left') {
      sender = 0;
    } else {
      sender = 1;
    }

    const newColors = [];
    newColors.push(colors[0]);
    newColors.push(colors[1]);

    newColors[sender] = chosenColor;

    setColors(newColors);
  };

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${entries[0].sender} and ${entries[1].sender}`}</h1>
        <section className="container">
          <ColorChoice
            id="first"
            name={entries[0].sender}
            side="right"
            colors={colors}
            changeColorCallback={changeColor}
          />
          <h2 id="second">{likesCount} ❤️s</h2>
          <ColorChoice
            id="third"
            name={entries[1].sender}
            side="left"
            colors={colors}
            changeColorCallback={changeColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          colors={colors}
          toggleLikesCallback={toggleLikes}
          countLikesCallback={countLikes}
        />
      </main>
    </div>
  );
};

export default App;
