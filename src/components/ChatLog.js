import React from 'react';
import ChatEntry from './ChatEntry.js';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        time={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};
export default ChatLog;
