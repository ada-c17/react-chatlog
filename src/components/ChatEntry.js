import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [heart, setHeart] = useState('🤍');
  const changeMyHeart = () => {
    if (heart === '🤍') {
      setHeart('❤️');
      props.OnChangedLikes(true);
    } else {
      setHeart('🤍');
      props.OnChangedLikes(false);
    }
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button onClick={changeMyHeart} className="like">
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  OnChangedLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
