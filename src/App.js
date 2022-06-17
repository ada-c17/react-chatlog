import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import './components/ChatLog';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessageData, setChatData] = useState(chatMessages);

  const heartCount = chatMessageData.reduce((hearts, message) => {
    if (message.liked) {
      hearts += 1;
    }
    return hearts;
  }, 0);

  const updateChatData = (updatedMessage) => {
    console.log('in updateChatData');
    console.log(updatedMessage.id);
    const messages = chatMessageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessageData[0].sender} and{' '}
          {chatMessageData[1].sender}
        </h1>
        <h2>{heartCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessageData} onUpdateMessage={updateChatData} />
      </main>
    </div>
  );
};

export default App;
