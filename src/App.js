import React, {useState} from 'react';
import './App.css';
import chatData from './data/messages.json';
import ChatLog from './components/ChatLog';

function App() {
  const [entries, setEntries] = useState(chatData);

  const onUpdate=(id) =>{
    const newEntry = entries.map((entry) => {
      if (entry.id===id){
        entry.liked= ! entry.liked;
      }
      return entry;
    });
    setEntries(newEntry);
    
  }

  const countHeart=()=>{
    const likedEntry = entries.filter((entry) => {
      return entry.liked === true;
    });
    return likedEntry.length;
  }

  return (
    <div id="App">
      <header>
        <h1>A ChatLog Demo by Poppy</h1>
        <h2>{countHeart()}❤️s</h2>
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
