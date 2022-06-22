import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  return entries.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        id={chat.id}
        key={chat.id}
      />
    );
  });
};

export default ChatLog;
