import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  // const message = chatMessages[0];
  console.log(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {chatMessages.map(
          (
            message //Mapping each entry of chatMessages array to a chatEntry react component
          ) => (
            <ChatEntry
              key={message.id} //Look up react keyError
              id={message.id}
              sender={message.sender}
              body={message.body}
              timeStamp={message.timeStamp}
              liked={message.liked}
            />
          )
        )}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
