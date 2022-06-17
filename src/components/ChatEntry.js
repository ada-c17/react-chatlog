import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  console.log('This is the value of props', props);
  let side =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  // The value of liked is changing, however the props value isn't.
  // There is an issue with ChatLog, because after pressing the button the data is not updated
  // if you print it in ChatLog
  const onLikeButtonClick = () => {
    // console.log('Event handler registered successfully');
    // console.log(!props.isLiked);
    let updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.isLiked,
    };

    console.log('This is the updated message object', updatedMessage);

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
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
