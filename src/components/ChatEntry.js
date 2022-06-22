import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

/**
 *
 * Component for showing details of individual messages
 *
 * @component
 *
 */

const ChatEntry = (props) => {
  const updateLikes = () => {
    props.likedCallback(props.id);
  };

  return (
    <div
      className={`chat-entry ${
        props.sender === 'Estragon' ? 'remote' : 'local'
      }`}
    >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={updateLikes}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  /**
   * Body of message
   */
  body: PropTypes.string.isRequired,
  /**
   * Sender of message
   */
  sender: PropTypes.string.isRequired,
  /**
   * Time message was sent
   */
  timeStamp: PropTypes.string.isRequired,
  /**
   * Id of message
   */
  id: PropTypes.number,
  /**
   * Liked boolean determines if message was liked
   */
  liked: PropTypes.bool,
};

export default ChatEntry;
