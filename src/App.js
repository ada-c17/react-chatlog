import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState (chatMessages);

  const updateChatData = updatedChat => {
    const entries = chatData.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatData(entries);
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog 
          entries={chatData} 
          onUpdateChat={updateChatData}
        />
      </main>
    </div>
  );
};

export default App;
