import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onUpdate }) => {
  const messages = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        isLiked={entry.liked}
        onUpdate={onUpdate}
        id={entry.id}
      />
    );
  });

  return <div className="chat-log">{messages}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdate: PropTypes.func,
};

export default ChatLog;
