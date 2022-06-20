import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likes, setLikes] = useState(0);

  const updateLikes = (clicked, setClicked) => {
    setClicked(!clicked);
    !clicked ?setLikes((p) => p + 1):setLikes((p) => p - 1);
  }
  
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section><p>{likes} ❤️s</p></section>
      </header>
      <main>
      
        {/* Wave 01: Render one ChatEntry component
        <ChatEntry
          body={chatMessages[0].body}
          sender={chatMessages[0].sender}
          timeStamp={chatMessages[0].timeStamp}
      /> 
        Wave 02: Render ChatLog component */}
          <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
