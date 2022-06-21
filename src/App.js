import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

// const testData = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// };
// const testData = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2021-05-15T22:49:06+00:00',
//   liked: false,
// };
const testData = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2021-05-15T22:49:06+00:00',
    liked: false,
  },
];

// const testConvo = chatMessages;
const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const toggleLiked = (id) => {
    console.log('liking...');
    const newEntries = entries.map((entry) => {
      return entry.id === id
        ? {
            id: entry.id,
            sender: entry.sender,
            body: entry.body,
            timeStamp: entry.timeStamp,
            liked: !entry.liked,
          }
        : entry;
    });
    setEntries(newEntries);
  };

  const countLikes = (entries) => {
    let likes = 0;
    for (const entry of entries) {
      if (entry.liked) {
        likes++;
      }
    }
    return likes;
  };

  return (
    <div id="App">
      <header>
        <h1>Fly on the Wall</h1>
        <p>Their convo, for your eyes</p>
        <p>{countLikes(entries)} ❤️s</p>
      </header>
      <main>
        {/* <ChatLog entries={testData}></ChatLog> */}
        <ChatLog entries={entries} likedCallback={toggleLiked}></ChatLog>
        {/* <ChatEntry
          sender={testData.sender}
          body={testData.body}
          timeStamp={testData.timeStamp}
          liked={testData.liked}
        ></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
