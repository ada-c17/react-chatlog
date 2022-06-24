import React from 'react';
import './App.css';
import messagesJSON from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messagesJSON);

  const toggleHeartStatus = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      }
      return message;
    });
    setMessages(newMessages);
  };

  const displayNumHearts = messages.filter(
    (message) => message.liked === true
  ).length;

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        <>
          <h2>{displayNumHearts} ❤️s</h2>
        </>
      </header>
      <main>
        <ChatLog
          entries={messages}
          onToggleHeartStatus={toggleHeartStatus}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
