import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (entries) => {
  const chatMessages = entries.chatMessages;
  const ChatComponents = chatMessages.map((chat) => (
    <ChatEntry
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
    />
  ));
  return <div>{ChatComponents}</div>;
};

export default ChatLog;
