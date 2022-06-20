import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
//import ChatEntry from './components/ChatEntry';
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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} heartCallback={flipHearts} />
      </main>
    </div>
  );
};

export default App;
