import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const message = {
  //   id: 27,
  //   sender: 'Vladimir',
  //   body: 'then you are lying',
  //   timeStamp: '2018-05-29T23:17:34+00:00',
  //   liked: false,
  // };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
