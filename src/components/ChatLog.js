import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const generateChatEntries = props.entries.map((entry, index) => {
    return (
      <ChatEntry
        key={index}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        onUpdateChatEntry={props.onUpdateChatEntry}
      />
    );
  });

  return <section className="chat-log">{generateChatEntries}</section>;
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.array.isRequired,
  onUpdateChatEntry: PropTypes.func,
};

export default ChatLog;
