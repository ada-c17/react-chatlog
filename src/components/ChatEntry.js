import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">Vladimir</h2>
      <section className="entry-bubble">
        <p>why are you arguing with me</p>
        <p className="entry-time">2018-05-29T22:49:06+00:00</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender:
  body:
  timeStamp:
  liked:
};

export default ChatEntry;
