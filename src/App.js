import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

// Want App component to store all ChatEntry data in state
const App = () => {
  const [entryData, setEntryData] = useState(chatMessages); // App is keeping a list of chat entries in state

  const [likeCount, setLikeCount] = useState(0);

  // Make a copy of the entryData, but if a like button was clicked, then the entry is
  // updated through a toggleLike function. Pass this function down as a prop!
  const updateEntry = (entryToUpdate) => {
    const entries = entryData.map((entry) => {
      if (entry.id === entryToUpdate.id) {
        return entryToUpdate;
      } else if (entryToUpdate.liked === true) {
        setLikeCount(likeCount + 1);
      } else if (entryToUpdate.liked === false) {
        setLikeCount(likeCount - 1);
      }
      return entry;
    });

    setEntryData(entries); // Set state with new array of entries
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        {/* Pass down updateEntry as prop to ChatLog */}
        <ChatLog entries={entryData} onLikeMessage={updateEntry}></ChatLog>
      </main>
    </div>
  );
};

export default App;
