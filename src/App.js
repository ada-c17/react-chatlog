import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleLiked = (id, liked) => {
    const i = chatMessages.findIndex((message) => message.id === id);
    const updated = [...messages]; // copy the messages to a new array
    updated[i] = { ...updated[i], liked: !liked }; // copy properties of the message to a new object
    setMessages(updated);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h1>{messages.filter((message) => message.liked).length} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} toggleLiked={toggleLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
