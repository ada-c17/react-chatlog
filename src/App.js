import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          id={chatMessages[0]['id']}
          sender={chatMessages[0]['sender']}
          body={chatMessages[0]['body']}
          timeStamp={chatMessages[0]['timeStamp']}
        ></ChatEntry>
        <ChatLog entries={chatMessages} />
        {/*<ChatEntry Log={chatMessages[0]}></ChatEntry>*/}
      </main>
    </div>
  );
};

export default App;
