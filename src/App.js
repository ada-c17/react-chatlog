import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const updateMessageData = (updatedData) => {
    const updatedMessageData = messageData.map((message) => {
      if (message.id === updatedData.id) {
        return updatedData;
      } else {
        return message;
      }
    });

    setMessageData(updatedMessageData);
  };

  const countLikes = (messages) => {
    let count = 0;
    messages.forEach((message) => {
      if (message.liked) {
        count += 1;
      }
    });
    return count;
  };

  const likes = countLikes(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section>{likes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={messageData} onUpdate={updateMessageData} />
      </main>
    </div>
  );
};

export default App;
