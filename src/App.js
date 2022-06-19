import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  // state variable: messageData
  const [messageData, setMessageData] = useState(chatMessages);

  // can handle a message potentially being updated for body text, etc.?
  // if that functionality were added in
  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const countHearts = () => {
    let count = 0;
    for (let message of messageData) {
      if (message.liked) {
        count++;
      }
    }
    return count;
  };
  let numHearts = countHearts();

  // set local as Vladimir to match ReadMe photos
  // pass it down to ChatLog to ChatEntry
  const localUser = chatMessages[0].sender;
  // to be used for colors
  const remoteUser = chatMessages[1].sender;

  const [localColor, setLColor] = useState('black');
  const [remoteColor, setRColor] = useState('black');
  const setLocalColor = (chatColor) => {
    setLColor(chatColor);
  };

  const setRemoteColor = (chatColor) => {
    setRColor(chatColor);
  };

  return (
    <div id="App">
      <header>
        <h1>
          <span className={localColor}>{localUser}</span> and{' '}
          <span className={remoteColor}>{remoteUser}</span> chat
        </h1>
        <section>
          <div>
            <h2 className={localColor}>{localUser}</h2>
            <ColorChoice setColorCallback={setLocalColor}></ColorChoice>
          </div>
          <p id="heartWidget">{numHearts} ❤️s</p>
          <div>
            <h2 className={remoteColor}>{remoteUser}</h2>
            <ColorChoice setColorCallback={setRemoteColor}></ColorChoice>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messageData} // send state variable as value
          onUpdateMessage={updateMessageData}
          local={localUser}
          localColor={localColor}
          remoteColor={remoteColor}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
