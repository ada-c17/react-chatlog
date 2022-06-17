import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

let countHeart = 0;

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedMessage) => {
    const messages = chatData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatData(messages);
    countHeart = updatedMessage.liked ? countHeart + 1 : countHeart - 1;
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <div className="widget" id="heartWidget">
            {countHeart} ❤️s
          </div>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateHeart={updateChatData} />
      </main>
    </div>
  );
};

export default App;
