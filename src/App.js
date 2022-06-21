import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

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

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <div className="widget">
            <p id="heartWidget">
              {numberOfLikes} {heartText}
            </p>
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
