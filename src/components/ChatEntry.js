import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // assign references to props
  const id = props.id
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  // const liked = props.liked;

  // add behavior to like button
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !props.liked
    }
    props.onUpdate(updatedMessage);
  }

  const likeSymbol = props.liked ? "❤️" : "🤍";

  // return statements; check if messages local or remote
  if (props.sender === "Chidi🐈") {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time"><TimeStamp time={timeStamp}/></p>
          <button className="like" onClick={onLikeButtonClick}>{likeSymbol}</button>
        </section>
      </div>
    );
  } else {
    return (
      <div className="chat-entry remote">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time"><TimeStamp time={timeStamp}/></p>
          <button className="like" onClick={onLikeButtonClick}>{likeSymbol}</button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
