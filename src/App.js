import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const fliplikedState = (id) => {
    const newMessages = messages.map((message) => {
    // use .map here instead of mutating messages
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message
    })
    setMessages(newMessages);
  };

  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div id="App">
      <header>
        <h1> Likes Count: {likesCount} ❤️s </h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatMessages}
          flipLiked={fliplikedState}
          increaseLikes={increaseLikes}
          likesCount={likesCount}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
