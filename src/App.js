import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [newChatMessages, setNewChatMessages] = useState(chatMessages);

  const createNewMessage = (updatedMessage) => {
    const newChatData = newChatMessages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setNewChatMessages(newChatData);
  };

  const totalLike = newChatMessages.reduce((total, message) => {
    return total + message.liked;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Jande's Chat Log</h1>
        <div>{totalLike} ❤️s</div>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        ></ChatEntry> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog
          entries={newChatMessages}
          updateMessage={createNewMessage}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
