import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const setTimeStringUnit = (daysSince) => {
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
  const unit = setTimeStringUnit(daysSince);
  return unit[0] === 'seconds'
    ? 'Just now'
    : `${Math.round(daysSince / unit[1])} ${unit[0]} ago`;
};

const ChatEntry = ({
  id,
  sender,
  source,
  color,
  body,
  timeStamp,
  liked,
  updateMessage,
}) => {
  const timeString = describeRelativeTime(new Date() - new Date(timeStamp));
  return (
    <div className={`chat-entry ${source}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time">{timeString}</p>
        <button
          className="like"
          onClick={() => {
            updateMessage({
              id: id,
              sender: sender,
              body: body,
              timeStamp: timeStamp,
              liked: !liked,
            });
          }}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatEntry;
