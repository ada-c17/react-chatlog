import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

export const ChatLog = (props) => {
  const messageList = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        timeStamp={message.timeStamp}
        body={message.body}
        liked={message.liked}
        updateFunc={props.updateFunc}
      />
    );
  });

  return (
    <section>
      <ul className="chat-log">{messageList}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateFunc: PropTypes.func.isRequired,
};

export default ChatLog;
