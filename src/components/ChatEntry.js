import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const time = DateTime.fromISO(props.timeStamp);
  const relative = time.toRelative();
  console.log(time);

  let cssClass = 'chat-entry ';
  if (props.sender === 'Vladimir') {
    cssClass += 'local';
  } else {
    cssClass += 'remote';
  }
  return (
    <div className={cssClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relative}</p>
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
