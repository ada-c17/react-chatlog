import React from 'react';
import './App.css';
import messagesJSON from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messagesJSON);

  const toggleHeartStatus = (id) => {
    // console.log('In the toggleHeartStatus function!');
    const newMessages = [];
    for (const message of messages) {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      newMessages.push(message);
    }
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
      </header>
      <main>
        <ChatLog
          entries={messages}
          toggleHeartStatusCallback={toggleHeartStatus}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
