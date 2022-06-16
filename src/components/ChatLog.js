import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((message) => {
    return (
      <ChatEntry
        sender={message.sender}
        timeStamp={message.timeStamp}
        body={message.body}
      />
    );
  });
  return (
    <div>
      <h1>Messages</h1>
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
