import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // const senderData = chatMessages[0].sender;
  // const bodyData = chatMessages[0].body;
  // const timeStampData = chatMessages[0].timeStamp;
  const messageData = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* <ChatEntry
          sender={senderData}
          body={bodyData}
          timeStamp={timeStampData}
        ></ChatEntry> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={messageData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
