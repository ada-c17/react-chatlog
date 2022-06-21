import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [logMessages, setChatMessages] = useState(chatMessages);

  // function to flip the liked in chatMessages
  const fliplike = (id) => {
    const newLogMessages = [];
    for (const logMessage of logMessages) {
      let newLogMessage = Object.assign({}, logMessage);
      if (newLogMessage.id === id) {
        newLogMessage.liked = !newLogMessage.liked;
      }
      newLogMessages.push(newLogMessage);
    }

    setChatMessages(newLogMessages);
  };

  // function to count the like when user click
  const countLiked = () => {
    let count = 0;
    for (const logMessage of logMessages) {
      if (logMessage.liked) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
        <div className="heart-count">{`${countLiked()} ❤️s`}</div>
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
