import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const likeMe = () => {
    props.heartCallback(props.id);
  };

  const localRemote =
    props.sender === props.localSender
      ? 'chat-entry local'
      : 'chat-entry remote';
  const color =
    props.sender === props.localSender ? props.colorLocal : props.colorRemote;

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={likeMe}>
          {props.liked === true ? '❤️' : '🤍'}
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
  liked: PropTypes.bool.isRequired,
  localSender: PropTypes.string.isRequired,
};

export default ChatEntry;
