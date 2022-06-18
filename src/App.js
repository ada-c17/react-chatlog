import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import {useState} from 'react'

const App = () => {
  const chatMsg = chatMessages;
  const [liked, setLiked] = useState(chatMsg.liked)
 
  let countLikes = 0;
  const newChats = [...chatMsg];

  const likedEvent = (id) => {
    console.log('inside likedEvent in App.js');
    // const newChats = [...chatMsg];
    for (let chat of newChats){
      if (chat.id === id){
        chat.liked = !chat.liked;
      }
    }
    console.log(chatMsg);
    console.log(newChats);
    setLiked(newChats);

  }

  const countLikesFunc = () => {
    console.log('countLikesFunc in App.js');
    for (let i of newChats){
      if (i.liked === true){
        countLikes += 1;
      }
    }
    }
  return (
    <div id="App">
      <header>
        <h1>React ChatLog</h1>
        <p>{countLikes} ❤️ </p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatMsg={chatMsg} likedEvent={likedEvent} countLikesFunc={countLikesFunc}/>
      </main>
    </div>
  );
};

export default App;
