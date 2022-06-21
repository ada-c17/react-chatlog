import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp }) => {
  // const [likesCount, setLikesCount] = useState(0);
  const [likeHeart, setLikeHeart] = useState('🤍');

  const onClickLike = () => {
    setLikeHeart(likeHeart === '🤍' ? '❤️' : '🤍');
    // if(likeHeart === '🤍' ) {
    //   setLikeHeart('❤️');
    // }
  };

  //   const handleLikesChanges = () => {

  //   }
  // };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button onClick={onClickLike} className="like">
          {likeHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
