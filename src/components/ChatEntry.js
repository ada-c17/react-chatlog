import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedChatMessages = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      isLiked: !props.isLiked
    };
    props.onUpdate(updatedChatMessages);
  };

  const heartColor = props.isLiked ? '❤️': '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={onLikeButtonClick}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
