import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const ChatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        time={entry.timeStamp}
      />
    );
  });

  return <section>{ChatEntries}</section>;
};

export default ChatLog;
