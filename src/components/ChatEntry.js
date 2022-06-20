import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({id, sender, body, timeStamp, liked, toggleLike}) => {
  const handleToggleLiked = () => {
    const updatedEntry = {
      id: id, sender: sender, body: body, timeStamp: timeStamp, liked: !liked
    };
    toggleLike(updatedEntry)

  }
  const heartColor = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={handleToggleLiked}>{heartColor}</button>
      </section>
    </div>
  )};


ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
