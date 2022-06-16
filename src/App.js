import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const localUser = chatMessages[0].sender;
  let remoteUser;
  for (const chat of chatMessages) {
    if (chat.sender !== localUser) {
      remoteUser = chat.sender;
      break;
    }
  }
  const [numHeart, setNumHeart] = useState(0);

  const onHeartChange = (isHeartTurnedOn) => {
    setNumHeart(isHeartTurnedOn ? numHeart + 1 : numHeart - 1);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localUser} and {remoteUser}
        </h1>
        <p>{numHeart} ❤️s</p>
      </header>

      <main>
        <ChatLog
          onHeartChange={onHeartChange}
          entries={chatMessages}
          localUser={localUser}
        />
        {/* Wave 01: Render one ChatEntry component Wave 02: Render ChatLog
        component */}
      </main>
    </div>
  );
};

export default App;
