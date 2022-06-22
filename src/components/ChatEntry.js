import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let senderType = 'local';
  if (props.sender !== 'Vladimir') {
    senderType = 'remote';
  }

  const heartColor = props.liked ? '❤️' : '🤍';

  const toggleHeart = (id) => {
    props.heartCallback(id);
  };

  return (
    <div className={`chat-entry ${senderType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>

        <button onClick={() => toggleHeart(props.id)} className="like">
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ChatEntry;
