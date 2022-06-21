import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// import { useState } from 'react';

const App = () => {
  // const [likeCount, setLikeCount] = useState(0);

  // Need a function to update the like count

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2> Likes go here:</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
}

export default App;
