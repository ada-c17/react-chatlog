import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatMessagesData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedMessage) => {
    const messages = chatMessagesData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }

    });
    setChatData(messages);
  };


  const countLikes = (messages) => {
    let likes = 0;
    messages.forEach((message) => {
      if (message.liked) {
        likes++;
      }
    });
    return likes;
  };

  const likes = countLikes(chatMessagesData);

  return (
    <div id="App">

      <header>
        <h1>A tale of two cities</h1>
        <section><span id="heartWidget" className="widget"> {likes} 💚s</span></section>
      </header>

      <main>
        {<div>
          { <ChatLog
            entries={ chatMessagesData }
            onUpdateMessage={ updateChatData }
        /> }
        </div>}
      </main>
    </div>
  );
};

export default App;
