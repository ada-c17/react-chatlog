import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLikeButton = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      liked: !props.isLiked,
      timeStamp: props.timeStamp,
    };
    props.onUpdate(updatedMessage);
  };

  const heart = props.isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={toggleLikeButton} className="like">
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isLiked: PropTypes.bool,
};

export default ChatEntry;
