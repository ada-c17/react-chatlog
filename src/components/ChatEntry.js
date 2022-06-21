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
  const colorBody =
    props.sender === 'Vladimir' ? props.colorLocal : props.colorRemote;

  return (
    <div className={`chat-entry ${classLocalRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={colorBody}>{props.body}</p>
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
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  liked: PropTypes.bool,
  colorLocal: PropTypes.string,
  colorRemote: PropTypes.string,
};

export default ChatEntry;
