import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeClick }) => {
  let SenderClassName = 'chat-entry remote';

  let SenderTextColor = 'blue';

  if (sender === 'Estragon') {
    SenderClassName = 'chat-entry remote';
    SenderTextColor = 'green';
  } else {
    SenderClassName = 'chat-entry local';
    SenderTextColor = 'blue';
  }

  const heart = liked ? '❤️' : '🤍';
  return (
    <div className={SenderClassName}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={SenderTextColor}>{body}</p>
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
      liked: PropTypes.bool.isRequired,
      onLikeClick: PropTypes.func.isRequired,
    }).isRequired
  ),
};

export default ChatEntry;
