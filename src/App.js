import React from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
      </main>
    </div>
  );
};

export default App;
