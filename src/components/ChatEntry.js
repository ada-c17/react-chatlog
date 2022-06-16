import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdateChatData}) => {

  return (
    <div className={id%2===1 ? 'chat-entry local' : 'chat-entry remote'}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble remote">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button onClick={() => onUpdateChatData(id)} className='like'>{liked ? '❤️': '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChatData: PropTypes.func.isRequired
};

export default ChatEntry;
