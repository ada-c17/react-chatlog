import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleLike = () => {
    props.onLike(props.id);
  };
  if (props.liked === true) {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time">
            <TimeStamp time={props.timeStamp} />
          </p>
          <button className="like" onClick={handleLike}>
            ❤️
          </button>
        </section>
      </div>
    );
  } else {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time">
            <TimeStamp time={props.timeStamp} />
          </p>
          <button className="like" onClick={handleLike}>
            🤍
          </button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
