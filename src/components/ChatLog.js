import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries = props.entries;

  const entryComponents = entries.map((entry) => {
    return (
      <div className="chat-log" key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </div>
    );
  });

  return entryComponents;
};

// ChatEntry.propTypes = {
//   entries: PropTypes.array.isRequired,
// }
export default ChatLog;
