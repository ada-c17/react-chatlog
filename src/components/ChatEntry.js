import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeClick }) => {
  let remoteSenderClass = 'chat-entry remote';
  if (sender === 'Estragon') {
    remoteSenderClass = 'chat-entry remote';
  } else {
    remoteSenderClass = 'chat-entry local';
  }

  const heart = liked ? '❤️' : '🤍';
  return (
    <div className={remoteSenderClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button onClick={() => onLikeClick(id)} className="like">
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  messageData: PropTypes.objectOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ChatEntry;
