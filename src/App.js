import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleLikeButton = (id) => {
    const messages = chatData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }

      return message;
    });

    setChatData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateLikeStatus={toggleLikeButton} />
      </main>
    </div>
  );
};

export default App;
