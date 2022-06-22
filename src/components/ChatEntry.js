import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const timeStamp = TimeStamp({time:props.timeStamp})
  

  const liked = (props.liked ? '❤️' : '🤍');

  return (
    <div key={props.id} className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="like" onClick={() => props.setLikeUpdateCallBack(props.id)}>{liked}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  setLikeUpdateCallBack:PropTypes.func.isRequired,
};

export default ChatEntry;
