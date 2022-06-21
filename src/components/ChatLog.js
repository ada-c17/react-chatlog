import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messagesComponents = props.entries.map((message) => {
    return (
      <li className="chat-log" key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          likesCallback={props.likesCallback}
          // likesCountCallback={props.likesCountCallback}
        ></ChatEntry>
      </li>
    );
  });
  return <ul>{messagesComponents}</ul>;
};

export default ChatLog;
