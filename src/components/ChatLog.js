import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.entries.map((message) => {
    return (
      <ChatEntry id={message.id} sender={message.sender} body={message.body} timeStamp={message.timeStamp}></ChatEntry>
    )
  })
  return (
    <div className='chat-log'>
      {messages}
    </div>
  )
}

export default ChatLog;