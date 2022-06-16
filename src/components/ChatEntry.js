import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import Chat from './Chat';

const ChatEntry = ({ chatData }) => {
  let chat = chatData[0];
  let sender = chat.sender;
  let body = chat.body;
  let timeStamp = chat.timeStamp;
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatEntry;
