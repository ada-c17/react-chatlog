import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, heartsCount, onLikeClick }) => {
  const ChatLogComponent = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLikeClick={onLikeClick}
      />
    );
  });
  return <div className="component">{ChatLogComponent}</div>;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      onLikeClick: PropTypes.func.isRequired,
    }).isRequired
  ),
};

export default ChatLog;
