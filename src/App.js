import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

const addRemoteClass = () => {
  const remoteMessages = document.querySelectorAll('div.chat-entry');
  for (const message of remoteMessages) {
    const senderName = message.querySelector('h2');
    console.log(senderName.textContent);
    if (senderName.textContent === 'Estragon') {
      message.className = 'chat-entry remote';
    }
  }
};

document.addEventListener('DOMContentLoaded', addRemoteClass);

export default App;
