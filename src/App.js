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
      // Need to make deep copy here and add new entries
      // Looping through entry in chatMessages, made deep copy 
      // to avoid changing the original data repeatedly
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      newEntries.push(newEntry);
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
