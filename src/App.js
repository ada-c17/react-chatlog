import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  // Need a function to update the like count
  const [entries, setEntries] = useState(chatMessages);

  const updateLike = () => {
    let likeCount = 0;

    for (const entry of entries) {
      if (entry.liked === true) {
        likeCount += 1;
      }
    }
    return likeCount;
  };

  const toggleHeart = (id) => {
    const newEntries = [];
    
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      newEntries.push(entry);
    }
    setEntries(newEntries);
  }

  // const [likeCount, setLikeCount] = useState(0);

  // const likeTotal = () => {
  //   const updateLike = () => {
  //     console.log('inside the updateLike function!');
  //     setLikeCount(likeCount + 1);
  //   }
  // }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1> 
        <h2> {updateLike()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart}/>
      </main>
    </div>
  );
};

export default App;
