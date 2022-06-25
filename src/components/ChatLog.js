import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import React from 'react';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, likesCountCallBack }) => {
  const chatComponents = entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.timeStamp}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        likesCountCallBack={likesCountCallBack}
      />
    );
  });

  return (
    <div>
      <ul> {chatComponents} </ul>
    </div>
  );
};

ChatLog.propTypes = {
  chatLogData: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
      likesCountCallBack: PropTypes.func,
    })
  ),
};

export default ChatLog;
