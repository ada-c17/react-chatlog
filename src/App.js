import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const likedMessages = (id) => {
    const newLikedData = chatData.map((chat) => {
      if (chat.id === id) {
        return { ...chat, liked: (chat.liked = !chat.liked) };
      } else {
        return chat;
      }
    });

    setChatData(newLikedData);
  };

  const displayLikes = () => {
    const likedData = chatData.filter((chat) => {
      if (chat.liked) {
        return chat;
      }
    });
    console.log(`likedData: ${likedData}`);
    let hearts = '';
    likedData.forEach((like) => {
      hearts += '❤️';
    });
    return hearts;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {displayLikes()}
        <ChatLog chatData={chatData} likedMessages={likedMessages} />
      </main>
    </div>
  );
};

export default App;
