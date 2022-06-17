import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const chatData = {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false,
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
