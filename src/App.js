import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const localUser = chatMessages[0].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} localUser={localUser} />
        {/* Wave 01: Render one ChatEntry component Wave 02: Render ChatLog
        component */}
      </main>
    </div>
  );
};

export default App;
