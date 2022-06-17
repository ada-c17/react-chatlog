import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { useState } from 'react';

const ChatEntry = (props) => {
  const chatSender = props.sender;
  const chatMessage = props.body;

  const timeStamp = DateTime.fromISO(props.timeStamp);
  const chatTimeStamp = timeStamp.toRelative();

  const [likedState, setLikedState] = useState('❤️');
  const toggleLikes = () => {
    setLikedState(!likedState);
  };
  const likes = likedState ? '🤍' : '❤️';

  return (
    <div
      className={
        chatSender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote'
      }
    >
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatMessage}</p>
        <p className="entry-time">{chatTimeStamp}</p>
        <button className="like" onClick={toggleLikes}>
          {likes}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
