import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ chats }) => {
  return chats.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        id={chat.id}
        key={chat.id}
        liked={chat.liked}
        updateChatState={chat.chatState}
      />
    );
  });
};

export default ChatLog;
