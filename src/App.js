import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';

const App = () => {
  // tracking state of logMessage object
  const [logMessages, setChatMessages] = useState(chatMessages);

  // tracking liked count
  const [likedCount, setLikedCount] = useState(0);

  // tracking state of color
  const [colorSelection, setColorSelection] = useState('black');

  // tracking state of user
  const [user, setUser] = useState('');

  // function to flip the liked and count liked in chatMessages
  const fliplike = (id) => {
    const newLogMessages = [];
    for (const logMessage of logMessages) {
      let newLogMessage = Object.assign({}, logMessage);
      if (newLogMessage.id === id) {
        newLogMessage.liked = !newLogMessage.liked;
        if (!logMessage.liked) {
          setLikedCount((prevCount) => prevCount + 1);
        } else {
          setLikedCount((prevCount) => prevCount - 1);
        }
      }
      newLogMessages.push(newLogMessage);
    }

    setChatMessages(newLogMessages);
  };

  // define button and color
  const buttonList = ['🔵', '🔴', '🟢', '🟠', '🟣', '🟡'];
  const colorList = ['blue', 'red', 'green', 'orange', 'purple', 'yellow'];

  // set color
  const setColorAndUser = (color, user) => {
    setColorSelection(color);
    setUser(user);
  };

  // define user
  const localUser = logMessages[0].sender;
  const remoteUser = logMessages[1].sender;

  // set user state to true or false
  let userState = false;
  if (user === localUser) {
    userState = true;
  }
  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          <span className={userState ? `${colorSelection}` : ''}>
            {localUser}{' '}
          </span>{' '}
          and{' '}
          <span className={!userState ? `${colorSelection}` : ''}>
            {remoteUser}
          </span>
        </h1>
        <div className="heart-count">
          <div>
            <div
              className={userState ? `${colorSelection}` : ''}
            >{`${localUser}'s color:`}</div>
            <div className="button-color">
              <ColorChoice
                userLocal={localUser}
                color={colorList[0]}
                button={buttonList[0]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={localUser}
                color={colorList[1]}
                button={buttonList[1]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={localUser}
                color={colorList[2]}
                button={buttonList[2]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={localUser}
                color={colorList[3]}
                button={buttonList[3]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={localUser}
                color={colorList[4]}
                button={buttonList[4]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={localUser}
                color={colorList[5]}
                button={buttonList[5]}
                setColorCallBack={setColorAndUser}
              />
            </div>
          </div>

          <div>{`${likedCount} ❤️s`}</div>

          <div>
            <div
              className={!userState ? `${colorSelection}` : ''}
            >{`${remoteUser}'s color:`}</div>
            <div className="button-color">
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[0]}
                button={buttonList[0]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[1]}
                button={buttonList[1]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[2]}
                button={buttonList[2]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[3]}
                button={buttonList[3]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[4]}
                button={buttonList[4]}
                setColorCallBack={setColorAndUser}
              />
              <ColorChoice
                userLocal={remoteUser}
                color={colorList[5]}
                button={buttonList[5]}
                setColorCallBack={setColorAndUser}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={logMessages}
          likedCallBack={fliplike}
          userState={user}
          displayColor={colorSelection}
          userLocal={localUser}
        />
      </main>
    </div>
  );
};

export default App;
