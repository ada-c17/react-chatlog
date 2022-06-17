import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  sender,
  timeStamp,
  body,
  incrementLikes,
  decrementLikes,
  sender1,
  sender1Color,
  sender2Color,
}) => {
  const [isLiked, setIsLiked] = useState('🤍');

  const updateLikes = () => {
    if (isLiked === '🤍') {
      setIsLiked('❤️');
      incrementLikes();
    } else {
      setIsLiked('🤍');
      decrementLikes();
    }
  };

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
        <button className="like" onClick={updateLikes}>
          {isLiked}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  incrementLikes: PropTypes.func.isRequired,
  decrementLikes: PropTypes.func.isRequired,
  sender1: PropTypes.string.isRequired,
  sender1Color: PropTypes.string.isRequired,
  sender2Color: PropTypes.string.isRequired,
};

export default ChatEntry;
