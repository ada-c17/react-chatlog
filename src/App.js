import React, {useState} from 'react';
import './App.css';
import chatData from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  const [entries, setEntries] = useState(chatData);

  const onUpdate=(id) =>{
    const newEntry = entries.filter((entry) => {
      return entry.id === id;
    });
    newEntry.liked= ! newEntry.liked;
    
    setEntries(newEntry);
  }
  // const countHeart = (chatData) => {
  //   let count=0;
  //   for (const chat in chatData){
  //     if(chat.liked === true) {
  //       count++;
  //   }
  //   return count;
  //   }
  // }
  const countHeart=()=>{
    const liked = entries.filter((entry) => {
      return entry.liked === true;
    });
    return liked.length;
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{countHeart} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} onUpdate={onUpdate}> </ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
