import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const chatComponents = entries.map((message) => {
    return (
      <li>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </li>
    );
  });
  return <ul>{chatComponents}</ul>;
};

ChatLog.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ChatLog;
