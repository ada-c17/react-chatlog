import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likesTotal, setLikesTotal] = useState(0);

  const changeLikes = (id) => {
    let likeCount = 0;
    const newEntries = [];
    for(const e of entries) {
      const entry = {...e};
      if(id === entry.id) {
        entry.liked = !entry.liked;
        }
        if (entry.liked === true) {
          likeCount += 1;
        }
        newEntries.push(entry);
    }
    setEntries(newEntries);
    setLikesTotal(likeCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likesTotal} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog 
        entries={entries}
        changeLikes={changeLikes}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
