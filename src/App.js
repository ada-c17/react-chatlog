import React from 'react';
import {useState} from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log('value of chatMessages',chatMessages);
  const [entries, setEntries] = useState(chatMessages);

  const updateLike = (id) => {
    const updateLikes = [...entries];
    for (let entry of updateLikes) {
      if (entry.id === id) {
        entry.heart = !entry.heart;
      }
    }
    setEntries(updateLikes);
  };

  const countLikes = () => {
    let count = 0;
    for (let entry of chatMessages) {
      if (entry.heart === true) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {''}
          <span id='sender1'>
            {chatMessages[0].sender}
          </span>
          {''} and {''}
          <span id='sender2'>
            {chatMessages[1].sender}
          </span>
        </h1>
        <section>
          <h2 id= "heartWidget" className="widget"> 
            <span>{countLikes()} {''} ❤️s</span>
          </h2>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry/> */}
        <ChatLog 
          entries={chatMessages}
          updateLikeHeart={updateLike}
        />
      </main>
    </div>
  );
};

export default App;
