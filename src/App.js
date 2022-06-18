import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <p id="heartWidget">{numHearts} ❤️s</p>
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
