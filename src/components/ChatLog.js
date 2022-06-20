import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, local, colorClasses, updateMessage }) => {
  return entries.map((entry) => {
    const source = entry.sender === local ? 'local' : 'remote';
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        source={source}
        color={colorClasses[source]}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateMessage={updateMessage}
        key={entry.id}
      ></ChatEntry>
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  local: PropTypes.string.isRequired,
  colorClasses: PropTypes.shape({
    local: PropTypes.string,
    remote: PropTypes.string,
  }).isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
