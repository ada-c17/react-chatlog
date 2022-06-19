import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [hearts, setHearts] = useState(0);

  const addLikes = () => {
    setHearts(hearts + 1);
  };
  const removeLikes = () => {
    setHearts(hearts - 1);
  };

  const senderOne = chatMessages[0].sender;
  console.log(`first: ${senderOne}`);

  const senderTwo = chatMessages[1].sender;
  console.log(`two: ${senderTwo}`);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2 className="heart-count">{hearts} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          addLikesCallback={addLikes}
          removeLikesCallback={removeLikes}
          senderOne={senderOne}
        />
      </main>
    </div>
  );
};

export default App;
