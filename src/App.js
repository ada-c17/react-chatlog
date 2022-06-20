import { React, useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [numLikes, setNumLikes] = useState(
    chatMessages.reduce((prev, msg) => {
      return msg.liked ? prev++ : prev;
    }, 0)
  );
  const [colorClasses, setColorClasses] = useState({
    local: '🔴',
    remote: '🔴',
  });
  const updateMessage = (updatedChat) => {
    const chats = chatData.map((chatEntry) => {
      return chatEntry.id === updatedChat.id ? updatedChat : chatEntry;
    });
    setChatData(chats);
    updatedChat.liked ? setNumLikes(numLikes + 1) : setNumLikes(numLikes - 1);
  };
  const updateColors = (newColor, targetSource) => {
    colorClasses[targetSource] = newColor;
    setColorClasses({
      local: colorClasses.local,
      remote: colorClasses.remote,
    });
  };
  return (
    <div id="App">
      <header>
        <h1>
          Conversation between{' '}
          <span className={colorClasses.local}>Vladimir</span> and{' '}
          <span className={colorClasses.remote}>Estragon</span>
        </h1>
        <ColorPicker colorClasses={colorClasses} updateColors={updateColors} />
        <h2>{numLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} updateMessage={updateMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
