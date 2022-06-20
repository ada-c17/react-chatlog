import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        ></ChatEntry>
        {/*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
