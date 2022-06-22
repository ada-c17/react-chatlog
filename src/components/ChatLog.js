import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;
  const entryArr = entries.map((entry, i) => {
    return (
      <div className="chat-log" key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          heartCallback={props.heartCallback}
        />
      </div>
    );
  });

  return entryArr;
};

export default ChatLog;
