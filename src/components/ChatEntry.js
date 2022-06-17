import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [like, setLike] = useState(props.heart);

  const changeHeartColor = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.Liked,
    };
    props.onUpdate(updatedEntry);
    setLike(!like);
  };

  const heartColor = like === true ? '💙' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={changeHeartColor} id="like">
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Date).isRequired,
  isliked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
