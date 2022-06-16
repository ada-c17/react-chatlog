import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

// We will now need to update the ChatEntry component to use the liked field.
// When we click a heart, the state of the entries will need to update in our App
// so that it can report the number of likes (❤️s).
// Consider implementing a helper function to calculate the number of likes (❤️s).
// Consider using a ternary to display a 🤍 or a ❤️ as needed.

// const [isPresent, setIsPresent] = useState(false);
// const togglePresence = () => {
//   setIsPresent(!isPresent);
// };

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState('🤍');
  const [likeCount, setLikeCount] = useState(0); //maybe not how to do this

  const toggleLiked = () => {
    setIsLiked(!isLiked);
    setLikeCount(likeCount + 1); //where should likeCount get displayed??
  };
  const heartColor = isLiked ? '❤️' : '🤍';

  const sender = props.sender;
  const body = props.body;
  const chatDate = props.timeStamp;
  const today = new Date();
  // console.log('today is', today);
  // console.log('timestamp is', chatDate);
  const chatDateObject = new Date(chatDate);
  // let yearsDiff =  date2.getFullYear - date1.getFullYear;
  const years = today.getFullYear() - chatDateObject.getFullYear();
  // console.log(today.getFullYear());
  // console.log(chatDateObject.getFullYear());
  // console.log(years);

  // if chat entry is local (sender= Vladimir, or Joe Biden)
  if (sender === 'Estragon' || sender === 'Joe Biden') {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{years} years ago</p>
          <button onClick={toggleLiked} className="like">
            {heartColor}
          </button>
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
          <button onClick={toggleLiked} className="like">
            {heartColor}
          </button>
          {/* <button className="like">🤍</button> */}
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

// class example:
// Cat.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   saying: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };
