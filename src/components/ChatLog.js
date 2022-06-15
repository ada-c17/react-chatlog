import React from 'react';
import './ChatLog.css';
// import PropTypes from 'prop-Types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;
  console.log('here are my entries. start', entries);
  const entryComponents = [];
  for (const entry of entries) {
    console.log(entry);
    entryComponents.push(
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      ></ChatEntry>
    );
  }
  console.log('list of entries: ', entryComponents);

  return <div>{entryComponents}</div>;
};

export default ChatLog;

// ChatLog.propTypes = {
//   entries: PropTypes.array.isRequired,
// };

// class example:
// Cat.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   saying: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };
