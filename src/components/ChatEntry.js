import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateMessage }) => {
  const handleToggleLike = () =>{
    const updatedMessage = {
      id: id,
      body: body,
      sender: sender,
      timeStamp: timeStamp,
      liked: !liked,
    };
    updateMessage(updatedMessage);
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button onClick={handleToggleLike} className="like">
          {liked === true ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatEntry;
