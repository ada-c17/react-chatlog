import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const chatComponents = entries.map((chat) => {
    return (
      <li key={chat.id}>
        <ChatEntry
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
        />
      </li>
    );
  });

  return (
    <section>
      <ul>{chatComponents}</ul>;
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
