import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';

// const chatMessages =

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry
          sender={chatMessages[0]['sender']}
          body={chatMessages[0]['body']}
          timeStamp={chatMessages[0]['timeStamp']}
        ></ChatEntry>

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <TimeStamp></TimeStamp> */}
      </main>
    </div>
  );
};

export default App;
