import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  // console.log(chatMessages);

  // const [likedMap, setLikedMap] = useState({})
  const [likedCount, setLikedCount] = useState(0);

  const addLike = () => setLikedCount(likedCount + 1);
  const removeLike = () => setLikedCount(likedCount - 1);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section id="heartWidget">{likedCount} ❤️s</section>
      </header>
      <main>
        <ChatLog
          addLike={addLike}
          removeLike={removeLike}
          entries={chatMessages}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
