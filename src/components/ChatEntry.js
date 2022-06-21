import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartWasClicked = () => {
    console.log(props);
    console.log('onHeartClick activated');
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    props.onHeartClick(updatedMessage);
  };

  // console.log(props.liked);
  const heartColor = props.liked ? '❤️' : '🤍';

  // console.log(heartColor);

  const calculateYearsPassed = () => {
    const thisYear = 2022;
    const messageYear = parseInt(props.timeStamp.slice(0, 4));

    return thisYear - messageYear;
  };

  const localOrRemote = () => {
    if (props.id % 2 === 0) {
      return 'local';
    } else {
      return 'remote';
    }
  };

  return (
    <div className="chat-entry local">
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
  //Fill with correct proptypes
};

export default ChatEntry;
