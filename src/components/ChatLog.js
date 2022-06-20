import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return props.entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      ></ChatEntry>
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// CanvasPattern.propTypes = {
//   caretaker: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   personality: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   onRemove: PropTypes.func.isRequired,
// };

export default ChatLog;
