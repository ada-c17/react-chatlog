import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartWasClicked = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    props.onHeartClick(updatedMessage);
  };

  const heartColor = props.liked ? '❤️' : '🤍';

  const calculateYearsPassed = () => {
    const thisYear = 2022;
    const messageYear = parseInt(props.timeStamp.slice(0, 4));

    return thisYear - messageYear;
  };

  const localOrRemote = () => {
    if (parseInt(props.id) % 2 === 0) {
      return 'chat-entry remote';
    } else {
      return 'chat-entry local';
    }
  };

  return (
    <div className={localOrRemote()}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{calculateYearsPassed()} years ago</p>
        <button onClick={heartWasClicked} className="like red">
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  email: PropTypes.string,
  liked: PropTypes.bool,
  onHeartClick: PropTypes.func,
};

export default ChatEntry;
