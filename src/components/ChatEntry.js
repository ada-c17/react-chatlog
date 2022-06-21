import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let lrAlignment = 'chat-entry local';
  if (props.sender === 'Vladimir') {
    lrAlignment = 'chat-entry local';
  } else {
    lrAlignment = 'chat-entry remote';
  }

  const likeMe = () => {
    props.likeCallback(props.id);
  };

  return (
    <div className={lrAlignment}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={likeMe}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likeCallback: PropTypes.func.isRequired,
};

export default ChatEntry;
