import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, addLike, removeLike }) => {
  return (
    <section className="chat-log">
      {entries.map((message) => {
        return (
          <ChatEntry
            key={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            addLike={addLike}
            removeLike={removeLike}
          />
        );
      })}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  addLike: PropTypes.func,
  removeLike: PropTypes.func,
};

export default ChatLog;
