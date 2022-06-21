import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const sender = props.sender;
  const time = props.timeStamp;
  const body = props.body;
  const [heart, changeHeart] = useState('🤍');
  const changeLikeButton = () => {
    if (heart === '🤍') {
      changeHeart('❤️');
    } else {
      changeHeart('🤍');
    }
    props.changeLikeButton(props.id);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={time} /> years ago
        </p>
        <button className="like" onClick={changeLikeButton}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  changeLikeButton: PropTypes.func.isRequired,
};

export default ChatEntry;
