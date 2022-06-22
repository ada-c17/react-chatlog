import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog.js';
// import InfoBar from './components/InfoBar.js';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [hearts, setHearts] = useState(0);

  const updateLikes = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = {...entry};
        updatedEntry.liked = !updatedEntry.liked;
        if (updatedEntry.liked) {
          setHearts(hearts+1);
        } else {
          setHearts(hearts-1);
        }
        return updatedEntry;
      } else {
        return entry;
      }
    })
    setEntries(updatedEntries);
  }

  let uniqueSendersSet = new Set();

  for (const entry of entries) {
    uniqueSendersSet.add(entry.sender);
  }

  const uniqueSendersArr = Array.from(uniqueSendersSet)

  return (
    <div id="App">
      <header>
        <h1>Chat between {uniqueSendersArr[0]} and {uniqueSendersArr[1]}</h1>
        <h2>{hearts} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} updateLikes={updateLikes} updateHearts={setHearts}></ChatLog>
      </main>
    </div>
  );
};

export default App;
