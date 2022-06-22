import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartStatus = props.liked ? '❤️' : '🤍';
  let entrySide =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  let color =
    props.sender === 'Vladimir' ? props.localTextColor : props.remoteTextColor;

  const handleLike = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      liked: !props.liked,
      timeStamp: props.timeStamp,
    };
    props.onUpdate(updatedEntry);
  };

  return (
    <div className={entrySide}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={handleLike}>
          {heartStatus}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.string,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
