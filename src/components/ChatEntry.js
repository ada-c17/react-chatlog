import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const diffTime = (time) => {
  const timeMS = Date.now() - Date.parse(time);
  const timeDiff = new Date(timeMS);
  return Math.abs(timeDiff.getUTCFullYear() - 1970);
};

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{diffTime(props.timeStamp)} years ago</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  // liked: PropTypes.bool
};

export default ChatEntry;
