import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import messageDataJson from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  const[messageData,setMessageData] = useState(chatMessages);
  const[likedPosts, updateLikedPosts] = React.useState([]);

    return ( 
      <div id="App">
        <header>
          <h1>Application title</h1>
        </header>
        <main>
          {/* Wave 01: Render one ChatEntry component
          Wave 02: Render ChatLog component */}
          {/* <ChatLog chatMessages={[chatMessages]} */}
          <ChatLog messageData={messageData} likedPosts={likedPosts}></ChatLog>
        </main>
      </div>
    );
};

export default App;
