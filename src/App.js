import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  // let totalLikes = 0;
  const [messages, setMessages] = useState(chatMessages);
  const [likes, setTotalLikes] = useState(0);
  const changeLikeButton = (id) => {
    for (const message of messages) {
      // console.log(message);
      if (message.id === id) {
        message.liked = !message.liked;
        if (message.liked === true) {
          setTotalLikes(likes + 1);
        } else {
          setTotalLikes(likes - 1);
        }
      }
      const updatedMessages = [...messages];
      setMessages(updatedMessages);
    }
  };
  // console.log(chatMessages);
  // const oneMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1 className="like">{likes} ❤️s</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatMessages}
          changeLikeButton={changeLikeButton}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
