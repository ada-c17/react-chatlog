import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

// const testData = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// };
// const testData = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2021-05-15T22:49:06+00:00',
//   liked: false,
// };
const testData = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2021-05-15T22:49:06+00:00',
    liked: false,
  },
];

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={testData}></ChatLog>
        {/* <ChatEntry
          sender={testData.sender}
          body={testData.body}
          timeStamp={testData.timeStamp}
          liked={testData.liked}
        ></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
