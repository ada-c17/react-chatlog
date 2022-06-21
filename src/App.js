import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  // const [entries, setEntries] = useState(chatMessages);
  const [liked, setLiked] = useState(0);
  // const likeMessage = (id) => {
  //   const index = entries.findIndex((each) => each.id === id);
  //   const message = entries[index];
  //   const nextEntries = [...entries];
  //   nextEntries[index].liked = !message.liked;
  //   const inc = nextEntries[index].liked ? 1 : -1;
  //   setLiked(liked + inc);
  //   setEntries(nextEntries);
  //   console.log(id);
  // };

  // const nextEntries = entries.map((item) => [...item]);

  // const nextEntries=[];
  // for (const entry of entries) {
  //   const nextEntry=[...entry]
  //   if (nextEntry.id === id) {
  //     nextEntry.id=!nextEntry.id
  //   }
  // }

  const updateLikeMessageFn = (clicked, setClicked) => {
    const increaseLike = clicked ? 1 : -1;
    setLiked((prv) => prv + increaseLike);
    setClicked((prv) => !prv);
  };

  const title = () => {
    return liked ? liked + ' ❤️s' : ' ❤️';
  };
  return (
    <div id="App">
      <header>
        <h1> Chat Room {title()} </h1>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          setLikedCallback={updateLikeMessageFn}
        />
      </main>
    </div>
  );
};

export default App;
