import React, { useState } from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const [likeCount, updateCount] = useState(0);

  const updateCountFunction = (addition) => {
    updateCount(likeCount + addition);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>liked messages: {likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} updateFunc={updateCountFunction}></ChatLog>
      </main>
    </div>
  );
};

export default App;
