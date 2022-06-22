import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

// const ChatLog = ({ entries, newEntry }) =>
const ChatLog = (props) => {
  // return entries.map((entry))
  const chatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        newEntry={props.newEntry}
      ></ChatEntry>
    );
  });
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  newEntry: PropTypes.func.isRequired,
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
