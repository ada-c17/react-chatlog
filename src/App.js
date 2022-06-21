import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likeCount, setLikes] = useState(0);

  const handleLikes = (id) => {
    const newEntries = [];
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
        likeCounter(entry.liked);
      }
      newEntries.push(entry);
    }
    setEntries(newEntries);
  };

  const likeCounter = (liked) => {
    if (liked === true) {
      setLikes(likeCount + 1);
    } else if (liked === false) {
      setLikes(likeCount - 1);
    }
  };

  const messageOrientation = (id) => {
    if (id % 2 === 0) {
      return 'remote';
    } else {
      return 'local';
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entries}
          likedCallback={handleLikes}
          contactsCallback={messageOrientation}
        />
      </main>
    </div>
  );
};

export default App;
