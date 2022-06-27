import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);
  const users = [];
  let likesCount = 0;
  let user1 = '';
  let user2 = '';

  const updateChatData = (updatedMessage) => {
    const messages = chatMessagesData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setChatMessagesData(messages);
  };

  for (let i = 0; i < chatMessagesData.length; i++) {
    let message = chatMessagesData[i];
    if (users.indexOf(message['sender']) === -1) {
      users.push(message['sender'])
    }
    if (message['liked']) {
      likesCount++;
    }
  }

  if (users.length === 2) {
    user1 = users[0].toUpperCase();
    user2 = users[1].toUpperCase();
  }

  return (
    <div id="App">

        <header>
          <h1>CHAT BETWEEN {user1} AND {user2} </h1>
          <p className="header">{likesCount} 💙s</p>
        </header>
      <main>
        <ChatLog
          entries={chatMessagesData}
          onUpdateChatData={updateChatData}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
