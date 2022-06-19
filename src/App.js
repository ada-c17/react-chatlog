import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';
import { useState } from 'react';

let countHeart = 0;

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [color, setColor] = useState({ local: 'black', remote: 'black' });

  console.log(color);

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

  const colorLocalCallback = (c) => {
    const newColor1 = { local: c, remote: color.remote };
    setColor(newColor1);
    console.log('left');
  };

  const colorRemoteCallback = (d) => {
    const newColor2 = { local: color.local, remote: d };
    setColor(newColor2);
    console.log('right');
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={color.local}>Vladimir</span> and
          <span className={color.remote}>Estragon</span>
        </h1>
        <section>
          <span className={color.local}>Vladimir's color</span>
          <span>
            <ColorChoice colorCallback={colorLocalCallback} />
          </span>
          <div className="widget" id="heartWidget">
            {countHeart} ❤️s
          </div>
          <span className={color.remote}>Estragon's color</span>
          <span>
            <ColorChoice colorCallback={colorRemoteCallback} />
          </span>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateHeart={updateChatData}
          colorLocal={color.local}
          colorRemote={color.remote}
        />
      </main>
    </div>
  );
};

export default App;
