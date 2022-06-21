import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
// import ColorChoice from './components/ColorChoice';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);
  // const [remoteColor, setRemoteColor] = useState('black');
  const flipLiked = (id) => {
    let likes = 0;
    const newEntries = [];
    for (const entry of entries) {
      const updatedEntry = { ...entry };
      if (updatedEntry.id === id) {
        updatedEntry.liked = !updatedEntry.liked;
      }
      if (updatedEntry.liked) {
        likes += 1;
      }
      newEntries.push(updatedEntry);
    }
    setEntries(newEntries);
    setLikes(likes);
  };
  // const changeColor = (chosenColor) => {
  //   setColor(chosenColor);
  // };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div>
          {/* <ColorChoice setColorCallback={changeColor} /> */}
          {likes} ❤️s
        </div>
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
