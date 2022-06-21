import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [likeButton, setLikeButton] = useState('🤍');

  const onLikedButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    props.updateMessageData(updatedMessage);
    props.updateLikeButton(updatedMessage.liked);
    const bool = props.likeButton === '🤍';
    props.updateTotalLikes(bool);
  };

  const localRemote =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={onLikedButtonClick} className="like">
          {props.likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  timeStamp: PropTypes.string.isRequired,
  totalLikes: PropTypes.number,
  updateMessageData: PropTypes.func,
  updateTotalLikes: PropTypes.func,
};

export default ChatEntry;
