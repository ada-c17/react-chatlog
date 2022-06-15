import React from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // console.log(entries);
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
