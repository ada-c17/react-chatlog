import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  timeStamp,
  body,
  sender1,
  sender1Color,
  sender2Color,
  liked,
  updateLikes,
}) => {
  let updatedClassName = 'chat-entry';
  if (sender === sender1) {
    updatedClassName += ' local';
  } else {
    updatedClassName += ' remote';
  }

  let currentColor;
  if (sender === sender1) {
    currentColor = sender1Color;
  } else {
    currentColor = sender2Color;
  }

  return (
    <div className={updatedClassName}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className="text-color" style={{ color: currentColor }}>
          {body}
        </p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => updateLikes(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sender1: PropTypes.string.isRequired,
  sender1Color: PropTypes.string.isRequired,
  sender2Color: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
