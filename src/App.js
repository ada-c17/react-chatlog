import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [likes, setLikes] = useState(0);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const decrementLikes = () => {
    setLikes(likes - 1);
  };

  const sender1 = chatMessages[0].sender;
  const sender2 = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ColorChoice sender1={sender1} sender2={sender2} />
        <h3>{likes} ❤️s</h3>
        <ChatLog
          entries={chatMessages}
          incrementLikes={incrementLikes}
          decrementLikes={decrementLikes}
          sender1={sender1}
        />
      </main>
    </div>
  );
};

export default App;
