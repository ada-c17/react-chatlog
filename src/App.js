import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setLikedData] = useState(chatMessages);
  let [likedNum, setLikedNum] = useState(0);
  let headerData = 'Chat Between ';

  const setHeaderData = (uniqueSenders) => {
    const firstUser = uniqueSenders[0];

    headerData = headerData + `${firstUser}`;
    uniqueSenders.map((sender) => {
      if (sender !== firstUser) {
        headerData = headerData + ` and ${sender}`;
      }

      return headerData;
    });
  };

  const uniqueSenders = [
    ...new Set(chatMessages.map((person) => person.sender)),
  ];

  setHeaderData(uniqueSenders);

  const updateLikedData = (updatedLike) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedLike.id) {
        if (updatedLike.liked === true) {
          increaseLikes();
        } else {
          decreaseLikes();
        }
        return updatedLike;
      } else {
        return entry;
      }
    });

    setLikedData(entries);
  };

  const decreaseLikes = () => {
    setLikedNum(parseInt((likedNum -= 1)));
  };

  const increaseLikes = () => {
    setLikedNum(parseInt((likedNum += 1)));
  };

  return (
    <div id="App">
      <header>
        <h1>{headerData}</h1>
        <p className="widget" id="heartWidget">
          {likedNum} ❤️s
        </p>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateLiked={updateLikedData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
