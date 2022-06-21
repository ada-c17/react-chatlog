import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.messages.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        toggleLikedCallback={props.toggleLikedCallback}
      />
    );
  });
  return <div className="chat-log">{messages}</div>;
};

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatLog;
