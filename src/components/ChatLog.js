import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  //console.log(props);
  const chatEntriesData = props.entries.map((chat) => (
    <ChatEntry
      key={chat.id}
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
    ></ChatEntry>
  ));
  return <div>{chatEntriesData}</div>;
};

export default ChatLog;
