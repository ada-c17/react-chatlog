import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdateMessage }) => {
  const getChatLogJSX = (entries) => {
    return entries.map((entry, index) => {
      return (
        <div key={index}>
          <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onUpdate={onUpdateMessage}
          />
        </div>
      );
    });
  };

  return getChatLogJSX(entries);
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
  ).isRequired,
  onUpdateMessage: PropTypes.func,
};

export default ChatLog;
