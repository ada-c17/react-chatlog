import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';


const ChatEntry = (props) => {
  // Passed toggleHeart down though toggleHeartCallback

  const flipHeart = () => {
    props.toggleHeartCallback(props.id);
  };

  // const heartColor = props.liked ?  '❤️' : '🤍';
  
  return (
    <div className={`chat-entry ${props.sender === 'Estragon' ? 'remote' : 'local'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button onClick={flipHeart} className="like">{props.liked ?  '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  // flipHeart: PropTypes.func.isRequired,
};

export default ChatEntry;
