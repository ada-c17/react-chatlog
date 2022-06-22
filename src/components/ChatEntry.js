import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartColor = props.liked ? '❤️' : '🤍';
  const userType = props.sender === 'Vladimir' ? 'local' : 'remote';
  const textColor =
    props.sender === 'Vladimir' ? props.localColor : props.remoteColor;

  return (
    <div className={`chat-entry ${userType}`}>
      <h2 className="entry-name ">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={textColor}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          onClick={() => props.setLikeCallback(props.id)}
          className="like"
        >
          {heartColor}
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
  setLikeCallback: PropTypes.func,
};

export default ChatEntry;
