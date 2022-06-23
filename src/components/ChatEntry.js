import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  // const firstMessage = props.messages[0]
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    }
    props.onUpdate(updatedMessage)
    console.log(!props.liked, 'I was clicked and am coming from the button')
    const button = document.getElementById('button');
    if (!props.liked === true){
      button.textContent = '🌻'
    } else {
      button.textContent = '🤍'
    }
    
  }
  // const button = document.getElementById('button');

  // this is not right.....
  // const emojiChange = props.liked ? button.textContent = '🌻' : button.textContent = '🤍';
  // experimenting
  // const emojiChange = props.liked ? 'green' : 'red';

  // this is acting weird
  // console.log(props.liked, 'I was clicked and am coming from chat entry')

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="emojiChange" onClick={onLikeButtonClick} id="button">🤍</button>
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
