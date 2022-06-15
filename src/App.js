import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// import TimeStamp from './components/TimeStamp';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry
          id={chatMessages[0].id}
          body={chatMessages[0].body}
          sender={chatMessages[0].sender}
          timeStamp={chatMessages[0].timeStamp}
          liked={chatMessages[0].liked}
        /> */}
        <ChatLog entries={chatMessages} />
        {/* <ChatLog /> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
