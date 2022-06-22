import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const chatEntryClassType = props.sender === 'Vladimir' ? 'local' : 'remote';
  
  const likeMessage = () => {
    props.likeCallback(props.id);
  };

  return (
    <div className = {`chat-entry ${chatEntryClassType}`}>
      <p className = 'entry-name'>{props.sender}</p>
      <section className = 'entry-bubble'>
        <p>{props.body}</p>
        <p className = 'entry-time'>
          <TimeStamp
            time={props.timeStamp}
          />
        </p>
        <button className = 'like' onClick={likeMessage}>{props.liked ? '❤️': '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
