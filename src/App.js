import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateToggleLike = (updatedEntry) => {
    const newChatData = chatData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatData(newChatData);
  };

  const totalLikes = chatData.reduce((total, entry) => {
    return total + entry.liked;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={chatData} toggleLike={updateToggleLike} />
      </main>
    </div>
  );
};

export default App;
