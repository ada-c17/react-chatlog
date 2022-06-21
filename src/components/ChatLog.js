import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const ChatLog = (props) => {
  const chatLogComponents = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timestamp={chat.timeStamp}
        OnChangedLikes={props.OnChangedLikes}
      />
    );
  });
  return <div>{chatLogComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  OnChangedLikes: PropTypes.func.isRequired,
};

export default ChatLog;
