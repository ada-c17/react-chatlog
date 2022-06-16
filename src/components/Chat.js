import React from 'react';
import PropTypes from 'prop-types';

const Chat = (props) => {
  return (
    <section>
      <p>{props.id}</p>
      <p>Sender: {props.sender}</p>
      <p>Body: {props.body}</p>
      <p>Timestamp: {props.timeStamp}</p>
      <button>Liked</button>
    </section>
  );
};

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // timeStamp: PropTypes.string.isRequired,
};

export default Chat;
