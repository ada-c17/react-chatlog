import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);
  const flipLiked = (id) => {
    let likes = 0;
    const newEntries = [];
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      if (entry.liked) {
        likes += 1;
      }
      newEntries.push(entry);
    }
    // console.log(newEntries);
    setEntries(newEntries);
    setLikes(likes);
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likes} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry /> */}
        <ChatLog entries={entries} likedCallback={flipLiked} likes={likes} />
      </main>
    </div>
  );
};

export default App;
