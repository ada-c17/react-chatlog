import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatMsg = chatMessages;
  
  return (
    <div id="App">
      <header>
        <h1>React ChatLog</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatMsg={chatMsg}/>
      </main>
    </div>
  );
};

export default App;
