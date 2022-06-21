import React from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
