import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let senderType = 'remote';

  if (props.sender === 'Vladimir') {
    senderType = 'local';
  }

  return (
    <div className={`chat-entry ${senderType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>

        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
