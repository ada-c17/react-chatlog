import { React, useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, liked, timeStamp, id, onUpdateMessage }) => {
  const [isLiked, setIsLiked] = useState(liked);

  if (isLiked) {
    console.log('is liked');
  } else {
    console.log('is unliked');
  }

  const updateLiked = () => {
    console.log('updating heart')
    setIsLiked(!isLiked);
    onUpdateMessage({
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      id: id,
      isLiked: !isLiked,
    })
  };

  const heartColor = isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>

        <button onClick={updateLiked} className="like">{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onUpdateMessage: PropTypes.func.isRequired

};

export default ChatEntry;
