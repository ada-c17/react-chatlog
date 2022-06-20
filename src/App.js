import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const handleLikes = (id) => {
    const newEntries = [];
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      newEntries.push(entry);
    }
    setEntries(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={entries} likedCallback={handleLikes} />
      </main>
    </div>
  );
};

export default App;
