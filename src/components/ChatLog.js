import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => {
        return (
          <ChatEntry
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            key={entry.id}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
