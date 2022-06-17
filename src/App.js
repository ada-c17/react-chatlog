import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);
  const [sender1Color, setSender1Color] = useState('blue');
  const [sender2Color, setSender2Color] = useState('blue');

  const onUpdateHeart = (updatedEntry) => {
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
    console.log(`sender 1's color {newColor}`);
  };

  const updateSender2Color = (newColor) => {
    setSender2Color(newColor);
    console.log(`sender 2's color {newColor}`);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span id="sender1">{sender1}</span> and{' '}
          <span id="sender2">{sender2}</span>
        </h1>
        <section>
          <ColorChoice
            sender={sender1}
            setColorCallback={updateSender1Color}
            color={sender1Color}
          />
          <h2>
            <span id="heartLikes">{numberOfHearts()} ❤️s</span>
          </h2>
          <ColorChoice
            sender={sender2}
            setColorCallback={updateSender2Color}
            color={sender2Color}
          />
        </section>
      </header>
      <main>
        <ChatLog entries={entriesData} onUpdateHeart={onUpdateHeart} />
      </main>
    </div>
  );
};

export default App;
