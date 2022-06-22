import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, SetLike] = useState(chatMessages);

  const [heartCount, setCount] = useState(0);

  const setLikeForId = (id) => {
    let count = 0;
    const newMessagesData = messages.map((msg) => {
      const newMessage = { ...msg };
      if (newMessage.id === id) {
        newMessage.liked = newMessage.liked ? false : true;
      }
      if (newMessage.liked === true) {
        count++;
      }
      return newMessage;
    });
    SetLike(newMessagesData);
    setCount(count);
  };

  // const setLikeForId = (id) => {
  //   const msgs = [...messages];
  //   let count = 0;
  //   for (let msg in msgs) {
  //     if (msgs[msg].id === id) {
  //       if (msgs[msg].liked === true) {
  //         msgs[msg].liked = false;
  //       } else {
  //         msgs[msg].liked = true;
  //       }
  //     }

  //     if (msgs[msg].liked === true) {
  //       count++;
  //     }
  //   }
  //   console.log(msgs);
  //   SetLike(msgs);
  //   setCount(count);
  // };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{heartCount} ❤️s </section>
      </header>
      <main>
        <ChatLog
          entries={messages}
          // heartsCount={heartCount}
          onLikeClick={setLikeForId}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
