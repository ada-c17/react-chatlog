import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  //const timeStampObj = new Date(props.timeStamp);
  //const now = new Date();
  //const year = now.getFullYear() - timeStampObj.getFullYear();

  const [heart, setHeart] = useState('🤍');

  const changeHeart = () => {
    if (heart === '🤍') {
      setHeart('❤️');
      props.onHeartChange(true);
    } else {
      setHeart('🤍');
      props.onHeartChange(false);
    }
  };

  return (
    <div
      className={
        props.sender === props.localUser
          ? 'chat-entry local'
          : 'chat-entry remote'
      }
    >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p
          className={
            props.userColors
              ? props.sender === props.localUser
                ? `${props.userColors.localUser}`
                : `${props.userColors.remoteUser}`
              : ''
          }
        >
          {props.body}
        </p>
        {
          //<p className="entry-time">{year} years ago</p>
        }
        <TimeStamp time={props.timeStamp} />
        <button onClick={changeHeart} className="like">
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  localUser: PropTypes.string.isRequired,
  onHeartChange: PropTypes.func.isRequired,
  userColors: PropTypes.object,
};

export default ChatEntry;
