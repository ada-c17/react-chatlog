import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const chatClass =
    props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';
  // changing year without using given component
  //  const entryDate = new Date(props.timeStamp);
  //  const currentDate = new Date();
  //  const yearsPassed = currentDate.getFullYear() - entryDate.getFullYear();

  const flipLiked = () => {
    props.likedCallback(props.id);
  };

  const color =
    props.sender === 'Estragon' ? props.remoteColor : props.localColor;

  return (
    <div className={chatClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={flipLiked} className="like">
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
  liked: PropTypes.bool,
};

export default ChatEntry;
