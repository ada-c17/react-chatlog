import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const [numLikedHearts, setNumLikedHearts] = useState(0);
  const changeLikes = (liked) => {
    if (liked) {
      setNumLikedHearts(numLikedHearts + 1);
    } else {
      setNumLikedHearts(numLikedHearts - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <section>
          <p id="likes">Number of likes: {numLikedHearts} ❤️s</p>
        </section>
        <ChatLog entries={chatMessages} OnChangedLikes={changeLikes} />
      </main>
    </div>
  );
};

export default App;
