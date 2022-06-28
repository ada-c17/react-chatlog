import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import chatMessages from '../data/messages.json';
// import { DateTime } from 'luxon';
import TimeStamp from './TimeStamp';

// const messageIndex = 0;

// const timeSince = (messageIndex) => {
//   // return message time or how long ago message was sent if more than 1 year ago?
//   const timeNow = DateTime.now();
//   const messageDate = new Date(chatMessages[messageIndex].timeStamp);
//   // 31557600000 ms / year, returns the number of years since message was sent, rounded down.
//   const resultTime = Math.floor((timeNow - messageDate) / 31557600000);
//   console.log(resultTime);
//   return resultTime;
// };

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* <p className="entry-time">{timeSince(messageIndex)} years ago</p> */}
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like">{props.liked ? '❤️' : `🤍`}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
