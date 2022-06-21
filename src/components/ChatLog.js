// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import TimeStamp from './TimeStamp';
import './ChatLog.css';

const ChatLog = (props) => {
  const entries = props.entries.map(entry => {
    return (
      <section>
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={<TimeStamp time={entry.sender} />}
        liked={entry.liked}
      ></ChatEntry>
      </section>
      // change this return statement to return formatted jsx
    )
  });

  return (
    <section>
      {entries}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool
  }))
}

export default ChatLog;