import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
//import { useState } from 'react';

const ChatEntry = (props) => {
  const flipMyHearts = () => {
    props.heartCallback(props.id);
  };
  return (
    <div className={`chat-entry ${props.sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={props.timeStamp} />{' '}
        </p>
        <button className="like" onClick={flipMyHearts}>
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
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  flipMyHearts: PropTypes.func.isRequired,
};

export default ChatEntry;
