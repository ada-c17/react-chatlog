import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp'
import { useState } from 'react';
import chatJson from './data/messages.json';


const App = () => {
  
  return (
    <div id="App">
      <header>
        <h1>Chat between Chidi and Amel 🐈 </h1>
      </header>
      <main>
        <ChatEntry
        sender="Chidi"
        body="open the door or i'm gonna throw rocks at ur window"
        timeStamp={<TimeStamp time='2016-05-18T22:12:03Z'/>}
        ></ChatEntry>
        {/* <ChatLog
        entries={chatJson}
        ></ChatLog> */}
      </main>
    </div>
  );
};

export default App;
