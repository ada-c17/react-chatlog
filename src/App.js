import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [likes, setLikes] = useState(0);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const decrementLikes = () => {
    setLikes(likes - 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <h3>{likes} ❤️s</h3>
        <ChatLog
          entries={chatMessages}
          incrementLikes={incrementLikes}
          decrementLikes={decrementLikes}
        />
      </main>
    </div>
  );
};

export default App;
