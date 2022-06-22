import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        body={message.body}
        sender={message.sender}
        timeStamp={message.timeStamp}
        liked={message.liked}
        updateMessage={props.updateMessage}
      ></ChatEntry>
    );
  });
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
