import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const describeRelativeTime = (timeSince) => {
  const daysSince = timeSince / 86400000;
  if (daysSince >= 365) {
    return `${Math.round(daysSince / 365)} years ago`;
  }
  if (daysSince >= 30) {
    return `${Math.round(daysSince / 30)} months ago`;
  }
  if (daysSince >= 7) {
    return `${Math.round(daysSince / 7)} weeks ago`;
  }
  if (daysSince >= 1) {
    return `${Math.round(daysSince)} days ago`;
  }
  if (daysSince * 24 >= 1) {
    return `${Math.round(daysSince * 24)} hours ago`;
  }
  if (daysSince * 1440 >= 1) {
    return `${Math.round(daysSince * 1440)} minutes ago`;
  }
  return 'Just now';
};

const ChatEntry = ({ sender, body, timeStamp }) => {
  const timeString = describeRelativeTime(new Date() - new Date(timeStamp));
  return (
    <div className="chat-entry local">
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
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
};

export default ChatEntry;
