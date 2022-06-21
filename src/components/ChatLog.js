import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onClickLikeButton={props.onClickLikeButton}
      />
    );
  });
  return <section className="chat-log">{entryComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickLikeButton: PropTypes.func,
};

export default ChatLog;
