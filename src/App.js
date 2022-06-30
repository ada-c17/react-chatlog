import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [localTextColor, setLocalTextColor] = useState('black');
  const [remoteTextColor, setRemoteTextColor] = useState('black');

  const updateChatData = (updatedEntry) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatData(entries);
  };

  const totalLikes = chatData.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }
    return total;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>
          <div>Chat Log</div>
          <div>{totalLikes} ❤️s</div>
        </h1>
        <section className="colorChoice">
          <div>
            <h3 className={localTextColor}>Vladimir's color</h3>
            <ColorChoice onUpdateLocal={setLocalTextColor} />
          </div>
          <div>
            <h3 className={remoteTextColor}>Estragon's color</h3>
            <ColorChoice onUpdateRemote={setRemoteTextColor} />
          </div>
        </section>
      </header>

      <main>
        <ChatLog
          entries={chatData}
          onUpdateChat={updateChatData}
          onUpdateLocal={localTextColor}
          onUpdateRemote={remoteTextColor}
        />
      </main>
    </div>
  );
};

export default App;
