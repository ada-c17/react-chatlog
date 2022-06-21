import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const flipHearts = (id) => {
    const newHearts = [];
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      newHearts.push(entry);
    }
    setEntries(newHearts);
  };

  //helper function to count number of entries liked
  const sumTotalHearts = () => {
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
        <h1>Application title</h1>
        <div className="heart-count">{sumTotalHearts()} ❤️s </div>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          heartCallback={flipHearts}
        />
      </main>
    </div>
  );
};

export default App;
