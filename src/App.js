import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const toggleHeart = (id) => {
    let currentLikes = 0;
    const newEntries = entries.map((entry) => {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      if (newEntry.liked === true) {
        currentLikes += 1;
      }
      return newEntry;
    });
    setEntries(newEntries);
    setLikes(currentLikes);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{likes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
