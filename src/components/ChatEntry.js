import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdate}) => {
  const upDate=()=>{
    onUpdate(id)
  }
  const like= liked? '❤️': '🤍';
  //const passTime= 2022 - timeStamp.getYear();
  return (
    <div className="chat-entry local" key={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>
          {body}
        </p>
        <p className="entry-time">{2022-timeStamp.getYear} years ago</p>
        <button className='like' onClick={upDate}>{like}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
