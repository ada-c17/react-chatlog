import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  //Brains
  const [updateChatLog, setUpdateChatLog] = useState(chatMessages);
  // for every item in updated ChatLog replace existing message with latest message.
  const refreshMessageLog = (updatedEntry) => {
    const newChatData = updateChatLog.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setUpdateChatLog(newChatData);
  };

  const likeCount = updateChatLog.reduce((total, entry) => {
    return total + entry.liked;
  }, 0);

  //Beauty
  return (
    <div id="App">
      <header>
        <h1>Hope's React Practice Chat Log</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={updateChatLog} update={refreshMessageLog} />
      </main>
    </div>
  );
};

export default App;
