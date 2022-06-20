import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // console.log(props);
  // console.log(props.timeStamp);
  // console.log(typeof props.time);
  const sender = props.sender;
  const time = props.timeStamp;
  const body = props.body;
  // const years = 2022 - parseInt(time.substring(0, 4));
  // console.log(parseInt(time.substring(0, 4)));
  // console.log(years);
  const changeLikeButton = () => {
    props.changeLikeButton(props.id);
  };
  const heartColor = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={time} /> years ago
        </p>
        <button className="like" onClick={changeLikeButton}>
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
