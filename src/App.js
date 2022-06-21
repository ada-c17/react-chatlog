import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  // const [likeCount, setLikeCount] = useState(0);

  // Need a function to update the like count

  const [messages, setMessages] = useState(chatMessages);

  const toggleHeart = (id) => {

    for (const message of messages) {
      if (message.id === id) {
        message.liked = !message.liked;
      }
    }
    const newMessages = [...messages];
    setMessages(newMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2> Likes go here:</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} toggleHeartCallback={toggleHeart}/>
      </main>
    </div>
  );
}

export default App;
