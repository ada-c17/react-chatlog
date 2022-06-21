import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  //state
  const [messageData, setMessageData] = useState(chatMessages);
  let totalLikes = 0;

  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const updateTotalLikes = (messages) => {
    for (let message of messages) {
      if (message.liked) {
        totalLikes++;
      }
    }
    return totalLikes;
  };

  return (
    <div id="App">
      <header>
        <h1>Vlad and Estragon's Chat</h1>
        <h2>{updateTotalLikes(messageData) > 0 && `${totalLikes} ❤️s`}</h2>
      </header>
      <main>
        <ChatLog messages={messageData} updateMessageData={updateMessageData} />
      </main>
    </div>
  );
};

export default App;
