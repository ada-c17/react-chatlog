import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';
import { useState } from 'react';

let countHeart = 0;

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [colorLocal, setColorLocal] = useState('orange');
  const [colorRemote, setColorRemote] = useState('orange');

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
        <h1>
          Chat between <span className={colorLocal}>Vladimir</span> and
          <span className={colorRemote}>Estragon</span>
        </h1>
        <section>
          <div className="verticalWidget">
            <span className={colorLocal}>Vladimir's color</span>
            <br></br>
            <span>
              <ColorChoice
                colorCallback={(c) => {
                  setColorLocal(c);
                }}
                id="local"
              />
            </span>
          </div>

          <div className="widget" id="heartWidget">
            {countHeart} ❤️s
          </div>

          <div className="verticalWidget">
            <span className={colorRemote}>Estragon's color</span>
            <br></br>
            <span>
              <ColorChoice
                colorCallback={(d) => {
                  setColorRemote(d);
                }}
                id="remote"
              />
            </span>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateHeart={updateChatData}
          colorLocal={colorLocal}
          colorRemote={colorRemote}
        />
      </main>
    </div>
  );
};

export default App;
