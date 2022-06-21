import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chats, setChats] = useState(chatMessages);

  const updateLike = (key) => {
    let newChats = [];
    for (const chat of chats) {
      newChats.push({ ...chat });
    }
    for (let chat of newChats) {
      if (chat.id === key) {
        chat.liked = !chat.liked;
      }
    }
    setChats(newChats);
  };
  let totalLikes = 0;
  for (const chat of chats) {
    if (chat.liked === true) {
      totalLikes += 1;
    }
  }

  let likesDisplay = `${totalLikes} ❤️s`;
  if (totalLikes === 1) {
    likesDisplay = '1 ❤️';
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log, with a total of: {likesDisplay} </h1>
      </header>
      <main>
        <ChatLog entries={chats} likeCallback={updateLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
