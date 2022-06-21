import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const localUser = chatMessages[0].sender;
  let remoteUser;
  for (const chat of chatMessages) {
    if (chat.sender !== localUser) {
      remoteUser = chat.sender;
      break;
    }
  }

  const [userColors, setUserColors] = useState({
    localUser: 'black',
    remoteUser: 'black',
  });

  const changeColor = (user, color) => {
    if (user === 'localUser') {
      setUserColors({ ...userColors, localUser: color });
    } else {
      setUserColors({ ...userColors, remoteUser: color });
    }
  };

  const [numHeart, setNumHeart] = useState(0);

  const onHeartChange = (isHeartTurnedOn) => {
    setNumHeart(isHeartTurnedOn ? numHeart + 1 : numHeart - 1);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={userColors.localUser}>{localUser}</span>{' '}
          and <span className={userColors.remoteUser}>{remoteUser}</span>
        </h1>
      </header>
      <main>
        <div id="colorPick">
          <ColorChoice
            onColorChange={(color) => {
              changeColor('localUser', color);
            }}
            sender={localUser}
            currentUserColors={userColors.localUser}
          />
          <p id="heart">{numHeart} ❤️s</p>
          <ColorChoice
            onColorChange={(color) => changeColor('remoteUser', color)}
            sender={remoteUser}
            currentUserColors={userColors.remoteUser}
          />
        </div>
        <ChatLog
          onHeartChange={onHeartChange}
          entries={chatMessages}
          localUser={localUser}
          userColors={userColors}
        />
      </main>
    </div>
  );
};

export default App;
