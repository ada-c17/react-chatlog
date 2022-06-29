import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  likesCountCallBack,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  const updateLiked = (id) => {
    likesCountCallBack(id);
    setIsLiked(!isLiked);
  };

  const heartColor = isLiked ? '❤️' : '🤍';

  return (
    <div key={id} className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => updateLiked(id)}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  likesCountCallBack: PropTypes.func,
};

export default ChatEntry;
