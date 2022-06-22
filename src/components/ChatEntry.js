import React from 'react';
import { useState } from 'react';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  // Setup likeStatus to hold state that has value true or false.
  // setLikeStatus is a function used to change likeStatus.
  const [likeStatus, setLikeStatus] = useState(false);

  const toggleHeartColor = () => {
    // Toggle likeStatus. If likeStatus is true, set to false. If likeStatus is false, set to true
    setLikeStatus(!likeStatus);
    props.onUpdateChatEntry(!likeStatus);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        {/* 
            Setting up a heart as a button.
            onClick={toggleHeartColor}: when the button is cliked, will invoke toggleHeartColar,
              which will toggle the value of likeStatus between true and false.
            likeStatus ? '❤️' : '🤍': if likeStatus is true, will give red heart, otherwise white heart
        */}
        <button className="like" onClick={toggleHeartColor}>{likeStatus ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onUpdateChatEntry: PropTypes.func
};

export default ChatEntry;
