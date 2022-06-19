import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessages] = useState(chatMessages);

  const updateMessages = (updatedData) => {
    const changedMessages = messageData.map((message) => {
      if (message.id === updatedData.id) {
        return updatedData;
      } else {
        return message;
      }
    });

    setMessages(changedMessages);
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

  let numOfLikes = countLikes(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section>{numOfLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={messageData} onUpdateChat={updateMessages} />
      </main>
    </div>
  );
};

export default App;
