import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
        {/* <ChatEntry
          sender={chatMessages.sender}
          body={chatMessages.body}
          timeStamp={chatMessages.timeStamp}
        /> */}
        {/* {console.log(chatMessages[0])} */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
