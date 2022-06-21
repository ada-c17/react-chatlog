import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  const [entriesData, setEntries] = useState(chatMessages);

  const updateEntryData = (updatedEntry) => {
    const entries = entriesData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntries(entries);
  };
  const [colorLocal, setColorLocal] = useState('black');
  const [colorRemote, setColorRemote] = useState('black');

  const localSender = entriesData[0].sender;
  let remoteSender;
  for (let entry of entriesData) {
    if (entry.sender !== localSender) {
      remoteSender = entry.sender;
      break;
    }
  }

  const setLocalSenderColor = (newColor) => {
    setColorLocal(newColor);
  };

  const setRemoteSenderColor = (newColor) => {
    setColorRemote(newColor);
  };

  const countLikes = () => {
    let total = 0;
    for (let entry of entriesData) {
      if (entry.liked === true) {
        total += 1;
      }
    }
    return total;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localSender} and {remoteSender}
        </h1>
        <section>
          <ColorChoice
            sender={localSender}
            setColorCallback={setLocalSenderColor}
            color={colorLocal}
          />
          <ColorChoice
            sender={remoteSender}
            setColorCallback={setRemoteSenderColor}
            color={colorRemote}
          />
        </section>
        <section>
          <h2 id="heartWidget" className="widget">
            Like count: {countLikes()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entriesData}
          onUpdateEntry={updateEntryData}
          localSender={localSender}
          colorLocal={colorLocal}
          colorRemote={colorRemote}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
