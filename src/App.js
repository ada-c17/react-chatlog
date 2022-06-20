import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedEntry) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatData(entries);
  };

  const totalLikes = chatData.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }
    return total;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>
          <div>Chat Log</div>
          <div>{totalLikes} ❤️s</div>
        </h1>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData} />
      </main>
    </div>
  );
};

export default App;
