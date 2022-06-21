import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;
  const entryComponents = [];
  for (const entry of entries) {
    entryComponents.push(
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLikedStatus={props.updateLikedStatus}
      ></ChatEntry>
    );
  }

  return <div>{entryComponents}</div>;
};

export default ChatLog;

ChatLog.propTypes = {
  chatData: PropTypes.array.isRequired,
  updateLikedStatus: PropTypes.func.isRequired,
};
