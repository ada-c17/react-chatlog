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

  const [color, setColor] = useState('black');
  const selectColor = (chatColor) => {
    setColor(chatColor);
  };

  return (
    <div id="App" className={color}>
      <header>
        <h1>Application title</h1>
        <section>
          <div>
            <h2>{localUser}</h2>
            <ColorChoice setColorCallback={selectColor}></ColorChoice>
          </div>
          <p id="heartWidget">{numHearts} ❤️s</p>
          <div>
            <h2>{remoteUser}</h2>
            <ColorChoice setColorCallback={selectColor}></ColorChoice>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messageData} // send state variable as value
          onUpdateMessage={updateMessageData}
          local={localUser}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
