import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorPicker from './components/ColorPicker';
import chatMessages from './data/messages.json';

const App = () => {
  const [data, setData] = useState(chatMessages);
  const [localColor, setLocalColor] = useState('green');
  const [remoteColor, setRemoteColor] = useState('blue');

  let localName = data[0].sender;
  let remoteName;
  for (const record of data) {
    if (record.sender !== localName) {
      remoteName = record.sender;
      break;
    }
  }

  const countLikes = () => {
    let likeCount = 0;
    data.forEach((record) => {
      if (record.liked) {
        likeCount++;
      }
    });
    return likeCount;
  };

  const updateData = (updatedRecord) => {
    const newData = data.map((record) => {
      if (record.id === updatedRecord.id) {
        return updatedRecord;
      } else {
        return record;
      }
    });
    setData(newData);
  };

  const updateColor = (color, name) => {
    if (name === localName) {
      setLocalColor(color);
    } else {
      setRemoteColor(color);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={localColor}>{localName}</span> and{' '}
          <span className={remoteColor}>{remoteName}</span>
        </h1>
        <section>
          <ColorPicker
            name={localName}
            color={localColor}
            updateColor={updateColor}
          />
          <span>{countLikes()} ❤️s</span>
          <ColorPicker
            name={remoteName}
            color={remoteColor}
            updateColor={updateColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={data}
          onUpdate={updateData}
          localName={localName}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
