import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chats = props.entries.map((chat) => {
    return <ChatEntry info={chat} />;
  });
  return (
    <div>
      <h1>Drivers</h1>
      {chats}
    </div>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
};

export default ChatLog;
