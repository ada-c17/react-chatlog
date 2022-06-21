import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);

  const calcLikes = (entriesData) => {
    let likeCount = 0;

    for (const entry of entriesData) {
      if (entry.liked) {
        likeCount++;
      }
    }
    return likeCount;
  };

  const getParticipants = (entriesData) => {
    let chatMembers = new Set();

    for (const entry of entriesData) {
      chatMembers.add(entry.sender);
    }

    return Array.from(chatMembers).join(' and ');
  };

  const updateEntriesData = (updatedEntry) => {
    const entriesList = entriesData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntriesData(entriesList);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {getParticipants(entriesData)}</h1>
        <section>
          <h1 id="heartWidget" className="widget">
            {calcLikes(entriesData)} ❤️s
          </h1>
        </section>
      </header>
      <main>
        <ChatLog entries={entriesData} onUpdateEntry={updateEntriesData} />
      </main>
    </div>
  );
};

export default App;
