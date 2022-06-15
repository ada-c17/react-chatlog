import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chats = props.entries.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    );
  });
  return <div>{chats}</div>;
};

ChatLog.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
