import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entries, index) => {
    return (
      <section>
        <ChatEntry
          sender={entries.sender}
          body={entries.body}
          timeStamp={entries.timeStamp}
        ></ChatEntry>
      </section>
    );
  });

  return (
    <section>
      <ul class="chat-log">{chatComponents}</ul>
    </section>
  );
};

ChatLog.prototype = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;
