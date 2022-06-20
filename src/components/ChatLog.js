import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
import { useState } from 'react';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        body={entry.body}
        sender={entry.sender}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
  return <div>{chatEntryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
