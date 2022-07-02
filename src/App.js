import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessageData, setChatData] = useState(chatMessages);

  const heartCount = chatMessageData.reduce((hearts, message) => {
    // if (message.liked) {
    //   hearts += 1;
    // }
    // return hearts;
    return (hearts += message.liked ? 1 : 0);
  }, 0);

  // const participants = chatMessageData.reduce((participantsArray, message) => {
  //   if (!participantsArray.includes(message.sender)) {
  //     participantsArray.push(message.sender);
  //   }
  //   return participantsArray;
  // }, []);

  const participantsString = () => {
    const allNames = chatMessageData.map((message) => message.sender);
    const participants = [...new Set(allNames)];
    // for (let i = 0; i < participants.length - 1; i++) {
    //   chatTitle += ` ${participants[i]} and`;
    // }
    // const chatTitleString =
    //   chatTitle + ` ${participants[participants.length - 1]}`;
    // return chatTitleString;
    return participants.join(' and ');
  };

  const updateChatData = (messageId) => {
    const messages = chatMessageData.map((message) => {
      if (message.id === messageId) {
        const updatedMessage = {
          id: message.id,
          sender: message.sender,
          body: message.body,
          timeStamp: message.timeStamp,
          liked: !message.liked,
        };
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {participantsString()}</h1>
        <h2>{heartCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessageData} onUpdateMessage={updateChatData} />
      </main>
    </div>
  );
};

export default App;
