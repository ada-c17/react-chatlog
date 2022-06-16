import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  //const timeStampObj = new Date(props.timeStamp);
  //const now = new Date();
  //const year = now.getFullYear() - timeStampObj.getFullYear();

  return (
    <div
      className={
        props.sender === props.localUser
          ? 'chat-entry local'
          : 'chat-entry remote'
      }
    >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {
          //<p className="entry-time">{year} years ago</p>
        }
        <TimeStamp time={props.timeStamp} />
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  //id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
