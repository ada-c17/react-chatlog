import React from 'react';
import {useState} from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log('value of chatMessages',chatMessages);
  const [entries, setEntries] = useState(chatMessages);

  const updateLike = (id) => {
    const updateLikes = [...entries];
    for (let entry of updateLikes) {
      if (entry.id === id) {
        entry.heart = !entry.heart;
      }
    }
    setEntries(updateLikes);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry/> */}
        <ChatLog 
          entries={chatMessages}
          updateLikeHeart={updateLike}
        />
      </main>
    </div>
  );
};

export default App;
