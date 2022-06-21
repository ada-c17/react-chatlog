import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((messge) => {
    return (
      <ChatEntry
        id={messge.id}
        body={messge.body}
        sender={messge.sender}
        timeStamp={messge.timeStamp}
        liked={messge.liked}
        updateMessage={props.updateMessage}
      ></ChatEntry>
    );
  });
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
