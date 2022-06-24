import { React, useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
const App = () => {

  const [messageData, setMessageData] = useState(chatMessages)
  const [likeData, setLikeData] = useState(0)

  const updateMessage = (messageToUpdate) => {
    const entries = messageData.map((message) => {
      if (message.id === messageToUpdate.id) {
        return messageToUpdate
      }
      else if (messageToUpdate) {
        setLikeData(likeData + 1);

      } else {
        setLikeData(likeData - 1);
      };
    })
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>Like count {likeData} ❤️s</h2>
      </header>
      <main>
        {
          <ChatLog entries={chatMessages}
            onUpdateMessage={updateMessage}>
          </ChatLog>

        /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
