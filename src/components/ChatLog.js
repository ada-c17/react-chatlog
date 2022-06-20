import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const makeMessage = (message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        totalLikes={props.totalLikes}
        updateTotalLikes={props.updateTotalLikes}
        updateMessageInfo={props.updateMessageInfo}
      />
    );
  };
  return (
    <div className="chat-log">
      {props.messages && props.messages.map(makeMessage)}
    </div>
  );
};

ChatEntry.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  updateMessageInfo: PropTypes.func,
  totalLikes: PropTypes.number,
  updateTotalLikes: PropTypes.func,
};

export default ChatLog;
