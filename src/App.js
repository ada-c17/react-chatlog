import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages)

  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setMessageData(messages)
  }

  return (
    <div id="App" >
      <header>
        <h1>Chatlog</h1>
      </header>
      <main className="chat-log">
        <ChatLog 
          messages={messageData}
          onUpdateMessage={updateMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
