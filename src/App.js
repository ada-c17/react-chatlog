import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const changeLike = (id) => {
    const newMessages = [];
    for (const message of messages) {
      const copiedMessage = { ...message };
      if (copiedMessage.id === id) {
        copiedMessage.liked = !copiedMessage.liked;
      }

      newMessages.push(copiedMessage);
    }
    setMessages(newMessages);
  };

  const [likesCount, setLikesCount] = useState(0);
  const countLikes = () => {
    let numberLikes = 0;
    for (const message of messages) {
      if (message.liked === true) {
        numberLikes += 1;
      }
    }
    if (numberLikes !== likesCount) {
      setLikesCount(numberLikes);
    }
  };

  countLikes();

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{likesCount} ❤️s</section>
      </header>
      <main>
        <ChatLog likesCallback={changeLike} entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
