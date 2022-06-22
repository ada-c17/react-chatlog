import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoices from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updatedChatData = (updatedChatEntry) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return entry;
      }
    });
    setChatData(entries);
  };

  const numberOfLikes = chatData.filter((entry) => entry.liked === true).length;
  const heartText = numberOfLikes < 2 ? '❤️' : '❤️s';

  const updateChatColor = (updatedChatEnties) => {
    setChatData(updatedChatEnties);
  };

  const defineColor = (data, mySender) => {
    return data.filter((entry) => entry.sender === mySender)[0].color;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          <span className={defineColor(chatData, 'Vladimir')}>Vladimir</span>{' '}
          and{' '}
          <span className={defineColor(chatData, 'Estragon')}>Estragon</span>
        </h1>
        <section>
          <div className="widget">
            <div className="header-display">
              <div className="block">
                <p className={defineColor(chatData, 'Vladimir')}>
                  Vladimir's color:
                </p>
                <ColorChoices
                  entries={chatData}
                  updateChatColor={updateChatColor}
                  sender="Vladimir"
                ></ColorChoices>
              </div>
              <div className="block">
                <p id="heartWidget">
                  {numberOfLikes} {heartText}
                </p>
              </div>
              <div className="block">
                <p className={defineColor(chatData, 'Estragon')}>
                  Estragon's color:
                </p>
                <ColorChoices
                  entries={chatData}
                  updateChatColor={updateChatColor}
                  sender="Estragon"
                ></ColorChoices>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateChatEntry={updatedChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
