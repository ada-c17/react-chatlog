import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import React from 'react';

const ChatLog = ({ entries, updateLikes }) => {
  const ChatEntryComponents = entries.map((entry) => (
    <ChatEntry
      // key={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      updateLikes={updateLikes}/>
  ));
  return <div className="chat-log">{ChatEntryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;