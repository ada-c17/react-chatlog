import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLikeMessageFn = (id) => {
    console.log('todo: update like for id');

    const nextEntriesData = entries.map((entry) => {
      const nextEntry = { ...entry };
      if (nextEntry.id === id) {
        nextEntry.liked = !nextEntry.liked;
      }

      return nextEntry;
    });
    setEntries(nextEntriesData);
  };
  const countLike = () => {
    let count = 0;
    for (let entry of entries) {
      if (entry.liked) {
        count += 1;
      }
    }
    return count > 1 ? count + ' ❤️s' : count + ' ❤️';
  };
  const localSender = chatMessages[0].sender;

  return (
    <div id="App">
      <header>
        <h1>{countLike()} </h1>
      </header>
      <main>
        <ChatLog
          entries={entries}
          setLikedCallback={updateLikeMessageFn}
          localSender={localSender}
        />
      </main>
    </div>
  );
};

export default App;
