import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
import { useState } from 'react';

const ChatEntry = (props) => {
  let bubbleSender = 'chat-entry';
  if (props.sender === props.senderOne) {
    bubbleSender += ' local';
  } else {
    bubbleSender += ' remote';
  }

  const [likeStatus, setLikeStatus] = useState('🤍');

  const updateLikes = () => {
    if (likeStatus === '🤍') {
      setLikeStatus('❤️');
      props.addLikesCallback();
    } else {
      setLikeStatus('🤍');
      props.removeLikesCallback();
    }
  };

  return (
    <div className={bubbleSender}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={updateLikes}>
          {likeStatus}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  addLikesCallback: PropTypes.func.isRequired,
  removeLikesCallback: PropTypes.func.isRequired,
};

export default ChatEntry;
