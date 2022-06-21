import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const toggleLiked = (id) => {
    const newLikes = [];
    for (const message of messages) {
      let newMessage = Object.assign({}, message);
      if (newMessage.id === id) {
        newMessage.liked = !newMessage.liked;
        likeClick(newMessage.liked);
      }
      newLikes.push(newMessage);
    }
    setMessages(newLikes);
  };
  const [likes, setLikes] = useState(0);
  const likeClick = (bool) => {
    if (bool === true) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>Number of Likes: {likes} ❤️s</h2>
      </header>
      <main>
        <ChatLog messages={messages} toggleLikedCallback={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
