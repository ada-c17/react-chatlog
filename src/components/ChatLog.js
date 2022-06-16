import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((chatEntry) => {
    return (
      <li key={chatEntry.id}>
        <ChatEntry
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
        />
      </li>
    );
  });

  return <section>{chatEntries}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.array,
};

export default ChatLog;
