import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [logMessages, setChatMessages] = useState(chatMessages);
  const fliplike = (id) => {
    console.log(`flipping ${id}`);
    const newLogMessages = [];
    for (const logMessage of logMessages) {
      if (logMessage.id === id) {
        logMessage.liked = !logMessage.liked;
        console.log(logMessage.liked);
        console.log(logMessage.id);
      }
      newLogMessages.push(logMessage);
    }

    setChatMessages(newLogMessages);
  };

  const countLiked = () => {
    let count = 0;
    for (const logMessage of logMessages) {
      if (logMessage.liked) {
        count += 1;
      }
    }
    return count;
  };

  const numberLiked = countLiked();
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <div className="heart-count"> {`${numberLiked} ❤️s`} </div>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={logMessages} likedCallBack={fliplike} />
      </main>
    </div>
  );
};

export default App;
