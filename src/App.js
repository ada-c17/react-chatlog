import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry
          sender={chatMessages.sender}
          body={chatMessages.body}
          timeStamp={chatMessages.timeStamp}
        /> */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
