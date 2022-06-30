import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);

  const updateChatMessagesData = updatedChatMessages => {
    const messages = chatMessagesData.map((message) => {
      if (message.id === updatedChatMessages.id) {
        return updatedChatMessages;
      } else {
        return message;
      }
    });
    setChatMessagesData(messages);
  };

  const countLikes = () => {
    let likes = 0;
    chatMessagesData.forEach((chatMessage) => {
      if (chatMessage.isLiked) {
        likes ++;
      }
    });
    return likes;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between <span className="green">Vladimir</span> and <span className="blue">Estragon</span></h1>
        <section><span id="heartWidget" className="widget">{countLikes()} ❤️s</span></section>
      </header>
      <main>
        <ChatLog entries={chatMessagesData} onUpdateChatMessages={updateChatMessagesData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
