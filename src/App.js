import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './components/ChatLog.css';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const [likeButtonCount, setLikeButtonCount] = useState(0);

  const adjustLikeButtonCount = (updatedMessage) => {
    if (updatedMessage.liked === true) {
      setLikeButtonCount(likeButtonCount + 1);
    } else {
      setLikeButtonCount(likeButtonCount - 1);
    }
  };

  const onClickLikeButton = (updatedMessage) => {
    const newMessages = messages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    adjustLikeButtonCount(updatedMessage);
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <section>
          <h2>{likeButtonCount} ❤️s</h2>
        </section>
      </header>
      <main className="chat-log">
        <ChatLog
          entries={messages}
          onClickLikeButton={onClickLikeButton}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
