import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TotalHearts from './components/TotalHearts';
import chatMessagesJSON from './data/messages.json';

const calcTotalLikes = (chatMessages) => {
  return chatMessages.reduce((total, message) => {
    return total + message.liked;
  }, 0);
};

const App = () => {
  const [chatMessages, setMessages] = useState(chatMessagesJSON);

  const onLike = (id) => {
    const newMessages = chatMessages.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });
    setMessages(newMessages);
  };

  const totalLikes = calcTotalLikes(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h3>
          <TotalHearts totalLikes={totalLikes}></TotalHearts>
        </h3>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLike={onLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
