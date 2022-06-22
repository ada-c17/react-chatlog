import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, setLikesCallback }) => {
  const chatData = entries.map((entry) => (
    <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      setLikesCallback={setLikesCallback}
    />
  ));

  return <div className="chat-log">{chatData}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  setLikesCallback: PropTypes.func.isRequired,
};

export default ChatLog;
