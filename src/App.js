import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [chats, setChatState] = useState(chatMessages);

  const updateChatLiked = (id) => {
    const newChats = chats.map((chat) => {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
      return newChats;
    });
    setChatState(newChats);
  };

  const sumLikes = () => {
    let filteredChats = chats.filter(sumLikesHelper);
    return filteredChats.length;
  };
  function sumLikesHelper(likes) {
    return chats.likes === true;
  }

  return (
    <div id="App">
      <header>
        <h1>Chats</h1>
        <h3>{sumLikes()} ❤️'s</h3>
      </header>
      <main>
        <ChatLog chats={chats} updateChat={updateChatLiked(chats.id)}></ChatLog>
      </main>
    </div>
  );
};

export default App;
