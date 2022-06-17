import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onUpdateChat }) => {
  // console.log('This is entries', entries);
  // console.log('This is onUpdateChat', onUpdateChat);

  const messages = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        isLiked={entry.liked}
        onUpdate={onUpdateChat}
        id={entry.id}
      />
    );
  });

  // console.log('This is the value of messages in ChatLog', messages);

  return <div className="chat-log">{messages}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onUpdateChat: PropTypes.func,
};

export default ChatLog;
