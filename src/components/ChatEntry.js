import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let side =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const onLikeButtonClick = () => {
    let updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.isLiked,
    };

    props.onUpdate(updatedMessage);
  };

  let likeButton = props.isLiked ? '❤️' : '🤍';

  return (
    <div className={side}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={onLikeButtonClick} className="like">
          {likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
