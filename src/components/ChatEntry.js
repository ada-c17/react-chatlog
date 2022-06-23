import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [liked, setLike] = useState(false);
  const changeHeart = !liked ? '🤍' : '❤️';
  const changeLike = (id) => {
    const likeState = setLike(!liked);
    props.onChangeLike(id);

    return likeState;
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}> years ago</TimeStamp>
        </p>
        <button
          onClick={() => {
            changeLike(props.id);
          }}
          className="like"
        >
          {changeHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onChangeLike: PropTypes.func.isRequired,
};

export default ChatEntry;
