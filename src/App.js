import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  const chatData = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={chatData[0].sender}
          body={chatData[0].body}
          timeStamp={chatData[0].timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
