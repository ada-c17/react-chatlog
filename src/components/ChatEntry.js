import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const setUnit = (daysSince) => {
  if (daysSince >= 365) {
    return ['years', 365];
  }
  if (daysSince >= 30) {
    return ['months', 30];
  }
  if (daysSince >= 7) {
    return ['weeks', 7];
  }
  if (daysSince >= 1) {
    return ['days', 1];
  }
  if (daysSince * 24 >= 1) {
    return ['hours', 1 / 24];
  }
  if (daysSince * 1440 >= 1) {
    return ['minutes', 1 / 1440];
  }
  return ['seconds', 1 / 86400];
};

const describeRelativeTime = (timeSince) => {
  const daysSince = timeSince / 86400000;
  const unit = setUnit(daysSince);
  return unit[0] === 'seconds'
    ? 'Just now'
    : `${Math.round(daysSince / unit[1])} ${unit[0]} ago`;
};

const ChatEntry = ({ sender, body, timeStamp }) => {
  const timeString = describeRelativeTime(new Date() - new Date(timeStamp));
  const srcClass = sender === 'Vladimir' ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${srcClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeString}</p>
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
