import React from 'react';
import './App.css';
import messagesJSON from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messagesJSON);

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
      </header>
      <main>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
