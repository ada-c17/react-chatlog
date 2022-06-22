import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const timeComponent = <TimeStamp time={props.timeStamp} />;

  const heartColor = props.liked ? '❤️' : '🤍';

  let side;
  let colorId;

  if (props.id % 2 === 0) {
    side = 'remote';
    colorId = 0;
  } else {
    side = 'local';
    colorId = 1;
  }

  let color;
  if (props.colors) {
    color = props.colors[colorId];
  } else {
    color = 'black';
  }

  const messageColor = { color: color };

  return (
    <div key={props.key} className={`chat-entry ${side}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p style={messageColor}>{props.body}</p>
        <p className="entry-time">{timeComponent}</p>
        <button
          className="like"
          onClick={() => props.toggleLikesCallback(props.id)}
        >
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
