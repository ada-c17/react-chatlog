import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const entriesComponent = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  });
  return (
    <section>
      <ul>{entriesComponent}</ul>
    </section>
  );
};

// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       sender: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ChatLog;
