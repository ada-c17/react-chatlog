import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  let [likeCount, setLikes] = useState(0);

  const changeHeartColor = (id) => {
    const newEntries = entries.map((entry) => ({...entry}));
    for (const entry of newEntries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
        if (entry.liked) {
          likeCount += 1;
        }
      } 
    } 
    setEntries(newEntries);
    setLikes(likeCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section>{likeCount} ❤️s</section>
      </header>
      <main>
        <ChatLog
        entries={entries}
        heartCallback={changeHeartColor}
        />
      </main>
    </div>
  );
};

export default App;
