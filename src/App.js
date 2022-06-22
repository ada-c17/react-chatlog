import React, { useState } from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';
import LikeCount from './components/LikeCount';

const App = () => {
  const [chatData, setChatData] = useState(entries);

  const updateLike = (id) => {
    const newChatData = chatData.map((chat) => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    });
    setChatData(newChatData);
  };
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <LikeCount entries={chatData} />
      </header>
      <main>
        <ChatLog entries={chatData} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
