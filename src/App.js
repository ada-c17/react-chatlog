import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
// import ChatEntry from './components/ChatEntry';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [hearts, setHearts] = useState(0);
  const [emoji, setEmoji] = useState('🤍');

  // const updateEmojiRed = () => {
  //   setEmoji('❤️');
  // };

  // const updateEmojiWhite = () => {
  //   setEmoji('🤍');
  // };

  const addLikes = () => {
    setHearts(hearts + 1);
  };

  const removeLikes = () => {
    setHearts(hearts - 1);
  };

  const updateLikes = (id) => {
    const newEntries = [];
    for (const entry of entries) {
      const newEntry = { ...entry };
      if (id === newEntry.id) {
        if (newEntry.liked) {
          removeLikes();
          // updateEmojiWhite();
        } else {
          addLikes();
          // updateEmojiRed();
        }
        newEntry.liked = !newEntry.liked;
        console.log(newEntry.liked);
      }
      newEntries.push(newEntry);
    }
    setEntries(newEntries);
    // for (let entry in entries) {
    // debugger;
    // }
  };

  const senderLocal = chatMessages[0].sender;
  console.log(`first: ${senderLocal}`);

  const senderRemote = chatMessages[1].sender;
  console.log(`two: ${senderRemote}`);
  console.log(`entries: ${entries}`);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2 className="heart-count">{hearts} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entries}
          updateLikesCallback={updateLikes}
          // addLikesCallback={addLikes}
          // removeLikesCallback={removeLikes}
          // updateEmojiRed={updateEmojiRed}
          // updateEmojiWhite={updateEmojiWhite}
          senderLocal={senderLocal}
          senderRemote={senderRemote}
          emoji={emoji}
        />
      </main>
    </div>
  );
};

export default App;
