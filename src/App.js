import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatData = chatMessages;

  const [likes, setLikes] = useState(chatData);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLikesFn = (id) => {
    const updatedChatData = likes.map((like) => {
      const updatedChat = { ...like };
      if (like.id === id) {
        updatedChat.liked = !like.liked;
        if (updatedChat.liked === true) {
          setLikeCount(likeCount + 1);
        } else {
          setLikeCount(likeCount - 1);
        }
      }

      return updatedChat;
    });

    setLikes(updatedChatData);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p id="likeCount"> {likeCount} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={likes} toggleLikes={toggleLikesFn}></ChatLog>
      </main>
    </div>
  );
};

export default App;
