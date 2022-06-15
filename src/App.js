import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const ChatEntryComponents = chatMessages.map((chat) => (
    <ChatEntry
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
    />
  ));

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {ChatEntryComponents}
        {/* Wave 01: Render one ChatEntry component Wave 02: Render ChatLog
        component */}
      </main>
    </div>
  );
};

export default App;
