import React from 'react';
import ChatEntry from './ChatEntry.js';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        addLikesCallback={props.addLikesCallback}
        removeLikesCallback={props.removeLikesCallback}
        senderOne={props.senderOne}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  addLikesCallback: PropTypes.func.isRequired,
  removeLikesCallback: PropTypes.func.isRequired,
  senderOne: PropTypes.string.isRequired,
};
export default ChatLog;
