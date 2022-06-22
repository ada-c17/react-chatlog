import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const entries = chatMessages;
  const [entriesData, setEntriesData] = useState(entries);

  const updateEntriesData = (id) => {
    const newEntries = [];
    for (const entry of entriesData) {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      newEntries.push(newEntry);
    }
    setEntriesData(newEntries);
  };

  const updateTotalLikes = (id) => {
    let likes = 0;
    for (const entry of entriesData) {
      if (entry.liked) {
        likes += 1;
      }
    }
    return likes;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{updateTotalLikes()} ❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entriesData} updateEntries={updateEntriesData} />
      </main>
    </div>
  );
};

export default App;
