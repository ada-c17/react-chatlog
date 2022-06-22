import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const message = chatMessages[0];
  console.log(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>Hope's React Practice Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
