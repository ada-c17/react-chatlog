import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedMessage);
  };

  const printHeart = props.liked ? '❤️' : '🤍';
  const classLocalRemote = props.sender === 'Vladimir' ? 'local' : 'remote';
  const color =
    props.sender === 'Vladimir' ? props.colorLocal : props.colorRemote;

  return (
    <div className={`chat-entry ${classLocalRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={onLikeButtonClick} className="like">
          {printHeart}
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
  onUpdate: PropTypes.func.isRequired,
  liked: PropTypes.bool,
  colorLocal: PropTypes.string.isRequired,
  colorRemote: PropTypes.string.isRequired,
};

export default ChatEntry;
