import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  // console.log(chatMessages);
  const message = {
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
  };
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
