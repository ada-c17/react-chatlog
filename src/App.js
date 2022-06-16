import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';

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
          sender="Vladimir"
          body="why are you arguing with me"
          timestamp="2018-05-29T22:49:06+00:00"
          liked="false"
        />
        <TimeStamp />
      </main>
    </div>
  );
};

export default App;
