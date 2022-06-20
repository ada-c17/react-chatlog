import React from 'react';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamps: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
