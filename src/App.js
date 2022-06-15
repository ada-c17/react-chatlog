import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
