import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;
  const entryArr = entries.map((entry, i) => {
    return (
      <div className="chat-log" key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </div>
    );
  });

  // const resultArray = [];
  // for (entry in entries) {
  //   let entryJsx = <ChatEntry sender={entry.sender} />
  //   resultArray.push(entryJsx)
  // }

  return entryArr;
};

export default ChatLog;
