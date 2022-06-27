import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messageComponents = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message['id']}
        id={message['id']}
        sender={message['sender']}
        body={message['body']}
        timeStamp={message['timeStamp']}
        liked={message['liked']}
        onUpdateChatData={props.onUpdateChatData}>
      </ChatEntry>
    );
  });

  return (
    <div>{messageComponents}</div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool
  })).isRequired,
  onUpdateChatData: PropTypes.func
};

export default ChatLog;