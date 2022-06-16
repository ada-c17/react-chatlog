import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const chatSender = props.sender;
  const chatMessage = props.body;
  const timeStamp = DateTime.fromISO(props.timeStamp);
  const chatTimeStamp = timeStamp.toRelative();

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatMessage}</p>
        <p className="entry-time">{chatTimeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
