import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (entry) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> {entry.sender} </h2>
      <section className="entry-bubble">
        <p> {entry.body} </p>
        <p className="entry-time">
          <TimeStamp time={entry.timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
