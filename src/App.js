import React, { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

import './App.css';

const App = () => {
  const [messagesData, setMessagesData] = useState(chatMessages);

  const [numLiked, setNumLiked] = useState(0);

  const onHeartClicks = (liked) => {
    if (liked) {
      setNumLiked(numLiked - 1);
    } else {
      setNumLiked(numLiked + 1);
    }
  };

  const onUpdateLikeFx = (id) => {
    const newMessages = messagesData.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setMessagesData(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {numLiked} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onUpdateLike={onUpdateLikeFx}
          onHeartClicks={onHeartClicks}
        />
      </main>
    </div>
  );
};

export default App;
