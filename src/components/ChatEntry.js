import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  // const firstMessage = props.messages[0]
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.name,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    }
    props.onUpdate(updatedMessage)
  }
  // const button = document.getElementById('button');
  // const like = props.liked ? button.textContent = '🌻' : button.textContent = '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like" onClick={onLikeButtonClick} id="button">🤍</button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   //Fill with correct proptypes
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
// };

export default ChatEntry;
