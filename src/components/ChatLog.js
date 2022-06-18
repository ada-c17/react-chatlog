import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onUpdateMessage, local }) => {
  const chatEntriesData = entries.map((chat) => (
    <ChatEntry
      key={chat.id}
      id={chat.id}
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
      isLiked={chat.liked}
      onUpdate={onUpdateMessage}
      local={local}
    ></ChatEntry>
  ));

  return <div>{chatEntriesData}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateMessage: PropTypes.func.isRequired,
  local: PropTypes.string.isRequired,
};

export default ChatLog;
