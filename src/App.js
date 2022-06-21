import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likesCount, setLikes] = useState(0);

  const toggleLikes = (id) => {
    // console.log('toggled!');
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

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${entries[0].sender} and ${entries[1].sender}`}</h1>
        <h2>{likesCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entries}
          toggleLikesCallback={toggleLikes}
          countLikesCallback={countLikes}
        />
      </main>
    </div>
  );
};

export default App;
