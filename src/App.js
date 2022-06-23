import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [chatsMessages, setChatState] = useState(chatMessages);
  const changeLike = (id) => {
    const newData = chatsMessages.map((chat) => {
      if (chat.id === id) {
        chat.liked = !chat.liked;
        return chat;
      }
      return chat;
    });
    return setChatState(newData);
  };
  const sumLikes = () => {
    console.log('Inside sumLikes');
    const likedTrue = chatsMessages.filter((chat) => {
      //we only want to add the cat to the array if it's id does not equal the id of the cat we want to remove
      return chat.liked === true;
    });
    return likedTrue.length;
  };

  return (
    <div id="App">
      <header>
        <h1>Chats</h1>
        <h3>{sumLikes()} ❤️'s</h3>
      </header>
      <main>
        <ChatLog
          chatsMessages={chatsMessages}
          onChangeLike={changeLike}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
