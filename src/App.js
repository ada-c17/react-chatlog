import { React, useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatJSON from './data/messages.json';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const [chatData, setChatData] = useState(chatJSON.messages);
  const [numLikes, setNumLikes] = useState(
    chatJSON.messages.reduce((prev, msg) => {
      return msg.liked ? prev++ : prev;
    }, 0)
  );
  const [colorClasses, setColorClasses] = useState({
    local: '🟠',
    remote: '🟣',
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
          <span className={colorClasses.local}>{chatJSON.localName}</span> and{' '}
          <span className={colorClasses.remote}>{chatJSON.remoteNames[0]}</span>
        </h1>
        <div className="menubar">
          <ColorPicker
            colorClasses={colorClasses}
            source="local"
            updateColors={updateColors}
          />
          <h2>{numLikes} ❤️s</h2>
          <ColorPicker
            colorClasses={colorClasses}
            source="remote"
            updateColors={updateColors}
          />
        </div>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          local={chatJSON.localName}
          colorClasses={colorClasses}
          updateMessage={updateMessage}
        />
      </main>
    </div>
  );
};

export default App;
