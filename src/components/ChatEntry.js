import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  let liked = props.liked;
  const [isLiked, toggleLike] = useState(props.liked);

  const updateLikeFunction = () => {
    if (isLiked) {
      liked = false;
      props.updateFunc(-1);
    } else {
      liked = true;
      props.updateFunc(+1);
    }
    toggleLike(liked);
  };

  let likeSymbol = isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={updateLikeFunction} className="like">
          {likeSymbol}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  timeStamp: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ChatEntry;
