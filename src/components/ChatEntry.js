import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const convertMsToDays = (ms) => {
  const days = ms / 1000 / 60 / 60 / 24;
  return Math.round(days);
};

const timeStampMessage = (days) => {
  let msgStamp = 'unable to get timestamp';
  if (days < 1) {
    msgStamp = 'Today';
  } else if (days >= 1 && days < 365) {
    msgStamp = `${days} days ago`;
  } else if (days >= 365) {
    const yrs = Math.floor(days / 365);
    msgStamp = `${yrs} years ago`;
  }
  return msgStamp;
};

// const testData = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// };

const ChatEntry = (props) => {
  const msgTime = new Date(props.timeStamp);
  const today = new Date();
  const daysSinceMsg = convertMsToDays(today - msgTime);

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {daysSinceMsg < 1
            ? msgTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })
            : timeStampMessage(daysSinceMsg)}
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
