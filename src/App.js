import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog'
import chatMessages from './data/messages.json';
import {useState} from 'react';
// import ChatEntry from './components/ChatEntry'


console.log(chatMessages);

function App () {

  const [chatData, setChatData] = useState(chatMessages)
  const updateChatData = updatedChat => {
    console.log({updatedChat})
    const chats = chatData.map(chat => {
      if(chat.id === updatedChat.id){
        
        return updatedChat;
      } else{
        return chat;
      }
      });
    setChatData(chats);
  };
 
  const calcTotalHearts = ()=>{
    let total = 0;
    for (let x of chatData){
      if(x.liked === true){
        total += 1;
 } };
 return total
  }
  
 return(
    <div id = "App">
      <header>
        <h1>Chat Log Between Vladimir and Estragon</h1>
        <h3> Likes 💜</h3>
        <h3> {calcTotalHearts()} </h3>
      </header>
      <main>
        <ChatLog 
          chats={chatData}
          onUpdateChat={updateChatData}
        />
      </main>
    </div>
    );
 }


export default App;
