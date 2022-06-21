import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const updateChatData = (id) => {
    let currentLikeCount = 0;
    console.log('in App, in updateChatData Func...');
    const newChatData = chatData.map((entry) => {
      const newEntry = { ...entry }; // this gives a copy of entry object
      if (newEntry.id === id) {
        newEntry.liked = !entry.liked; //toggle liked on/off
      }
      if (newEntry.liked === true) {
        currentLikeCount += 1;
      }
      return newEntry;
    });
    setChatData(newChatData);
    setLikeCount(currentLikeCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log </h1>
        <h2> {likeCount} ❤️s Clicked</h2>
      </header>
      <main>
        <ChatLog
          likeCount={likeCount}
          entries={chatData}
          updateLikedStatus={updateChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
