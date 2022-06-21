import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const calculateTotalLikes = () => {
    const numLikes = messageData.map((message) => {
      if (message.liked) {
        return 1;
      } else {
        return 0;
      }
    });
    return numLikes.reduce((partialSum, num) => partialSum + num, 0);
  };

  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setMessageData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>{calculateTotalLikes()} ❤️s</p>
        <ChatLog
          entries={messageData}
          onUpdateMessages={updateMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
