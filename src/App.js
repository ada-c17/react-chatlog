import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [data, setData] = useState(chatMessages);

  const countLikes = () => {
    let likeCount = 0;
    data.forEach((record) => {
      if (record.liked) {
        likeCount++;
      }
    });
    return likeCount;
  };

  const updateData = (updatedRecord) => {
    const newData = [];
    data.forEach((record) => {
      if (record.id === updatedRecord.id) {
        newData.push(updatedRecord);
      } else {
        newData.push(record);
      }
    });
    setData(newData);
  };

  return (
    <div id="App">
      <header>
        <h1>An Awkward Conversation</h1>
        <section>{countLikes()} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={data} onUpdate={updateData} />
      </main>
    </div>
  );
};

export default App;
