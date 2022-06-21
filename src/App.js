import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);
  const toggleLike = (id) => {
    const updatedEntries = [...chatEntries];
    for (const entry of updatedEntries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
        entry.liked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
      }
      setChatEntries(updatedEntries);
    }
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        {likeCount > 1 ? <p>{likeCount} ❤️s</p> : <p>{likeCount} ❤️</p>}
      </header>
      <main>
        <ChatLog entries={chatMessages} toggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
