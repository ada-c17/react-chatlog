import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLikes, updateHearts}) => {
  const changeLike = () => {
    updateLikes(id);
  }

  const heartType = liked ? '❤️' : '🤍';
  const messageType = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
  const timeAgo = moment.utc(timeStamp).startOf('day').fromNow();


  return (
    <div className={messageType}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeAgo}</p>
        <button className="like" onClick={changeLike}>{heartType}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;