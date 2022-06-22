import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);
  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else return message;
    });
    setMessageData(messages);
  };
  const totalLikes = () => {
    let likes = 0;
    for (const message of messageData) {
      if (message.liked) {
        likes += 1;
      }
    }
    return likes;
  };
  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        <h2>{totalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messageData} onUpdateMessage={updateMessageData} />
      </main>
    </div>
  );
};

export default App;
