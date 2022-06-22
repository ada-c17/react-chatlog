import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setData] = useState(chatMessages);
  let [likesCount, setLikesCount] = useState(0);
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');

  const setLike = (id) => {
    const updatedData = chatData.map((msg) => {
      const newMsg = { ...msg };
      if (newMsg.id === id) {
        newMsg.liked = !newMsg.liked;
        if (newMsg.liked === true) {
          likesCount += 1;
        } else {
          likesCount -= 1;
        }
      }
      return newMsg;
    });
    setData(updatedData);
    setLikesCount(likesCount);
  };

  const updateLocalColor = (newColor) => {
    setLocalColor(newColor);
  };

  const updateRemoteColor = (newColor) => {
    setRemoteColor(newColor);
  };

  const localUser = 'Vladimir';
  const remoteUser = 'Estragon';

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={localColor}>{localUser}</span> and{' '}
          <span className={remoteColor}>{remoteUser}</span>
        </h1>
        <section>
          <ColorChoice
            name={localUser}
            color={localColor}
            updateColorFn={updateLocalColor}
          />
          <h2 className="widget" id="heartWidget">
            {likesCount} ❤️s
          </h2>
          <ColorChoice
            name={remoteUser}
            color={remoteColor}
            updateColorFn={updateRemoteColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          setLikeCallback={setLike}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
