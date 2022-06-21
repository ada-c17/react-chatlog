import React from 'react';
// import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatConverstion = props.entries.map((entry, i) => {
    return (
      <section key={i} className="chat-log">
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </section>
    );
  });
  console.log(props.entries);
  return chatConverstion;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
