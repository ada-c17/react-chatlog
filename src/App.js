import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateToggleLike = (id) => {
    const newChatData = chatData.map((entry) => {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      return entry;
    });
    setChatData(newChatData);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h1 id="heartWidget">Wow</h1>
      </header>
      <main>
        <h1>Likes =</h1>
        <br />
        {/* Wave 01: Render one ChatEntry component*/}
        <h1>Chat Entry</h1>
        <ChatEntry
          id={chatMessages[0].id}
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
          liked={chatMessages[0].liked}
          toggleLike={updateToggleLike}
        />

        {/* Wave 02: Render ChatLog component */}
        <h1>Chat Log</h1>
        <ChatLog chatData={chatData} toggleLike={updateToggleLike} />
      </main>
    </div>
  );
};

export default App;
