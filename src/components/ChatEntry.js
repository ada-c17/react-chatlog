import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp }) => {
  const isLocal = (id) => {
    if (!(id % 2 === 0)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={`${isLocal(id) ? 'chat-entry local' : 'chat-entry remote'}`}
    >
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble ">
        <p> {body} </p>
        <p className="entry-time ">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like">🤍</button>
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
};

export default ChatEntry;
