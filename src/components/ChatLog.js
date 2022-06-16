import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const chatEntries = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  });

  return <div>{chatEntries}</div>;
};

// proptypes
ChatLog.prototype = {
  chatMessage: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
