import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // update the icon using props.liked
  const likeButton = props.liked === true ? '❤️' : '🤍';

  // clicking like button will trigger likedCallback
  const toggleLiked = () => {
    props.likedCallback(props.id);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={toggleLiked}>
          {likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default ChatEntry;
