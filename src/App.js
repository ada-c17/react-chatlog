import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLiked = (id) => {
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
    }
    const newEntries = [...entries];
    setEntries(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog 
        entries={entries}
        updateLikedCallback={updateLiked} />
      </main>
    </div>
  );
};

export default App;
