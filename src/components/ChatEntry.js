import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({
  sender,
  body,
  timeStamp,
  id,
  liked,
  localName,
  localColor,
  remoteColor,
  onUpdate,
}) => {
  const toggleLiked = () => {
    const updatedEntry = {
      sender,
      body,
      timeStamp,
      id,
      liked: !liked,
    };
    onUpdate(updatedEntry);
  };

  const senderClass = sender === localName ? 'local' : 'remote';
  const colorClass = sender === localName ? localColor : remoteColor;

  return (
    <div className={`chat-entry ${senderClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={colorClass}>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={toggleLiked}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number,
  liked: PropTypes.bool,
  localName: PropTypes.string,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
