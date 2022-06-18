import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
//import TimeStamp from './TimeStamp';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const time = DateTime.fromISO(props.timeStamp);
  const relative = time.toRelative();
  //const buttonLiked = props.liked ? '❤️' : '🤍';
  // console.log(props.liked);

  const flipliked = () => {
    props.likedCallBack(props.id);
  };

  return (
    <div className="chat-entry local" key={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relative}</p>
        <button className="like" onClick={flipliked}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number,
  liked: PropTypes.bool,
};

export default ChatEntry;
