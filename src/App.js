import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  // Like Button
  const [messages, setMessages] = useState(chatMessages);
  const [hearts, setHearts] = useState('0 ❤️s');
  const handleMessage = (Updatedmessage) => {
    // Updated messages
    const updatedMessages = messages.map((message) => {
      if (message.id === Updatedmessage.id) {
        return Updatedmessage;
      }
      return message;
    });
    setMessages(updatedMessages);

    //Update hearts
    const likedCount = updatedMessages.filter(
      (message) => message.liked
    ).length;
    setHearts(`${likedCount} ❤️s`);
  };

  // Color Picker
  const [textColor, setTextColor] = useState({ localUser: '', remoteUser: '' });
  const handleTextColor = (updatedUserColor) => {
    //updatedUserColor format -> {user:{userClassifer:'localUser'}, color:'red'}
    const { user, color } = updatedUserColor;
    const updatedTextColor = { ...textColor };
    updatedTextColor[user.userClassifer] = color;
    setTextColor(updatedTextColor);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>

        <section>
          <ColorChoice
            userClassifer="localUser"
            handleTextColor={handleTextColor}
            textColor={textColor}
          />
          <h1> {hearts}</h1>
          <ColorChoice
            userClassifer="remoteUser"
            handleTextColor={handleTextColor}
            textColor={textColor}
          />
        </section>
      </header>

      <main>
        <ChatLog
          entries={messages}
          handleMessage={handleMessage}
          textColor={textColor}
        />
      </main>
    </div>
  );
};

export default App;
