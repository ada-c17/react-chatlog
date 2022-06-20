import { React, useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatJSON from './data/messages.json';
import ColorPicker from './components/ColorPicker';
import ChatDescription from './components/ChatDescription';

const App = () => {
  // State setup
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
  // Event handlers passed down to components
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
        <ChatDescription
          colorClasses={colorClasses}
          localName={chatJSON.localName}
          remoteNames={chatJSON.remoteNames.join(', ')}
        />
        <div className="menubar">
          <ColorPicker
            colorClasses={colorClasses}
            source="local"
            updateColors={updateColors}
          />
          <h2 id="likeCount">{numLikes} ❤️s</h2>
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
