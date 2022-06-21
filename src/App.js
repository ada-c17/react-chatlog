import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);
  const [sender1Color, setSender1Color] = useState('white');
  const [sender2Color, setSender2Color] = useState('white');

  const updateHeartColor = (updatedEntry) => {
    const entries = entriesData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntriesData(entries);
  };

  const numberOfHearts = () => {
    let total = 0;
    for (const entry of entriesData) {
      if (entry.liked === true) {
        total += 1;
      }
    }
    return total;
  };

  const sender1 = entriesData[0].sender;
  const sender2 = entriesData[1].sender;

  const updateSender1Color = (newColor) => {
    setSender1Color(newColor);
  };

  const updateSender2Color = (newColor) => {
    setSender2Color(newColor);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={sender1Color}>{sender1}</span> and{' '}
          <span className={sender2Color}>{sender2}</span>
        </h1>
        <div className="color-section">
          <ColorChoice
            className="first-sender"
            sender={sender1}
            setColorCallback={updateSender1Color}
            color={sender1Color}
          />
          <h2>
            <span id="heart-likes">{numberOfHearts()} ❤️s</span>
          </h2>
          <ColorChoice
            className="second-sender"
            sender={sender2}
            setColorCallback={updateSender2Color}
            color={sender2Color}
          />
        </div>
      </header>
      <main className="chat-log-section">
        <section className="chat-log-body">
          <ChatLog
            entries={entriesData}
            updateHeartColorCallback={updateHeartColor}
            colorForSender1={sender1Color}
            colorForSender2={sender2Color}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
