import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
// import chatMessages from './data/messages.json';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [likeCount, setLikeCount] = useState(0);
  const [likeStatus, setLikeStatus] = useState(props.liked);
  const changeLikes = () => {
    if (likeStatus) {
      setLikeCount(likeCount - 1);
      setLikeStatus(false);
    } else {
      setLikeCount(likeCount + 1);
      setLikeStatus(true);
    }
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={changeLikes}>
          {likeStatus ? '❤️' : '🤍'} {likeCount}
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
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
