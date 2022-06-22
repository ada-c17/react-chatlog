// import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react';

const App = () => {

  const [updateLike, setUpdateLike] = useState(chatMessages);
  
  const [likeCount, setLikeCount] = useState(0);

  const setLikeUpdateFn = (id) => {
    
    let likeCount = 0;

    const newLikeData = updateLike.map((entry) => {
      const newLikes = {...entry};
      if(newLikes.id === id) {
        newLikes.liked = !newLikes.liked;
      }

      if (newLikes.liked) {
        likeCount += 1;
      }
      return newLikes;
    })

    setLikeCount(likeCount);

    setUpdateLike(newLikeData);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section><p>{likeCount} ❤️s</p></section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={updateLike} setLikeUpdateCallBack={setLikeUpdateFn}/>
      </main>
    </div>
  );
};

export default App;
