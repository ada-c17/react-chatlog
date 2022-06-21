import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likes, setTotalLikes] = useState(0);

  const changeLikeButton = (id) => {
    for (const message of messages) {
      // console.log('made it in change like button');
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

  return (
    <div id="App">
      <header>
        <h1 className="like">{likes} ❤️s</h1>
      </header>
      <main>
        <ChatLog
          entries={messages}
          changeLikeButton={changeLikeButton}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
