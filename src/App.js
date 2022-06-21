import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // set initial state for messages
  const [chatData, setChatData] = useState(chatMessages);

  // helper function to change 'liked' state for individual messages by id
  const toggleLikeButton = (id) => {
    const messages = chatData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }

      return message;
    });

    // update state of message data
    setChatData(messages);
  };

  // helper function to count number of liked messages
  const countLikes = (chatData) => {
    let likeCount = 0;

    for (const message of chatData) {
      if (message.liked) {
        likeCount += 1;
      }
    }

    return likeCount;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="likedCountDisplay">
          {countLikes(chatData)} ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateLikeStatus={toggleLikeButton} />
      </main>
    </div>
  );
};

export default App;
