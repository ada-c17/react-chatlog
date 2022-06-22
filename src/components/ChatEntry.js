import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// const ChatEntry = (props) => {
const ChatEntry = ({ id, sender, body, timeStamp, liked, newEntry }) => {
  const changeHeart = () => {
    const updatedMsg = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };
    newEntry(updatedMsg);
    // setLikeButton is invoked
    // setLikeButton(updateMsg.liked ? '❤️' : '🤍');
  };
  // beauty
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={changeHeart}>
          {/* {liked === true ? '❤️' : '🤍'} */}
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
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  newEntry: PropTypes.func.isRequired,
};

export default ChatEntry;
