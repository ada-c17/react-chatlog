import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messageComponents = props.messages.map((message, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{messageComponents}</ul>
    </section>
  );
};

export default ChatLog;
