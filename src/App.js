import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chats, setChats] = useState(chatMessages);

  const changeLike = (id) => {
    const updatedChats = chats.map((chat) => Object.assign({}, chat));

    for (const chat of updatedChats) {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
    }
    setChats(updatedChats);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chats} likedCallback={changeLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
