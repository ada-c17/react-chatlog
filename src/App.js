import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const likeMessage = (id) => {
    const index = entries.findIndex((each) => each.id === id);
    const message = entries[index];
    const nextEntries = [...entries];
    nextEntries[index].liked = !message.liked;
    setEntries(nextEntries);
  };
  // const likeMessage = (clicked, setClicked) => {
  //   console.log('inside likeMessage: ');
  //   setClicked(!clicked);
  //   !clicked ? setLiked((p) => p + 1) : setLiked((p) => p - 1);

  //   // {liked.id}!== id ? '🤍' : '❤️'};
  //   // const newLiked=[...liked];
  //   // setLiked(newLiked);
  const likedCount = () => {
    return entries.filter((each) => each.liked).length;
  };
  const title = () => {
    const count = likedCount();
    return count ? count + '❤️s' : '🤍';
  };
  return (
    <div id="App">
      <header>
        <h1> Chat Room {title()} </h1>
      </header>
      <main>
        {/* <ChatEntry
          body={chatMessages[0].body}
          sender={chatMessages[0].sender}
          timeStamp={chatMessages[0].timeStamp}
      />  */}
        <ChatLog
          entries={entries} /*setLikedCallback={() => {}}*/
          setLikedCallback={likeMessage}
        />
      </main>
    </div>
  );
};

export default App;
