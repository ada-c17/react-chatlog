import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setData] = useState(chatMessages);
  let [likesCount, setLikesCount] = useState(0);

  const setLike = (id) => {
    const updatedData = chatData.map((msg) => {
      const newMsg = { ...msg };
      if (newMsg.id === id) {
        newMsg.liked = !newMsg.liked;
        if (newMsg.liked === true) {
          likesCount += 1;
        } else {
          likesCount -= 1;
        }
      }
      return newMsg;
    });
    setData(updatedData);
    setLikesCount(likesCount);
  };

  const localUser = chatData.filter((msg) => msg.sender === 'Vladimir');

  const remoteUser = chatData.filter((msg) => msg.sender === 'Estragon');
  console.log('remote msg', remoteUser);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localUser[0].sender} and {remoteUser[0].sender}
        </h1>
        <section>{likesCount} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={chatData} setLikeCallback={setLike} />
      </main>
    </div>
  );
};

export default App;
