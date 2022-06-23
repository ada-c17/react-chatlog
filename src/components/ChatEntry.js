import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedMessage);
  }

  const likeButton = props.liked ? '💚' : '🤍';

  return (
    <div className="chat-entry local" key={props.id}>
      <h2 className="entry-name"> { props.sender } </h2>
      <section className="chat-entry.remote entry-bubble" >
        <p> { props.body } </p>
        <p className="entry-time"> <TimeStamp time={props.timeStamp} />  
        </p>
        <button className="like" onClick={onLikeButtonClick}> 
        {likeButton} 
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
