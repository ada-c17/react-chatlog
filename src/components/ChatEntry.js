import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  handleMessage,
  textColor,
}) => {
  const senderClass =
    sender === 'Estragon' ? 'chat-entry local' : 'chat-entry remote';

  let colorClass;
  if (textColor) {
    // asynchronous process, otherwise the test will fail.
    colorClass =
      sender === 'Estragon' ? textColor['localUser'] : textColor['remoteUser'];
  }

  const toggleLike = () => {
    const UpdatedMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };
    handleMessage(UpdatedMessage);
  };

  return (
    <div className={senderClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={colorClass}>{body}</p>
        <TimeStamp className="entry-time" time={timeStamp} />
        <button className="like" onClick={toggleLike}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  handleMessage: PropTypes.func,
  textColor: PropTypes.object,
};

export default ChatEntry;
