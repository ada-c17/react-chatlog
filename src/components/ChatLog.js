import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries = props.entries;

  const entryLog = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id ? entry.id : `${entry.sender}_${entry.timeStamp}`}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        likedCallback={props.likedCallback}
        local={entry.sender === props.local}
      ></ChatEntry>
    );
  });

  return <div className="chat-log">{entryLog}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
  likedCallback: PropTypes.func.isRequired,
  local: PropTypes.string.isRequired,
};

export default ChatLog;
