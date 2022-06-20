import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const senderClass =
    props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  const heart = props.liked ? '❤️' : '🤍';

  // const handleLike = () => {
  //   props.onUpdateLike(props.id);
  // };

  return (
    <div className={senderClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button
          className="like"
          onClick={() => {
            props.onUpdateLike(props.id);
            props.onHeartClicks(props.liked);
          }}
        >
          {heart}
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
  liked: PropTypes.bool,
};

export default ChatEntry;
