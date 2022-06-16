import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ sender, timeStamp, body, incrementLikes }) => {
  const [isLiked, setIsLiked] = useState('🤍');

  const updateLikes = () => {
    isLiked === '🤍' ? setIsLiked('❤️') : setIsLiked('🤍');
    incrementLikes();
  };

  const chatTimeStamp =
    new Date(new Date() - new Date(timeStamp)).getFullYear() - 1970;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{chatTimeStamp} years ago</p>
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
};

export default ChatEntry;
