import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const chatClass =
    props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';
  // changing year without using given component
  //  const entryDate = new Date(props.timeStamp);
  //  const currentDate = new Date();
  //  const yearsPassed = currentDate.getFullYear() - entryDate.getFullYear();

  const [heart, setHeart] = useState('🤍');

  const flipLiked = () => {
    flipHeart();
    props.likedCallback(props.id);
  };

  const flipHeart = () => {
    if (heart === '🤍') {
      setHeart('❤️');
    } else {
      setHeart('🤍');
    }
  };
  return (
    <div className={chatClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        {/* <button onClick={props.likedCallback(props.id)} className="like"> */}
        <button onClick={flipLiked} className="like">
          {/* {props.liked ? '❤️' : '🤍'} */}
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
  liked: PropTypes.bool,
};

export default ChatEntry;

// Wave 1

// const ChatEntry = (props) => {
//   const firstMessage = {
//     "id": 1,
//     "sender":"Vladimir",
//     "body":"why are you arguing with me",
//     "timeStamp":"2018-05-29T22:49:06+00:00",
//     "liked": false
//   };
//   return (
//     <div className="chat-entry local">
//       <h2 className="entry-name">{firstMessage.sender}</h2>
//       <section className="entry-bubble">
//         <p>{firstMessage.body}</p>
//         <p className="entry-time">{firstMessage.timeStamp}</p>
//         <button className="like">{firstMessage.liked ? "❤️": "🤍"}</button>
//       </section>
//     </div>
//   );
// };
