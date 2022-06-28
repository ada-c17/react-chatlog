import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import HeartCount from './components/HeartCount.js';

const App = () => {
  const [heart, setHeart] = useState(chatMessages);

  const toggleHeart = (id) => {
    // count = 0;
    console.log({ id });
    const newHeartCount = heart.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      }
      return message;
    });
    setHeart(newHeartCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{HeartCount(heart)}</h2>
      </header>
      <main>
        {
          /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
          <ChatLog entries={heart} toggleHeartCallback={toggleHeart}></ChatLog>
        }
      </main>
    </div>
  );
};

export default App;
