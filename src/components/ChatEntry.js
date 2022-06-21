import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLiked = () => {
    props.toggleLikedCallback(props.id);
  };
  const determineSender = (id) => {
    if (id % 2 === 0) {
      return 'local';
    } else {
      return 'remote';
    }
  };
  return (
    <div className={`chat-entry ${determineSender(props.id)}`} key={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={toggleLiked}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLikedCallback: PropTypes.func.isRequired,
};

export default ChatEntry;
