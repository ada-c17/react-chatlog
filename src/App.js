import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'
import ChatLog from './components/ChatLog'

const App = () => {

  // if entry id is liked,
  // change the string of the element by class name 
  const [entries, setEntries] = useState(chatMessages);
  let [count, setCount] = useState(0);
  let [heart, setHeart] = useState('🤍');
  
  // 
  //  '🤍' : '❤️';
  // 
  const toggleLike = (liked) => {
    // props.liked(props.id);
    // adjust this function so that id is used
    // if entry id liked is NOT false, 
    // then set state of liked.id to '❤️'
    if (liked !== false) {
      //set that likeHeart to '❤️'
      setHeart('❤️');
      setCount(count+1);
    } else if (liked !== true) {
      setHeart('🤍');
      setCount(count-1);
    };
  };

  console.log(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatLog 
        entries={entries}
        likeHeart={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
