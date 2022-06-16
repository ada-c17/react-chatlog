import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

// const ChatLog = ({ entries }) => {
//   return entries.map((entry) => {
//     return (
//       <ChatEntry
//         key={entry.id}
//         id={entry.id}
//         sender={entry.sender}
//         body={entry.body}
//         timeStamp={entry.timeStamp}
//         liked={entry.liked}
//       />
//     );
//   });
// };

const ChatLog = ({ entries }) => {
  const entryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
  return <section className="chat-log">{entryComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
};

export default ChatLog;
