import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  //display tomes as ..years ago
  let currentYear = new Date().getFullYear();
  let pastYear = parseInt(props.timeStamp.slice(0, 4));
  console.log(pastYear);
  const agoTime = currentYear - pastYear;

  //event handler for like button click
  const handleHeartClick = () => {
    const messageUpdated = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.heartToggling(messageUpdated);
  };

  const button = props.liked ? (
    <button onClick={handleHeartClick} className="like">
      ❤️
    </button>
  ) : (
    <button onClick={handleHeartClick} className="like">
      🤍
    </button>
  );

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{agoTime} years ago</p>
        {/* <button onClick={handleHeartClick} className="like">
          🤍
        </button> */}
        {button}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  heartToggling: PropTypes.func.isRequired,
};

export default ChatEntry;
