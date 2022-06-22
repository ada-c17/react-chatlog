import React from 'react';
import './App.css';
import messages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const getLikedMessages = (id) => {
    console.log('Update heart icon if liked')

    const newEntries = entries.map((chatEntry) => {
      const newChatMessage = {...chatEntry};
      if (newChatMessage.id === id) {
        newChatMessage.liked = !newChatMessage.liked;
      }
      return newChatMessage;
    })
    setEntries(newEntries);
  }

  const numberOfLikes = () => {
    let numberMessagesLiked = 0;
    for (const chatEntry of entries) {
      if (chatEntry.liked) {
        numberMessagesLiked += 1;
      }
    }
    return numberMessagesLiked;
  }

  return (
    <div id='App'>
      <header className = 'header'>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{numberOfLikes()} ❤️s</h2>
      </header>
      <main className = 'widget'>
        <ChatLog
          entries={entries}
          likeCallback={getLikedMessages}
        />
      </main>
    </div>
  );
};

export default App;
