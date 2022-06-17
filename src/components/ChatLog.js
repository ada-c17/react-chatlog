import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    return (
      <div className="chat-log">
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          evenOdd={(entry.id-1) % 2}
        />
      </div>
    );
  });
  return entryComponents;
};

export default ChatLog;
