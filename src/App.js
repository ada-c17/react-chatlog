import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  const updateChatEntry = (updatedEntry) => {
    const entries = chatEntries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatEntries(entries);
  };

  const getLikeCount = () => {
    let likeCount = 0;
    for (const entry of chatEntries) {
      if (entry.liked === true) {
        likeCount += 1;
      }
    }
    return likeCount;
  };

  const getParticipants = () => {
    const participants = new Set();
    for (const entry of chatEntries) {
      participants.add(entry.sender);
    }
    return [...participants].join(' and ');
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {getParticipants()}</h1>
        <h2>{getLikeCount()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatEntries} onLike={updateChatEntry} />
      </main>
    </div>
  );
};

export default App;
