import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const flipLiked = (id) => {
    const newEntries = [];
    for (const entry of entries) {
      const updatedEntry = { ...entry };
      if (updatedEntry.id === id) {
        updatedEntry.liked = !updatedEntry.liked;
      }
      newEntries.push(updatedEntry);
    }
    setEntries(newEntries);
  };

  const likesCount = () => {
    let likes = 0;
    for (const entry of entries) {
      if (entry.liked) {
        likes += 1;
      }
    }
    return likes;
  };

  const [remoteColor, setRemoteColor] = useState('black');
  const [localColor, setLocalColor] = useState('black');

  const changeRemoteColor = (chosenColor) => {
    setRemoteColor(chosenColor);
  };
  const changeLocalColor = (chosenColor) => {
    setLocalColor(chosenColor);
  };
  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={localColor}>Vladimir</span> and{' '}
          <span className={remoteColor}>Estragon</span>
        </h1>
        <section className="colorContainer">
          <ColorChoice
            setColorCallback={changeLocalColor}
            color={localColor}
            sender="Vladimir"
          />
          <ColorChoice
            setColorCallback={changeRemoteColor}
            color={remoteColor}
            sender="Estragon"
          />
        </section>
        <section>
          <h2 className="widget" id="heartWidget">
            {likesCount()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry /> */}
        <ChatLog
          entries={entries}
          likedCallback={flipLiked}
          remoteColor={remoteColor}
          localColor={localColor}
        />
      </main>
    </div>
  );
};

export default App;
