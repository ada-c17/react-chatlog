import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatEntry
          sender="sender"
          body="body"
          timeStamp="2018-05-18T22:12:03Z"
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
