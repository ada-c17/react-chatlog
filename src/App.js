import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessages] = useState(chatMessages);

  const countHearts = () => {
    let totalHearts = 0;
    for (let message of messageData) {
      if (message.liked === true) {
        totalHearts += 1;
      }
    }
    return totalHearts;
  };

  const flipHeart = (id) => {
    const newMessages = [];
    for (const message of messageData) {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      newMessages.push(message);
    }
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0]['sender']} and
          {chatMessages[1]['sender']}
        </h1>
        <section id="heartWidget">{countHearts()} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={chatMessages} heartCallback={flipHeart}></ChatLog>
      </main>
    </div>
  );
};

export default App;
