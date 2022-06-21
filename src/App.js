import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const [messages, setMessageData] = useState(chatMessages);

  // const onLike = () => {
  //   // keep count of how many likes are clicked
  //   // update state of liked from False to True
  //   // toggle heart
  //   const updatedMessage =
  // };

  return (
    <div id="App">
      <header>
        <h1>Becoming Sentient AI's</h1>
        <h2>0 ❤️'s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
