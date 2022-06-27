import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';



const App = () => {

  const [entries, setEntries] = useState(chatMessages);
  const toggleLiked = (id) => {
    console.log('liking...');
    const newEntries = entries.map((entry) => {
      return entry.id === id
      ? {
          id: entry.id,
          sender: entry.sender,
          body: entry.body,
          timeStamp: entry.timeStamp,
          liked: !entry.liked,
        }
    : entry;
  });
setEntries(newEntries);
};

const countLikes = (entries) => {
  let likes = 0;
  for (const entry of entries) {
    if (entry.liked) {
      likes++;
    }
  }
  return likes;
};

  return (
    <div id="App">
      <header>
        <h1>Fun React Chat</h1>
        <p>{countLikes(entries)} ❤️s</p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}></ChatLog>
        <chatLog entries={entries} likedCallback={toggleLiked}></chatLog>

      </main>
    </div>
  );
};

export default App;
