import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState, useCallback } from 'react';

const App = () => {
  const [chatMessagesState, setChatMessagesState] = useState(chatMessages);
  const handleToggleLike = useCallback(
    (entryId) => {
      // 1. Find entry with id
      const index = chatMessagesState.findIndex((entry) => {
        return entry.id === entryId;
      });

      // 2. Toggle the like
      const newState = [...chatMessagesState];
      newState[index] = { ...newState[index] };
      newState[index].liked = !newState[index].liked;

      // 3. Set the new state
      setChatMessagesState(newState);
    },
    [chatMessagesState]
  );
  const numberOfHearts = chatMessagesState.filter((entry) => {
    return entry.liked;
  }).length;
  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatLog
          entries={chatMessagesState}
          onEntryToggleLike={handleToggleLike}
        />
        <div id="heartWidget">{numberOfHearts} ❤️s</div>
      </main>
    </div>
  );
};

export default App;
