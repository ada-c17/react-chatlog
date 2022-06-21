import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const time = DateTime.fromISO(props.timeStamp);
  const relative = time.toRelative();

  let cssClass = 'chat-entry ';
  if (props.sender === 'Vladimir') {
    cssClass += 'local';
  } else {
    cssClass += 'remote';
  }

  // let liked = props.liked ? '❤️' : '🤍';
  const [liked, setLiked] = useState(props.liked);
  // let heart = liked ? '❤️' : '🤍';

  const click = () => {
    setLiked(!liked);
    props.togglesLikeCallback(props.id);
  };

  return (
    <div className={cssClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relative}</p>
        <button onClick={click} className="like">
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  id: PropTypes.number,
  togglesLikeCallback: PropTypes.func,
};

export default ChatEntry;
