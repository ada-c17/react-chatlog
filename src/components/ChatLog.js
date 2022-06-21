import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((message, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onHeartClick={props.onUpdateMessages}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntryComponents}</ul>
    </section>
  );
};

export default ChatLog;
