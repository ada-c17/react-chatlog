import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const changeLikes = (id) => {
    const newEntry = entries.map((entry) => {
      if(entry.id === id) {
        entry.liked = !entry.liked;
      }
      return newEntry
    });
    setEntries(newEntry);
  };

  const likeCount = () => {
    let likes = 0;
    for(const entry of entries) {
      if(entry.liked === true) {
        likes += 1;
      }
    }
    return likes;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount()} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog 
        entries={chatMessages}
        changeLikes={changeLikes}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
