import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdateEntry={props.onUpdateEntry}
        localSender={props.localSender}
        colorLocal={props.colorLocal}
        colorRemote={props.colorRemote}
      ></ChatEntry>
    );
  });
  return <div className="chat-log">{chatEntryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
