import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const countLikes = (chats) => {
  let count = 0;
  for (const chat of chats) {
    if (chat.liked === true) {
      count += 1;
    }
  }
  return count;
};

const App = () => {
  const [chats, setChats] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(countLikes(chatMessages));

  const changeLike = (id) => {
    const updatedChats = chats.map((chat) => Object.assign({}, chat));
    for (const chat of updatedChats) {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
    }
    setChats(updatedChats);
    setLikesCount(countLikes(updatedChats));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section>
          <div className="widget" id="heart-widget">
            {likesCount} ❤️s
          </div>
        </section>
      </header>
      <main>
        <ChatLog entries={chats} likedCallback={changeLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
