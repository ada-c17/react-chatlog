import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

// const messageIndex = 0;

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat, index) => {
    return (
      <ChatEntry
        key={index}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
      />
    );
  });
  return (
    <div className="chat-entry local">
      {/* use a ul to render chat entries? */}
      <div>{chatComponents}</div>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default ChatLog;
