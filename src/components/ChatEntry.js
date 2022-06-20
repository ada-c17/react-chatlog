import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({
  id,
  sender,
  source,
  color,
  body,
  timeStamp,
  liked,
  updateMessage,
}) => {
  return (
    <div className={`chat-entry ${source}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          className="like"
          onClick={() => {
            updateMessage({
              id: id,
              sender: sender,
              body: body,
              timeStamp: timeStamp,
              liked: !liked,
            });
          }}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatEntry;
