import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';


const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onUpdate
}) => {


  // console.log({
  //   id,
  //   sender,
  //   body,
  //   timeStamp,
  //   liked,
  //   onUpdate
  // })
  // const firstMessage = props.messages[0]
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    }
    onUpdate(updatedMessage)
    
  // const button = document.getElementById('button');

  // if (!props.liked === true){
  //   button.textContent = '🌻'
  // } else {
  //   button.textContent = '🤍'
  // }

  // const emojiChange = () => {
  //   if (!props.liked === true){
  //     button.textContent = '🌻'
  //   } else {
  //     button.textContent = '🤍'
  //   }
  // }

  }

  // not right
  // const button = document.getElementById('button');
  // this is not right.....
  // const emojiChange = props.liked ? button.textContent = '🌻' : button.textContent = '🤍';
  // experimenting
  // const emojiChange = props.liked ? 'green' : 'red';


  let icon = ''

  if (liked === true){
    icon = '🌻'
  } else {
    icon = '🤍'
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="emojiChange" onClick={onLikeButtonClick} id="button">{icon}</button>
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
