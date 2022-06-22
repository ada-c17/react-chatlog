import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageState, setMessageState] = useState(chatMessages);

  const likeAction = (id) => {
    const newMsgData = messageState.map((msg) => {
      const newMsg = { ...msg };
      if (newMsg.id === id) {
        newMsg.liked = !newMsg.liked;
      }
      return newMsg;
    });
    setMessageState(newMsgData);
  };

  let likedCount = 0;
  for (const liked of messageState) {
    if (liked.liked === true) {
      likedCount += 1;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{likedCount} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messageState} setLikesCallback={likeAction} />
      </main>
    </div>
  );
};

export default App;
