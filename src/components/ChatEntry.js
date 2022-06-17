import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [likeCount, setLikeCount] = useState(props.liked);
  const [hasLikes, setHasLikes] = useState('❤️');
  const toggleLikes = () => {
    setHasLikes(hasLikes);
  };
  const increaseLikes = () => {
    console.log('Hello,likes!');
    setLikeCount(likeCount + 1);
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp>{props.time}</TimeStamp>
        </p>
        <p>The number of likes is {likeCount}.</p>
        <button className="like" onClick={toggleLikes}>
          🤍
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
