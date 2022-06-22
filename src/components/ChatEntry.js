import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  // Passed toggleHeart down though toggleHeartCallback
  const flipHeart = () => {
    props.toggleHeartCallback(props.id);
  };
  
  return (
    <div className={`chat-entry ${props.sender === 'Estragon' ? 'remote' : 'local'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={flipHeart}>{props.liked ? '❤️' : '🤍' }</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  toggleHeartCallback: PropTypes.func,
};

// Avoiding console.error messages when running 'yarn test' about id 
// and toggleHeartCallback being undefined in the test.js files
// TA Matt suggested to set a default prop and to keep liked, id, and toggleHeartCallback as optional

ChatEntry.defaultProps = {
  toggleHeartCallback: () => {}
}

export default ChatEntry;
