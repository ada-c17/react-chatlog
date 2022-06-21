import React from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);
  let [heartsCount, setHeartsCount] = useState(0);

  const flipHearts = (id) => {
    console.log('function called')
    const newEntries = [];
    for (const en of entries){
      let entry = JSON.parse(JSON.stringify(en)); // deep copy?

      if (entry.id === id){
        entry.liked = !entry.liked;
        if (entry.liked){
          heartsCount++;
        } else {
          heartsCount--;
        }
      }
      newEntries.push(entry);
    }
    setEntries(newEntries)
    setHeartsCount(heartsCount)
    console.log(heartsCount)
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{heartsCount}{(heartsCount>1 || heartsCount===0) ? ' ❤️s': ' ❤️'}</section>
      </header>
      <main>
        <ChatLog 
          entries={messages}
          heartsCallback={flipHearts}>
        </ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
