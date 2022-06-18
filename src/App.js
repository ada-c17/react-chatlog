import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [hearts, setHearts] = useState('0 ❤️s');

  const handleMessage = (Updatedmessage) => {
    // Updated messages
    const updatedMessages = messages.map((message) => {
      if (message.id === Updatedmessage.id) {
        return Updatedmessage;
      }
      return message;
    });
    setMessages(updatedMessages);

    //Update hearts
    const likedCount = updatedMessages.filter(
      (message) => message.liked
    ).length;
    setHearts(`${likedCount} ❤️s`);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{hearts}</p>
      </header>
      <main>
        <ChatLog entries={messages} handleMessage={handleMessage} />
      </main>
    </div>
  );
};

export default App;
