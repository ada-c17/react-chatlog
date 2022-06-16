import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages)

  const updateChatData = chatID => {
    const chatEntries = chatData.map(chatEntry => {
      if (chatEntry.id === chatID) {
        return {...chatEntry, liked: !chatEntry.liked};
      } else {
        return chatEntry;
      }
    });
    setChatData(chatEntries);
  };

  const countLikedMessages = () => { 
    return chatData.reduce((sum, message) => {
      return message.liked ? sum + 1: sum;
    }, 0)
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Chat</h1>
        <section>
          <h2 className='widget'>{countLikedMessages()} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog onUpdateChatData={updateChatData} entries={chatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
