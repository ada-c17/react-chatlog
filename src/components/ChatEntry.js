import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const ChatEntry = (props) => {
  const timeAgo = moment(props.timeStamp).fromNow();
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeAgo}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
