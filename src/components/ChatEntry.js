import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const { body, sender, timeStamp } = props;
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  body: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  id: PropTypes.number,
  liked: PropTypes.bool,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
