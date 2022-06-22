import React from 'react';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import './App.css';
import chatMessages from './data/messages.json';

const App = () => {
  const [numLikes, setNumLikes] = useState(0);

  const updateNumLikes = (increaseLikes) => {
    if (increaseLikes) {
      setNumLikes(numLikes + 1);
    } else {
      setNumLikes(numLikes - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <span className="widget">{numLikes} ❤️s</span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} onUpdateChatEntry={updateNumLikes} />
      </main>
    </div>
  );
};

export default App;
