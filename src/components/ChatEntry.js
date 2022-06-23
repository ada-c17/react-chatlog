import React from 'react';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const changeMyLike = () => {
    props.likedCallback(props.id);
  };

  const messageFormat = props.sender === 'Estragon' ? 'remote' : 'local';
  const likedButton = props.liked ? '❤️' : '🤍';

  return (
    <div className={'chat-entry ' + messageFormat}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={changeMyLike}>
          {likedButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
