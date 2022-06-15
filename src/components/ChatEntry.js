import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp }) => {
  const timeInterval = Math.floor(
    (new Date() - Date.parse(timeStamp)) / (1000 * 60 * 60 * 24 * 365)
  );
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeInterval} years ago</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
