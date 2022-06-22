import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // brains
  const [updatedChatLog, setUpdatedChatLog] = useState(chatMessages);

  const changeMsg = (updatedChatMsg) => {
    const updatedChatData = updatedChatLog.map((msg) => {
      if (updatedChatMsg.id === msg.id) {
        return updatedChatMsg;
      } else {
        return msg;
      }
    });
    setUpdatedChatLog(updatedChatData);
  };
  const totalLikes = updatedChatLog.reduce((total, msg) => {
    return total + msg.liked;
  }, 0);

  // beauty
  return (
    <div id="App">
      <header>
        <h1>Huma's Chat Log</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        ></ChatEntry> */}
        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={updatedChatLog} newEntry={changeMsg}></ChatLog>
      </main>
    </div>
  );
};

export default App;
