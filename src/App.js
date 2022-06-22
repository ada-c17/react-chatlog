import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messagesData, setMessages] = useState(chatMessages);

  const likeChatButton = (updatedData) => {
    const currentMessages = messagesData.map((messages) => {
      if (messages.id === updatedData.id) {
        return updatedData;
      } else {
        return messages;
      }
    });

    setMessages(currentMessages);
  };

  const totalLikes = messagesData.reduce((total, messages) => {
    return total + messages.liked;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat log</h1>
        <div> {totalLikes} ❤️s </div>
      </header>
      <main>
        <ChatLog entries={messagesData} updated={likeChatButton}></ChatLog>
      </main>
    </div>
  );
};

export default App;
