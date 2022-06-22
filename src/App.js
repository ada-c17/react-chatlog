import React from 'react';
import {useState} from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';

const App = () => {
  console.log('value of chatMessages',chatMessages);
  const [entries, setEntries] = useState(chatMessages);

  const updateLike = (id) => {
    const updateLikes = entries.map((entry) => {
      const newEntry = {...entry};
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      return newEntry;
    });
    setEntries(updateLikes);
  };

  const countLikes = () => {
    let count = 0;
    for (let entry of entries) {
      if (entry.liked === true) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
        <section>
          <h2 id= "heartWidget" className="widget"> 
            <span>{countLikes()} {''} ❤️s</span>
          </h2>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={entries}
          updateLikeHeart={updateLike} />
      </main>
    </div>
  );
};

export default App;
