import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const id = props.id;
  const chatSender = props.sender;
  const chatBody = props.body;
  const chatTimeStamp = props.timeStamp;
  const liked = props.liked;
  const toggleLikes = props.toggleLikes;

  const heart = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatBody}</p>
        <p className="entry-time">
          <TimeStamp time={chatTimeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => toggleLikes(id)}>
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
  toggleLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
