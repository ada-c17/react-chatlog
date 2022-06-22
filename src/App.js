import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  // creates variable to update likeCount state and logic to toggle from
  //unliked to liked, when liked, we increment by 1
  const heartLikeCount = (id) => {
    let likesCount = 0;
    const newChatEntries = chatEntries.map((chatEntry) => {
      const newChatEntry = { ...chatEntry };
      if (newChatEntry.id === id) {
        newChatEntry.liked = !newChatEntry.liked;
      }
      if (newChatEntry.liked === true) {
        likesCount += 1;
      }
      return newChatEntry;
    });
    setChatEntries(newChatEntries);

    setLikeCount(likesCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <p>{likeCount} ❤️s</p>
      </header>

      <main>
        <ChatLog entries={chatMessages} likesCountCallBack={heartLikeCount} />
      </main>
    </div>
  );
};

export default App;
