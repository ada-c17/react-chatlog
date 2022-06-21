import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const initialTotalLikes = () => {
    let likes = 0;
    for (const message of messages) {
      if (message.liked) {
        likes += 1;
      }
    }
    return likes;
  };

  const [totalLikes, setTotalLikes] = useState(initialTotalLikes);

  const toggleLike = (id) => {
    const newMessages = [];
    for (const m of messages) {
      const message = { ...m };
      if (id === message.id) {
        if (message.liked) {
          setTotalLikes(totalLikes - 1);
        } else {
          setTotalLikes(totalLikes + 1);
        }
        message.liked = !message.liked;
      }
      newMessages.push(message);
    }
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <p>{totalLikes} ❤️s</p>
        <ChatLog entries={messages} toggleLikeCallback={toggleLike} />
      </main>
    </div>
  );
};

export default App;
