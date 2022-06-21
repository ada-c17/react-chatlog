import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  // const TimeStamp = (props) => {
  //   const time = DateTime.fromISO(props.timeStamp);
  //   const relative = time.toRelative();
  //   return relative;
  // };
  const heartToggle = () => {
    console.log('to do: make red/white heart toggle');
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like" onClick={heartToggle}>🤍</button>
      </section>
    </div>
  );
}

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool
};

export default ChatEntry;
