import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ id, sender, body, timeStamp, liked, toggleLike }) => {
  const timeInterval = Math.floor(
    (new Date() - Date.parse(timeStamp)) / (1000 * 60 * 60 * 24 * 365)
  );
  const [heart, setHeart] = useState('🤍');
  const toggleHeart = () => (heart === '🤍' ? setHeart('❤️') : setHeart('🤍'));
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeInterval} years ago</p>
        <button
          className="like"
          onClick={() => {
            toggleLike(id);
            toggleHeart();
          }}
        >
          {heart}
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
  toggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
