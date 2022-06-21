import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const timeComponent = <TimeStamp time={props.timeStamp} />;

  const heartColor = props.liked ? '❤️' : '🤍';

  let side;

  if (props.sender === 'Vladimir') {
    side = 'local';
  } else {
    side = 'remote';
  }

  // const side = props.name === 'Vladimir' ? 'local' : 'remote';
  // console.log(side);

  // if(props.sender === 'Vladimir'){
  //   const side = 'local';
  // }
  // else{
  //   const side = 'remote';
  // }

  return (
    // <div key={props.id} className="chat-entry local">
    <div key={props.id} className={`chat-entry ${side}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeComponent}</p>
        <button
          className="like"
          onClick={() => props.toggleLikesCallback(props.id)}
        >
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  // key: PropTypes.number.isRequired,
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
