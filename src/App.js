import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  let likeCount = 0;
  for (let message of messages) {
    if (message.liked === true) {
      likeCount += 1;
    }
  }

  const togglesLike = (id) => {
    const copyMessages = [...messages];
    for (let message of copyMessages) {
      if (message.id === id) {
        if (message.liked === true) {
          message.liked = false;
        } else {
          message.liked = true;
        }
      }
    }
    setMessages(copyMessages);
  };

  return (
    <div id="App">
      <header className="App-header">
        <h1>Our ChatLog</h1>
        <section className="likes-counter"> {likeCount} ❤️s </section>
      </header>
      <main>
        <ChatLog entries={messages} togglesLikeCallback={togglesLike} />
      </main>
    </div>
  );
};

export default App;
