import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
// import { useState } from 'react';

const ChatEntry = (props) => {
  let bubbleSender = 'chat-entry local';
  if (props.sender === props.senderRemote) {
    bubbleSender = 'chat-entry remote';
  }

  return (
    <div className={bubbleSender}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          className="like"
          onClick={() => props.updateLikesCallback(props.id)}
        >
          {props.emoji}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateLikesCallback: PropTypes.func.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default ChatEntry;
