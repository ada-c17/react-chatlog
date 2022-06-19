import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const time = DateTime.fromISO(props.timeStamp);
  const relative = time.toRelative();
  const [likeButton, setLikeButton] = useState('🤍');
  const clickLikeButton = () => {
    const newMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    const numberOfLikes = likeButton === '🤍';
    setLikeButton(newMessage.liked ? '❤️' : '🤍');
    props.updateMessageInfo(newMessage);
    props.updateTotalLikes(numberOfLikes);
  };

  return (
    <div>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relative}</p>
        <button className="like" onClick={clickLikeButton}>
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
  liked: PropTypes.bool,
  timeStamp: PropTypes.string.isRequired,
  totalLikes: PropTypes.number,
  updateMessageInfo: PropTypes.func,
  updateTotalLikes: PropTypes.func,
};

export default ChatEntry;
