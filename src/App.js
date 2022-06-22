import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [chats, setChatState] = useState(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chats</h1>
        <h3>{0} ❤️'s</h3>
      </header>
      <main>
        <ChatLog chats={chats}></ChatLog>
      </main>
    </div>
  );
};

export default App;
