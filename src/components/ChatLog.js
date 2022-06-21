import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((message, index) => {
    return (
      <li key={index}>
        <ChatEntry
          className="chat-entry"
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onHeartClick={props.onUpdateMessages}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntryComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  email: PropTypes.string,
  liked: PropTypes.bool,
  onUpdateMessages: PropTypes.func,
};

export default ChatLog;
