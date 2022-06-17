import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);

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
    console.log(total);
    return total;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span id="sender1">{entriesData[0].sender}</span> and{' '}
          <span id="sender2">{entriesData[1].sender}</span>
        </h1>
        <h2>
          <span id="heartLikes">{numberOfHearts()} ❤️s</span>
        </h2>
      </header>
      <main>
        <ChatLog entries={entriesData} onUpdateHeart={onUpdateHeart} />
      </main>
    </div>
  );
};

export default App;
