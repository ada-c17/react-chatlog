import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLikes = (id) => {
    const newEntries = [...entries];
    for (const entry of newEntries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
    }
    setEntries(newEntries);
  };

  const likeCount = () => {
    let count = 0;
    for (const entry of entries) {
      if (entry.liked) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount()} ❤️s </h2>
      </header>
      <main className="widget">
        <ChatLog entries={chatMessages} likedCallback={updateLikes} />
      </main>
    </div>
  );
};

export default App;
