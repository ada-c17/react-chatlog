// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './components/ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const entries = props.entries.map(entry => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.sender}
        liked={entry.liked}
      ></ChatEntry>
      // change this return statement to return formatted jsx
    )
  });

  return (
    <section>
      {/* put chat entries here */}
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