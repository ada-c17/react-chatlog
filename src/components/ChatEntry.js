import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const buttonEmoji = props.liked ? '❤️' : '🤍';
  const changeLiked = () => {
    const updatedMessage = {
      id: props.id,
      body: props.body,
      sender: props.sender,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedMessage);
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={changeLiked}>
          {buttonEmoji}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
