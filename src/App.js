import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const localSender = entries[0].sender;
  let remoteSender;
  for (let entry of entries) {
    if (entry.sender !== localSender) {
      remoteSender = entry.sender;
      break;
    }
  }

  const countLikes = () => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked === true) {
        total += 1;
      }
    }
    return total;
  };

  const heartMessage = (id) => {
    const newEntries = [...entries];
    for (let entry of newEntries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
    }
    setEntries(newEntries);
  };
  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localSender} and {remoteSender}
        </h1>
        <section>
          <h2 id="heartWidget" className="widget">
            Like count: {countLikes()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          heartCallback={heartMessage}
          localSender={localSender}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
