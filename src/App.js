import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageInfo, setMessageInfo] = useState(chatMessages);


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
    let count = 0;
    numberOfLikes.forEach((message) => {
      if (message.liked) {
        count += 1;
      }
    });
    return count;
  };

  let totalLikes = updateTotalLikes(messageInfo);

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section id="header-likes">{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog 
          entries={messageInfo} 
          updateChat={updateMessageInfo} 
        />
      </main>
    </div>
  );
};

export default App;