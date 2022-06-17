import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';
const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
 

  const [liked, setFillHeart] = useState(props.liked);
  let like = '🤍';
  const fillRedHeart = () => {
    setFillHeart(!liked);
  }
  
  like = !liked ? '🤍' : '❤️';
  let leftRight = (sender === 'Vladimir') ? 'local' : 'remote';
   
  return (
    <div className={`chat-entry ${leftRight}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button onClick={fillRedHeart}>{like}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
