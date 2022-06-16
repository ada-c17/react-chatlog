import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatMessages = props.entries;
  const ChatComponents = chatMessages.map((chat) => (
    <ChatEntry
      key={chat.id}
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
      localUser={props.localUser}
    />
  ));
  return <div>{ChatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  localUser: PropTypes.string.isRequired,
};
export default ChatLog;
