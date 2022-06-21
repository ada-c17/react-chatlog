import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {
  const id = props.id;
  const isLiked = props.liked;
  const heartColor = isLiked ? '❤️' : '🤍';
  const sender = props.sender;
  const body = props.body;
  const chatDate = props.timeStamp;
  const today = new Date();
  const chatDateObject = new Date(chatDate);
  // let yearsDiff =  date2.getFullYear - date1.getFullYear;
  const years = today.getFullYear() - chatDateObject.getFullYear();

  // if chat entry is local (sender= Vladimir, or Joe Biden)
  if (sender === 'Estragon' || sender === 'Joe Biden') {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{years} years ago</p>
          <button
            onClick={() => {
              props.updateLikedStatus(id);
            }}
            className="like"
          >
            {heartColor}
          </button>
          <p>{props.likeCount} </p>
        </section>
      </div>
    );
  }
  // if chat entry is remote (sender = Estragon)
  else if (sender === 'Vladimir') {
    return (
      <div className="chat-entry remote">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{years} years ago</p>
          <button
            onClick={() => {
              props.updateLikedStatus(id);
            }}
            className="like"
          >
            {heartColor}
          </button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
