import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
import { useState } from 'react';

const App = () => {
  const [totalHearts, setTotalHearts] = useState(0);
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = updatedChat => {
    const entries = chatData.map(chat => {
      if (chat.id === updatedChat.id) {
        if (updatedChat.liked === true){
          setTotalHearts(totalHearts + 1);
        } else { 
          setTotalHearts(totalHearts - 1);
        };
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
        <h1>Chat between Vladimir and Estragon</h1>
        <section id="heartWidget" className="widget">{totalHearts} ❤️s</section>
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
