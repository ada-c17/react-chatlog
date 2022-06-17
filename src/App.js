import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry
          sender={chatMessages[1]['sender']}
          body={chatMessages[1]['body']}
          timeStamp={chatMessages[1]['timeStamp']}
        ></ChatEntry> */}
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
