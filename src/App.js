import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
//import TimeStamp from './components/TimeStamp';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>2 💙s</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}/>
        {/* <ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}/> */}
        {/* <ChatEntry sender={chatMessages[1].sender} body={chatMessages[1].body} timeStamp={chatMessages[1].timeStamp}/> */}
        {/* <ChatEntry sender={chatMessages[2].sender} body={chatMessages[2].body} timeStamp={chatMessages[2].timeStamp}/> */}
      </main>
    </div>
  );
};

export default App;
