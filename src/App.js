import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const updateChatEntry = (updatedEntry) => {
    const entries = chatEntries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        if (entry.liked) {
          setLikeCount(likeCount - 1);
        } else {
          setLikeCount(likeCount + 1);
        }
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatEntries(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatEntries} onLike={updateChatEntry} />
      </main>
    </div>
  );
};

export default App;
