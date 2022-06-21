import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        toggleLike={props.toggleLike}
      />
    );
  });

  return <ul>{chatEntries}</ul>;
};

// proptypes
ChatLog.prototype = {
  chatData: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
