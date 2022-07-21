import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        likedCallback={props.likedCallback}
        // contacts={props.contacts}
      />
    );
  });
  return <div>{chatComponents}</div>;
};

export default ChatLog;
