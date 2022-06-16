import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const testEntry = {
  id: 1,
  sender: 'Miss Kitty',
  body: 'meow~',
  timeStamp: '2010-05-29T22:49:06+00:00',
};

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        <h1>Chat Entry</h1>
        <ChatEntry
          id={testEntry.id}
          sender={testEntry.sender}
          body={testEntry.body}
          timeStamp={testEntry.timeStamp}
        />

        {/* Wave 02: Render ChatLog component */}
        <h1>Chat Log</h1>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
