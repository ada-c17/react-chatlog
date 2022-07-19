import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import messageDataJson from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  const[messageData,setMessageData] = useState(chatMessages);
  const getCountLikes = () => {
    let likes = 0;
    for (const message of messageData){
      if (message.liked){
        likes += 1;
      }
    };
    return likes
  };
  const updateLikes = (updatedData) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedData.id) {
        return updatedData
      } 
      else return message 
    });
    setMessageData(messages);
  }
    return ( 
      <div id="App">
        <header>
          <h1>Application title</h1>
          <h2>{getCountLikes()}</h2>
        </header>
        <main>
          {/* Wave 01: Render one ChatEntry component
          Wave 02: Render ChatLog component */}
          {/* <ChatLog chatMessages={[chatMessages]} */}
          <ChatLog messageData={messageData} updateLikes={updateLikes}></ChatLog>
        </main>
      </div>
    );
};

export default App;
