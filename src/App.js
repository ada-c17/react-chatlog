import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const chatMessage = chatMessages[0];

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}>
        </ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
