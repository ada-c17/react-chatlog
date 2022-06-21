import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const side = (props.sender === 'Vladimir') ? 'chat-entry local': 'chat-entry remote';//className={`chat-entry {side}`}
  const flipMyHearts = () => {
    props.heartsCallback(props.id)
    // props.likes ? '❤️': '🤍'
  };
  return (
    <div className={side}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp className="entry-time" time={props.timeStamp}></TimeStamp>
        <button className="like" onClick={flipMyHearts}>{props.likes ? '❤️': '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  // heartsCallback:PropTypes.func.isRequired
};

export default ChatEntry;
