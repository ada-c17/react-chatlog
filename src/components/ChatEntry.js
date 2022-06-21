// import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  //({sender, body, timeStamp…}) destructing instead of props
  // const [liked, setLike] = useState(false);

  const fillheart = props.liked ? '❤️' : '🤍';

  const conversationSide =
    props.id % 2 !== 0 ? 'chat-entry local' : 'chat-entry remote';
  //props.sender === 'Vladimir ? 'chat-entry local' : 'chat-entry remote';
  const onClickLike = () => {
    const message = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateFunction(message);
  };

  return (
    <div className={conversationSide}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={onClickLike}>
          {fillheart}
        </button>
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
