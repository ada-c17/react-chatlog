import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((message) => {
    return (
      <ChatEntry
      key={message.id}  
      id={message.id}
        sender={message.sender}
        timeStamp={message.timeStamp}
        body={message.body}
        liked={message.liked}
        flipLiked={props.flipLiked}
        likesCount={props.likesCount}
        increaseLikes={props.increaseLikes}

        // local={message.sender ? local : remote}
      />
    );
  });
  return (
    <div>
      <h1>Messages</h1>
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  flipLiked: PropTypes.func.isRequired,
  increaseLikes: PropTypes.func.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default ChatLog;
