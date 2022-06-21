import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const updateChatMessage = (newMessageData) => {
    console.log(newMessageData);
    const updatedMessages = messageData.map((entry) => {
      if (entry.id === newMessageData.id) {
        return newMessageData;
      } else {
        return entry;
      }
    });

    setMessageData(updatedMessages);
  };

  const totalHearts = messageData.reduce((total, message) => {
    if (message.liked) {
      return (total += 1);
    } else {
      return total;
    }
  }, 0);

  return (
    <div id="App">
      <header>
        <h1 className="heading">Chat Log</h1>
        <p>{totalHearts} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messageData} updateFunction={updateChatMessage} />
      </main>
    </div>
  );
};

export default App;
