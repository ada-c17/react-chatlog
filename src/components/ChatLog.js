import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ chatData }) => {
  const entries = chatData.map((entry) => (
    <ChatEntry
      key={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
    />
  ));

  return <div className="chat-log">{entries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
