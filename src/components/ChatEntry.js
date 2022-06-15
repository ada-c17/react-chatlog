import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const sender = props.sender;
  let className;
  if (sender === 'Estragon') {
    className = 'chat-entry local';
  } else {
    className = 'chat-entry remote';
  }

  return (
    <div className={className}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
};

export default ChatEntry;
