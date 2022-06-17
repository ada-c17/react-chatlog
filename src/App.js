import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry 
          id={chatMessages[0].id}
          body={chatMessages[0].body}
          sender={chatMessages[0].sender}
          timeStamp={chatMessages[0].timeStamp}
          liked={chatMessages[0].liked}
        >
        </ChatEntry> */}


        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}/>

      </main>
    </div>
  );
}

export default App;
