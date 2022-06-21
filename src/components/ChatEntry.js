import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  // set class name for message based on sender
  const entryClassName =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  // execute toggleLikeButton function on button click
  const updateLike = () => {
    props.onUpdateMessage(props.id);
  };

  // update heart display based on message 'liked' state
  const likeDisplay = props.liked ? '❤️' : '🤍';

  return (
    <div className={entryClassName}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button className="like" onClick={updateLike}>
          {likeDisplay}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // timeStamp proptype will need to be updated to require date, not just string
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
};

export default ChatEntry;
