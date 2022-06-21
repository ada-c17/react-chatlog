import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [like, setLike] = useState(props.liked);

  const toggleHeartLike = () => {
    const updatedHeartEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateHeartColorCallback(updatedHeartEntry);
    setLike(!like);
  };

  const heartColor = like === true ? '❤️' : '🤍';

  const localRemote =
    props.odd === 0 ? 'chat-entry local' : 'chat-entry remote';

  const color = props.odd === 0 ? props.colorForSender1 : props.colorForSender2;

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={toggleHeartLike} className="like">
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
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  updateHeartColorCallback: PropTypes.func.isRequired,
};

export default ChatEntry;
