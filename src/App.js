import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatMessageData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedMessage) => {
    const messages = chatMessageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }

    });
    setChatData(messages);
  };


  const countLikes = () => {
    return (chatMessageData.reduce(
      (previousValue, currentValue) => {
        const val = currentValue.liked ? 1 : 0;
        return previousValue + val;
      }, 0));
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <h2> {countLikes()} ❤️s </h2>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {<div>
          { <ChatLog
            entries={ chatMessageData }
            onUpdateMessage={ updateChatData }
        /> }
        </div>}
      </main>
    </div>
  );
};

export default App;
