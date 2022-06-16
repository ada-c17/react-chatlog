import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> { props.sender } </h2>
      <section className="entry-bubble">
        <p> { props.body } </p>
        <p className="entry-time"> <TimeStamp time={props.timeStamp} />  </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
