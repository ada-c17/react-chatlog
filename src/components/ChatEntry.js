import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, likedMessages }) => {
  let likeButton = liked ? '❤️' : '🤍';
  const isLiked = () => {
    likedMessages(id);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{timeStamp}</p>
        <button onClick={isLiked} className="like">
          {likeButton}
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
  likedMessages: PropTypes.func.isRequired,
};

export default ChatEntry;
