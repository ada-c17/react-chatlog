import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {

  // if entry id is liked,
  // change the string of the element by class name 
  const [entries, setEntries] = useState(chatMessages);
  //  '🤍' : '❤️';
  const toggleLike = (id) => {
    // adjust this function so that id is used
    // if entry id liked is NOT false, 
    // then set state of liked.id to '❤️'
    const entriesCopy = entries.map((entry) => {
      if (entry.id === id) {
        return   {
          id: entry.id,
          sender: entry.sender,
          body: entry.body,
          timeStamp: entry.timeStamp,
          liked: !entry.liked
        };
      } else return entry;
    });
    setEntries(entriesCopy);
  };

  const countLikes = () => {
    let counter = 0;
    for (let entry of entries) {
      if (entry.liked) {
        counter += 1;
      };
    };
    return counter;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>Count: {countLikes()}</h2>
      </header>
      <main>
        <ChatLog 
        entries={entries}
        setLiked={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
