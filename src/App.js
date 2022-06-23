import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = React.useState([]);
  //
  React.useEffect(() => {
    // populate message state with stored messages
    setMessages(chatMessages);
  }, []);

  const heartToggling = (updatedMessage) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setMessages(updatedMessages);
  };

  let heartCount = 0;
  for (const eachMessage of messages) {
    if (eachMessage.liked) {
      heartCount += 1;
    }
  }

  //optional:decide local and remote~~~~~~~~~~~~~~~~~~~~~~~~~
  const local = chatMessages[0].sender;
  let remote;
  for (const eachMessage of chatMessages) {
    if (eachMessage.sender !== local) {
      remote = eachMessage.sender;
    }
  }
  // console.log('App', local);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <div id="App">
      <header>
        <h1>
          {/* Chat between {chatMessages[0]['sender']} and{' '}
          {chatMessages[1]['sender']} */}
          Chat between {local} and {remote}
        </h1>
        <h2>{heartCount} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        // Wave 02: Render ChatLog component */}
        <ChatLog
          entries={messages}
          heartToggling={heartToggling}
          local={local}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;

//create count state in the app comp, pass down the updated message to the chatEntry comp,
//every time a heart is clicked, increase the count by 1
