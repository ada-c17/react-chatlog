import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, toggleLike }) => {
  const isLocal = (id) => {
    if (!(id % 2 === 0)) {
      return true;
    } else {
      return false;
    }
  };

  const heartColor = liked ? '❤️' : '🤍';

  const handleToggleLike = () => {
    toggleLike(id);
  };

  return (
    <div
      className={`${isLocal(id) ? 'chat-entry local' : 'chat-entry remote'}`}
    >
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble ">
        <p> {body} </p>
        <p className="entry-time ">
          <TimeStamp time={timeStamp} />
        </p>
        <button onClick={handleToggleLike}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
