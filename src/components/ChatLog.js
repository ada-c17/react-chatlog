import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLike }) => {
  const chatComponents = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={onLike}
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
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;
