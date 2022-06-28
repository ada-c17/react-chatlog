import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chitChats = props.entries.map((message, index) => {
    return (
      <ChatEntry
        key={index}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        toggleHeartCallback={props.toggleHeartCallback}
      ></ChatEntry>
    );
  });
  return <div className="chat-log">{chitChats}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  toggleHeartCallback: PropTypes.func,
};
export default ChatLog;
