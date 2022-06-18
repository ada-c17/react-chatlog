import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';
import { useState } from 'react';

let countHeart = 0;

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [color, setColor] = useState('');

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

  const colorCallback = (color) => {
    setColor(color);
  };

  console.log(color);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span>
            <ColorChoice colorCallback={colorCallback} />
          </span>
          <div className="widget" id="heartWidget">
            {countHeart} ❤️s
          </div>
          <span>
            <ColorChoice colorCallback={colorCallback} />
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateHeart={updateChatData} />
      </main>
    </div>
  );
};

export default App;
