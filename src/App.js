import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

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
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntryData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
