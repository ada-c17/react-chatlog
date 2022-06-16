import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return props.entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        body={entry.body}
        sender={entry.sender}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      ></ChatEntry>
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
