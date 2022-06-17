import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const getChatLogJSX = (entries) => {
    return entries.map((entry) => {
      return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
        />
      );
    });
  };

  return getChatLogJSX(entries);
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string,
        body: PropTypes.string,
        timeStamp: PropTypes.string,
        liked: PropTypes.bool,
      })
  ).isRequired
}

export default ChatLog;
