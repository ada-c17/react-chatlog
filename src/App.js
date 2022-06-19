import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import {useState} from 'react'

const App = () => {
  const chatMsg = chatMessages;
  const [liked, setLiked] = useState(chatMsg.liked)
 
  //handle click liked/unliked event on button
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
  
  //updates #of likes after liked the msg
  let countLikes = 0;
  const countLikesFunc = () => {
    console.log('countLikesFunc in App.js');
    for (let i of newChats){
      if (i.liked === true){
        countLikes += 1;
      }
    }
    console.log(countLikes); //print updated number locally
    }
    // console.log(countLikes); print 0 didn't update globally


    //updates color based on sender
    // const setColorFunc = (id) => {
    //   for (let chat of newChats){
    //     if (chat.id === id){
    //       chat.body = '';
    //     }
    //   }
    // }
    console.log(chatMsg)
  return (
    <div id="App">
      <header>
        {/* <h1><ColorChoice chatMsg={chatMsg} /></h1> */}
        <ColorChoice chatMsg={chatMsg} />
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatMsg={chatMsg} likedEvent={likedEvent} countLikesFunc={countLikesFunc} />
      </main>
    </div>
  );
};

export default App;
