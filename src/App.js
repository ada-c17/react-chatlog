import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import chatMessages from './data/messages.json';
import './components/TimeStamp';
import TimeStamp from './components/TimeStamp';

const App = () => {
  const { body, id, liked, sender, timeStamp } = chatMessages[0];
  console.log(timeStamp);
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main className="widget">
        <ChatEntry body={body} sender={sender} />
        <TimeStamp timeStamp={timeStamp} />
      </main>
    </div>
  );
};

export default App;
