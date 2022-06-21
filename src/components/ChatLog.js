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
        id={chat.id}
        key={chat.id}
        liked={chat.liked}
        likeCallback={props.likeCallback}
      />
    );
  });
  return <div>{chats}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  likeCallback: PropTypes.func.isRequired,
};

export default ChatLog;
