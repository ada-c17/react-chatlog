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
  
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon 🤖</h1>
      </header>
      <main>
        {/* <ChatEntry
        sender="Chidi"
        body="open the door or i'm gonna throw rocks at ur window"
        timeStamp={<TimeStamp time='2016-05-18T22:12:03Z'/>}
        ></ChatEntry> */}
        <ChatLog
        entries={chatData}
        onUpdateChatLogData={updateChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
