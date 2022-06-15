import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const ChatComponents = chatMessages.map((chat) => (
  //   <ChatLog sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp} />
  // ));

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} />
        {/* Wave 01: Render one ChatEntry component Wave 02: Render ChatLog
        component */}
      </main>
    </div>
  );
};

export default App;
