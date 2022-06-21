import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [entries, setEntries] = useState(chatMessages);

  // Helper function to update the like count
  const updateLike = () => {
    let likeCount = 0;

    for (const entry of entries) {
      if (entry.liked === true) {
        likeCount += 1;
      }
    }
    return likeCount;
  };

  // Function to change heart based on liked property
  const toggleHeart = (id) => {
    const newEntries = [];
    
    for (const entry of entries) {
      // const newEntries = [...entries];
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      newEntries.push(entry);
    }
    setEntries(newEntries);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1> 
        <div> {updateLike()} ❤️s</div>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart}/>
      </main>
    </div>
  );
};

export default App;
