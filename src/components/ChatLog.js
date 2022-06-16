import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries = props.entries;
  console.log(entries);

  const entryLog = entries.map((entry) => {
    return (
      <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      ></ChatEntry>
    );
  });

  return <div className="chat-log">{entryLog}</div>;
};

// ChatLog.propTypes = {};

export default ChatLog;
