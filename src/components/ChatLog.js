import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = ({ entries, changeLikeButton }) => {
  const messageComponents = [];
  for (const message of entries) {
    // console.log(message);

    messageComponents.push(
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        timeStamp={message.timeStamp}
        body={message.body}
        changeLikeButton={changeLikeButton}
        liked={message.liked}
      ></ChatEntry>
    );
  }

  return <div>{messageComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  changeLikeButton: PropTypes.func.isRequired,
};

export default ChatLog;
