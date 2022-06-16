import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const entries = props.entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });

  return <section className="chat-log">{entries}</section>;
};

export default ChatLog;
