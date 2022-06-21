import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';


const ChatEntry = (props) => {

  const [isLiked, setLiked] = useState(false);

  const toggleHeart = () => {
    setLiked(!isLiked);
  }

  const heartColor = isLiked ?  '❤️' : '🤍';
  
  return (
    <div className={`chat-entry ${props.sender === 'Estragon' ? 'remote' : 'local'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button onClick={toggleHeart} className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propType = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
