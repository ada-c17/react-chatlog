import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        ></ChatEntry>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
