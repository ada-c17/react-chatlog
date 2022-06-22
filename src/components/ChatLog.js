import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.entries;
  const getChatLogJSX = (messages) => {
    return messages.map((message) => {
      return (
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdate={props.onUpdateMessage}
        />
      );
    });
  };
  return <div className="chat-log">{getChatLogJSX(messages)}</div>;
};

export default ChatLog;
