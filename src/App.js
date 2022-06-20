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
        if (entry.liked === true) {
          setLikes(likeCount + 1);
        } else if (entry.liked === false) {
          setLikes(likeCount - 1);
        }
      }
      newEntries.push(entry);
    }
    setEntries(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} likedCallback={handleLikes} />
      </main>
    </div>
  );
};

export default App;
