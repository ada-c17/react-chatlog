import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);

  const [likeCount, setLikeCount] = useState(0);

  const updateEntry = (entryToUpdate) => {
    const entries = entryData.map((entry) => {
      if (entry.id === entryToUpdate.id) {
        return entryToUpdate;
      } else if (entryToUpdate.liked === true) {
        setLikeCount(likeCount + 1);
      } else if (entryToUpdate.liked === false) {
        setLikeCount(likeCount - 1);
      }
      return entry;
    });

    setEntryData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entryData} onLikeMessage={updateEntry}></ChatLog>
      </main>
    </div>
  );
};

export default App;
