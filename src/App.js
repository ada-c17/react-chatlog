import { React, useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [numLikes, setNumLikes] = useState(
    chatMessages.reduce((prev, msg) => {
      return msg.liked ? prev++ : prev;
    }, 0)
  );
  const updateMessage = (updatedChat) => {
    const chats = chatData.map((chatEntry) => {
      return chatEntry.id === updatedChat.id ? updatedChat : chatEntry;
    });
    setChatData(chats);
    updatedChat.liked ? setNumLikes(numLikes + 1) : setNumLikes(numLikes - 1);
  };
  return (
    <div id="App">
      <header>
        <h1>{numLikes} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateMessage={updateMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
