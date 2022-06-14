import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp, id, liked, onUpdate }) => {
  const updateLiked = () => {
    const updatedEntry = {
      sender,
      body,
      timeStamp,
      id,
      liked: !liked,
    };
    onUpdate(updatedEntry);
  };

  const senderClass = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${senderClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={updateLiked}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
