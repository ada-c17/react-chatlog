import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const ChatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });

  return <section>{ChatEntries}</section>;
};

// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf
// }

export default ChatLog;
