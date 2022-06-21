import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const { sender, body, timeStamp, setLikedCallback } = props;
  const [clicked, setClicked] = useState(false);
  // const sender = props.sender;
  // const body = props.body;
  // const timeStamp = props.timeStamp;
  // const likeMessageFunc = props.setLikedCallback;

  const likeMessageFunc = () => {
    setLikedCallback(!clicked, setClicked);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={likeMessageFunc}>
          {clicked ? '❤️' : '🤍'}
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
  setLikedCallback: PropTypes.func.isRequired,
  // liked: PropTypes.bool,
  //Fill with correct proptypes
};

export default ChatEntry;
