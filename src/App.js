import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entriesData, setEntries] = useState(chatMessages);

  const updateLikes = (id) => {
    const newEntries = [];
    for (const entry of entriesData) {
      const updatedEntry = { ...entry }; // button doesn't change color && last test fail
      // let updatedEntry = Object.assign({}, entry); // also shallow copy, but doesn't pass last test && heart doesn't change color. Hearts do increment
      // let updatedEntry = JSON.parse(JSON.stringify(entry)); // deep copy
      if (updatedEntry.id === id) {
        updatedEntry.liked = !updatedEntry.liked;
      }
      newEntries.push(updatedEntry); // if I use this, then last test doesn't pass && website doesn't render. commented out - doesn't pass test, but works on website
    }
    setEntries(newEntries);
  };

  const likeCount = () => {
    let count = 0;
    for (const entry of entriesData) {
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
        <ChatLog entries={entriesData} likedCallback={updateLikes} />
      </main>
    </div>
  );
};

export default App;
