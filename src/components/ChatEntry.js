import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleHeartStatus = () => {
    props.toggleHeartStatusCallback(props.id);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          <>{props.body}</>
        </p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={toggleHeartStatus} className="like">
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
