import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';

const chatData = chatMessages;
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog chatData={chatData} />
        {/*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
