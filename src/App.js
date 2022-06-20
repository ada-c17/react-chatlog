import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1> Chat Room </h1>
      </header>
      <main>
        {/* <ChatEntry
          body={chatMessages[0].body}
          sender={chatMessages[0].sender}
          timeStamp={chatMessages[0].timeStamp}
      />  */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
