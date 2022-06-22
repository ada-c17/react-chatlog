import { React, useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, liked, addLike, removeLike }) => {
  const [like, setLike] = useState(liked);

  const handleOnClick = () => {
    if (like) {
      removeLike();
    } else {
      addLike();
    }

    setLike(!like);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={handleOnClick}>
          {like ? '❤️' : '🤍'}
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
  addLike: PropTypes.func,
  removeLike: PropTypes.func,
};

export default ChatEntry;
