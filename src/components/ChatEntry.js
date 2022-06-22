import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleToggleLike = () => {
    const updatedEntry = {
      id  : props.id,
      sender : props.sender,
      body: props.body,
      timeStamp : props.timeStamp,
      liked : !props.liked
    }
    props.toggleLike(updatedEntry)
  }
  const heartColor = props.liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick={handleToggleLike} className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  toggleLike : PropTypes.func.isRequired,
};

export default ChatEntry;