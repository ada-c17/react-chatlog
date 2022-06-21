import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLikeButton = () => {
    // recreate message object, but toggle the boolean value for liked
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      liked: !props.isLiked,
      timeStamp: props.timeStamp,
    };
    props.onUpdate(updatedMessage);
  };

  // props.onUpdate triggers components to be rerendered, so that when
  // heart is set here, the isLiked value has switched?
  const heart = props.isLiked ? '❤️' : '🤍';

  // set all classNames for each displayed message
  // text color will change for user name and their chat messages
  // added 'chat-entry' class here but for some reason the format of
  // my chat bubbles have changed, but they shouldn't have...
  const userAndColor =
    props.sender === props.local
      ? `chat-entry local ${props.localColor}`
      : `chat-entry remote ${props.remoteColor}`;

  // every chat bubble + sender name
  return (
    <div className={userAndColor}>
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
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
