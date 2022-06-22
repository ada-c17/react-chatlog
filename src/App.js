import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [liked, setLiked] = useState(0);
  const countLikes = () => {};
  return (
    <div id="App">
      <header>
        <h1>Chatty chats</h1>
        <h3> {countLikes} </h3>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
