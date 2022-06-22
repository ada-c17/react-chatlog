import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [likes, setLikes] = useState(0);
  const [entries, setEntries] = useState(chatMessages);
  const [sender1Color, setSender1Color] = useState('black');
  const [sender2Color, setSender2Color] = useState('black');

  const sender1 = chatMessages[0].sender;
  const sender2 = chatMessages[1].sender;

  const updateSender1Color = (color) => {
    setSender1Color(color);
  };

  const updateSender2Color = (color) => {
    setSender2Color(color);
  };

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const decrementLikes = () => {
    setLikes(likes - 1);
  };

  const updateLikes = (id) => {
    const newChatMessages = entries.map((chatMessage) => {
      const newChatMessage = { ...chatMessage };

      if (newChatMessage.id === id) {
        if (newChatMessage.liked) {
          decrementLikes();
          newChatMessage.liked = !newChatMessage.liked;
        } else {
          incrementLikes();
          newChatMessage.liked = !newChatMessage.liked;
        }
      }
      return newChatMessage;
    });

    setEntries(newChatMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <h1 className="likes-count">{likes} ❤️s</h1>
        <ColorChoice sender={sender1} updateSenderColor={updateSender1Color} />
        <ColorChoice sender={sender2} updateSenderColor={updateSender2Color} />
        <ChatLog
          entries={entries}
          sender1={sender1}
          sender1Color={sender1Color}
          sender2Color={sender2Color}
          updateLikes={updateLikes}
        />
      </main>
    </div>
  );
};

export default App;
