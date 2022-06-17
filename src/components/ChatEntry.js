import React from 'react';
import './ChatEntry.css';
import TimeStamp from '../components/TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const onLikedButtonClick = () => {
    const updatedLike = {
      id: props.id,
      sender: props.sender,
      timeStamp: props.timeStamp,
      body: props.body,
      liked: !props.liked,
    };

    props.onUpdate(updatedLike);
  };

  const heartType = props.liked ? '❤️' : '🤍';

  let idVal = false;
  if (props.id % 2 === 0) {
    idVal = false;
  } else {
    idVal = true;
  }

  const env = idVal ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${env}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={onLikedButtonClick} className="like">
          {heartType}
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
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
