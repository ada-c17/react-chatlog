import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';

function App() {
  const [entries, setEntries] = useState(chatMessages);
  const likeEntry = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        if (entry.liked === true) {
          entry.liked = false;
        } else {
          entry.liked = true;
        }
      }
      return entry;
    });
    setEntries(newEntries);
  };
  const likeCount = chatMessages.reduce(
    (total, entry) => (entry.liked === true ? total + 1 : total),
    0
  );

  const remotePerson = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>{remotePerson}</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLike={likeEntry} />
      </main>
    </div>
  );
}

export default App;
