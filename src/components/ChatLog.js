import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messagesList = props.entries.map((message) => {
    return (
      <li className="chat-log" key={message.id}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        ></ChatEntry>
      </li>
    );
  });
  return <ul>{messagesList}</ul>;
};

export default ChatLog;
