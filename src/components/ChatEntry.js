import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const likeClick = () => {
    props.onUpdate(props.id);
  };

  const heartIcon = props.liked ? '❤️' : '🤍';

  const conversationSide =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={conversationSide}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={likeClick}>
          {heartIcon}
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
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
