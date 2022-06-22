import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const changeLikeButtonState = () => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
      color: props.color,
    };
    props.onUpdate(updatedChatEntry);
  };
  const buttonText = props.liked ? '❤️' : '🤍';
  const defineClass =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={defineClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={props.color}> {props.body}</p>
        <TimeStamp className="entry-time" time={props.timeStamp}></TimeStamp>
        <button onClick={changeLikeButtonState} className="like">
          {buttonText}
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
  liked: PropTypes.bool,
  color: PropTypes.string,
};
export default ChatEntry;
