import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = chatId => {
    const chats = chatData.map(chat => {
      if (chat.id === chatId) {
        return {...chat, liked: !chat.liked};
      } else {
        return chat;
      }
    });

    setChatData(chats);
  };

  const countRedHearts = () => {
    return chatData.reduce((total, message) => {
      return message.liked ? total + 1 : total; 
    }, 0)
  }

  
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className='widget'>{countRedHearts()} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog onUpdateChatData={updateChatData} entries={chatData}/>
      </main>
    </div>
  );
};

export default App;
