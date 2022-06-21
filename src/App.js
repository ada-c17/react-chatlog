import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  const chatMsg = chatMessages.length !== 0 ? chatMessages : [];
  const [chats, setChats] = useState(chatMsg);
  
  //update states for new deep copied objects to handle click button event
  const likedEvent = (id) => {
     //console.log('inside likedEvent in App.js');
    // const newChats = [...chatMsg]; //shallow copy
    const newChats = JSON.parse(JSON.stringify(chats)); //deep copy
    for (let chat of newChats) {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
    }
    setChats(newChats);
  };

  //updates #of ❤️s on top after clicked the ❤️
  let countLikes = 0;
  const countLikesFunc = () => {
    //console.log('countLikesFunc in App.js');
    const newChats = JSON.parse(JSON.stringify(chats)); //deep copy
    for (let i of newChats) {
      if (i.liked === true) {
        countLikes += 1;
      }
    }
    // debugger;
    return countLikes;
  };

  return (
    <div id="App">
      <header>
        {/* <h1><ColorChoice chatMsg={chatMsg} /></h1> */}
        <ColorChoice chatMsg={chats} countLikesFunc={countLikesFunc} />
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chats} likedEvent={likedEvent} countLikesFunc={countLikesFunc} />
      </main>
    </div>
  );
};

export default App;
