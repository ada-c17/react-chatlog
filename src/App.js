import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp'
import { useState } from 'react';
import chatJson from './data/messages.json';


const App = () => {

  const [chatData, setChatData] = useState(chatJson);

  const updateChatData = updatedMessage => {
    const messages = chatData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
  setChatData(messages)
  }

  const getTotalLikes = () => {
    let totalLikes = 0;
    for (const message of chatData) {
      if (message.liked === true) {
        totalLikes++;
      }
    }
    return totalLikes;
  }

  const numberOfLikes = getTotalLikes(); 
  
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon 🤖</h1>
        <h2>{numberOfLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog
        entries={chatData}
        onUpdateChatLogData={updateChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
