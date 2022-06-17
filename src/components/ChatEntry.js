import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp }) => {
  let timeStampDate = new Date(timeStamp);
  let currentDate = new Date();
  let timeStampYear = timeStampDate.getFullYear();
  let currentYear = currentDate.getFullYear();

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{currentYear - timeStampYear} years ago</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
