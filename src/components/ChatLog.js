import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const messages = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  });

  return <div className="chat-log">{messages}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
