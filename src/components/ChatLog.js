import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ chats }) => {
  return chats.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    );
  });
};

export default ChatLog;
