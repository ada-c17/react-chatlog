import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const ChatEntry = (props) => {
  // const [likeCount, setLikeCount] = useState(0);

  // const updateLikes = () => {
  //   setLikeCount(likeCount + 1);
  // };

  // const toggleLikes = () => {
  //   toggleLikes(id);
  // };
  const id = props.id;
  const chatSender = props.sender;
  const chatBody = props.body;
  const chatTimeStamp = props.timeStamp;
  const liked = props.liked;
  const toggleLikes = props.toggleLikes;

  const heart = liked ? '❤️' : '🤍';

  // const likeClick = (event) => {
  //   console.log("Hello! We're in printMessage!");
  //   console.log('This event object contains details about the event:', event);
  //   props.setLikeClick(props.id);
  //   setChatEntry();
  // };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatBody}</p>
        <p className="entry-time">
          <TimeStamp time={chatTimeStamp}></TimeStamp>
        </p>
        {/* <p> You have {likeCount} likes</p> */}
        <button className="like" onClick={() => toggleLikes(id)}>
          {heart}
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
