import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <div>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        ></ChatEntry>
      </div>
    );
  });
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {};

export default ChatLog;
