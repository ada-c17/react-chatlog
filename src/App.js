import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const updateChat = (messageToUpdate) => {
    const updatedMessages = messages.map((message) => {
      return message.id === messageToUpdate.id ? messageToUpdate : message;
    });
    setMessages(updatedMessages);
  };

  const totalLikes = messages.reduce((total, message) => {
    return total + message.liked;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={messages} onUpdate={updateChat} />
      </main>
    </div>
  );
};

export default App;
