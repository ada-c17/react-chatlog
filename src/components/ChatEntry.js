import React from 'react';
import {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';


const ChatEntry = (props) => {
  const senderPosition =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const [like, setLike] = useState(props.heart);
  const heartFill = like ? '❤️': '🤍';

  const toggleLike = (id) => {
    props.updateLikeHeart(id);
    setLike(!like);
  };

  console.log(props)
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  return (
    <div className={senderPosition}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        
        <button className="like" onClick={()=> toggleLike(props.id)}>{heartFill}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
