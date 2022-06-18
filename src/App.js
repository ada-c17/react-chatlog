import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const heartMessage = (id) => {
    // const newEntries = [];
    // for (const entry in entries) {
    //   if (entry.id === id) {
    //     entry.liked = !entry.liked;
    //   }
    //   newEntries.push(entry);
    // }
    // setEntries(newEntries);
    console.log(id, 'liked');
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={entries} heartCallback={heartMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
