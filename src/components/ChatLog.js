import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      ></ChatEntry>
    );
  });

  return <div className="chat-log">{chatComponents}</div>;
};

ChatLog.propTypes = {
  chatComponents: PropTypes.array,
};

export default ChatLog;
