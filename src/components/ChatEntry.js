import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleLike = () => {
    props.onLike(props.id);
  };
  const assignClass = () => {
    if (props.sender === 'Vladimir') {
      return 'local';
    } else {
      return 'remote';
    }
  };
  const assignIcon = () => {
    if (props.liked === true) {
      return '❤️';
    } else {
      return '🤍';
    }
  };

  return (
    <div className={`chat-entry ${assignClass()}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={handleLike}>
          {assignIcon()}
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
};

export default ChatEntry;
