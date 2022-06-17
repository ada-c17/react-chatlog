import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatLogComponent = props.entries.map((log) => {
    return (
      <ChatEntry
        key={log.id}
        sender={log.sender}
        body={log.body}
        timeStamp={log.timeStamp}
      />
    );
  });
  return <dive>{chatLogComponent}</dive>;
};

export default ChatLog;
