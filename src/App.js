import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [likedState, setLikedState] = useState(chatMessages);
  const likeAction = (id) => {
    const newLikes = [...likedState];
    for (let likes of newLikes) {
      if (likes.id === id) {
        if (likes.liked === true) {
          likes.liked = false;
        } else if (likes.liked === false) {
          likes.liked = true;
        }
      }
    }
    setLikedState(newLikes);
  };

  let likedCount = 0;
  for (const liked of chatMessages) {
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
        <ChatLog entries={chatMessages} setLikesCallback={likeAction} />
      </main>
    </div>
  );
};

export default App;
