import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
// import TimeStamp from './components/TimeStamp';
// import totalLikeCount from './src/components/ChatEntry.js';
const App = () => {
  const [totalLikeCount, setTotalLikeCount] = useState(0);
  const changeTotalLikes = () => {
    setTotalLikeCount(totalLikeCount + 1);
    return totalLikeCount;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <p>
          Total Like Count: {changeTotalLikes} {totalLikeCount}
        </p>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
