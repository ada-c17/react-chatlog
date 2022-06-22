import React, { useState } from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  // let liked = props.liked;

  const [likeCount, updateCount] = useState(0);

  const updateCountFunction = (addition) => {
    updateCount(likeCount + addition);
  };
  // const updateLikeFunction = () => {
  //   if (isLiked) {
  //     liked = false;
  //   } else {
  //     liked = true;
  //   }
  //   toggleLike(liked);
  // };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>liked messages: {likeCount}</h2>
      </header>
      <main>
        <ChatLog entries={messages} updateFunc={updateCountFunction}></ChatLog>
      </main>
    </div>
  );
};

export default App;
