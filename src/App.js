import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// import { useState } from 'react';

const App = () => {
  const chatData = chatMessages;

  const [likes, setLikes] = useState(chatData);

  const toggleLikes = (id) => {
    // console.log('toggled', id);

    const updatedChatData = chatData.map((like) => {
      const updatedChat = { ...like };
      if (updatedChat.id === id) {
        like.liked = !like.liked;
      }
      return updatedChat;
    });

    setLikes(updatedChatData);

    // const updatedChatData = [...likes];

    // for (let like of updatedChatData) {
    //   if (like.id === id) {
    //     like.liked = !like.liked;
    //     // console.log('working');
    //   }
    // }
    // setLikes(updatedChatData);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        {/* <p> You have {updateLikes} likes</p> */}
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={likes} toggleLikes={toggleLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
