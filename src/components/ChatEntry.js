import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


// liked boolean prop type needs to be added
// if liked = true change the state to (❤️)  filled heart
// else false is empty heart (🤍). which is default
// count when liked occurs

 //  '🤍' : '❤️';

const ChatEntry = (props) => {
  const heartIcon =  (props.liked) ? '❤️' : '🤍';
  const messageAlign = (props.sender === 'Vladimir') ? 'remote' : 'local';
  return (
    <div className={`chat-entry ${messageAlign}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => {props.setLiked(props.id)}}>{heartIcon}</button>
      </section>
    </div>
  );
};

// add id to chatEntry
ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
