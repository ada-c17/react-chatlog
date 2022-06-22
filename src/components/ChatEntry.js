import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const flipliked = () => {
    props.likedCallBack(props.id);
  };

  const likeButton = props.liked ? '❤️' : '🤍';

  // set user state to true or false
  let userState = false;
  if (props.sender === props.userState) {
    userState = true;
  }

  return (
    <div
      className={`chat-entry ${
        props.sender === props.userLocal ? 'local' : 'remote'
      }`}
      key={props.id}
    >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={userState ? `${props.displayColor}` : ''}>{props.body}</p>
        <p className="entry-time">
          {props.time}
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={flipliked}>
          {likeButton}
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
  likedCallBack: PropTypes.func,
};

export default ChatEntry;
