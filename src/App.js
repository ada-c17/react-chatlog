import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

let totalLikes = 0;

const updateLikes = (entryData) => {
  let likes = 0;
  for (const entry of entryData) {
    if (entry.liked) {
      likes += 1;
    }
  }
  totalLikes = likes;
};

const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);
  const updateEntryData = (updatedEntry) => {
    const entries = entryData.map((chatEntry) => {
      if (chatEntry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return chatEntry;
      }
    });
    setEntryData(entries);
    updateLikes(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="header section">
          <h4 id="heartWidget" className="widget">
            {totalLikes} ❤️s
          </h4>
        </section>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntryData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
