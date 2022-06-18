import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const entries = [
    {
      id: 1,
      sender: 'Sinuhe',
      body: 'Would you like some chips?',
      timeStamp: '2022-06-03T09:35:31.820Z',
    },
    {
      id: 2,
      sender: 'Andrea',
      body: 'Where are you?',
      timeStamp: '2022-05-03T09:35:31.820Z',
    },
  ];
  return (
    <div id="App">
      <header className="App-header">
        <h1>Our ChatLog</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
