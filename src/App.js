import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const senderData = chatMessages[0].sender;
  const bodyData = chatMessages[0].body;
  const timeStampData = chatMessages[0].timeStamp;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        <ChatEntry
          sender={senderData}
          body={bodyData}
          timestamp={timeStampData}
        ></ChatEntry>
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
