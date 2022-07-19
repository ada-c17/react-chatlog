import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState} from 'react';

const ChatEntry = (props) => {
  const[isLiked, setLiked] = useState(false);

  //Function to toggle Liked Heart
  const toggleLiked = () => {
    setLiked(!isLiked);
  }
  // Tenary Operator for Liked Heart change color
  const like = isLiked ? '❤️': ' 🤍 ';
  
  const likedMessage = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateLikes(updatedMessage); 
    setLiked((prevLike) => ! prevLike);
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp}/></p>
        <h2 onClick={likedMessage}>
        {like}
        </h2>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired

};

export default ChatEntry;
