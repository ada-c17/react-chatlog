import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageInfo, setMessageInfo] = useState(chatMessages);
  let [totalLikes, setTotalLikes] = useState(0);

  const updateMessageInfo = (newMessage) => {
    const messages = messageInfo.map((message) => {
      if (message.id === newMessage.id) {
        return newMessage;
      } else {
        return message;
      }
    });
    setMessageInfo(messages);
  };

  const updateTotalLikes = (numberOfLikes) => {
    numberOfLikes ? setTotalLikes((totalLikes += 1)) : setTotalLikes((totalLikes -= 1));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes > 0 && `${totalLikes} ❤️s`}</h2>
      </header>
      <main>
        <ChatLog
          messages={messageInfo}
          updateMessageInfo={updateMessageInfo}
          totalLikes={totalLikes}
          setTotalLikes={setTotalLikes}
          updateTotalLikes={updateTotalLikes}
        />
      </main>
    </div>
  );
};

export default App;