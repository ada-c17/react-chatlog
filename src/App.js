import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessages] = useState(chatMessages);

  const updateMessages = (updatedData) => {
    const changedMessages = messageData.map((message) => {
      if (message.id === updatedData.id) {
        console.log('This is message', message);
        console.log('This is updatedData', updatedData);
        return updatedData;
      } else {
        return message;
      }
    });

    // console.log('This is the value of changedMessages:', changedMessages);
    setMessages(changedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} onUpdateChat={updateMessages} />
      </main>
    </div>
  );
};

export default App;
