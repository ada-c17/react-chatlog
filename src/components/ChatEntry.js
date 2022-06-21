import React, { useState } from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  // set class name for message based on sender
  const entryClassName =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const [likeButton, setLikeButton] = useState('🤍');

  const toggleLikeButton = () => {
    console.log('You clicked the like button.');
  };

  return (
    <div className={entryClassName}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button className="like" onClick={toggleLikeButton}>
          🤍
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
};

export default ChatEntry;
