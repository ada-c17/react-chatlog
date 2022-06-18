import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatLogComponent = props.entries.map((log) => {
    return (
      <div key={log.id}>
        <ChatEntry
          key={log.id}
          id={log.id}
          sender={log.sender}
          body={log.body}
          timeStamp={log.timeStamp}
          liked={log.liked}
          likedCallBack={props.likedCallBack}
        />
      </div>
    );
  });
  return chatLogComponent;
};

export default ChatLog;
