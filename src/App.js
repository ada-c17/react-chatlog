import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './components/ChatLog.css';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const onClickLikeButton = (updatedMessage) => {
    const newMessages = messages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessages(newMessages);
  };

  const adjustLikeButtonCount = (messages) => {
    let likeButtonCount = 0;
    for (const message of messages) {
      if (message.liked === true) {
        likeButtonCount += 1;
      }
    }
    return likeButtonCount;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <section>
          <h2>{adjustLikeButtonCount(messages)} ❤️s</h2>
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
