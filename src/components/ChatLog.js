import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.chatEntries.map((entries) => {
    return (
      <div>
        <ChatEntry
          sender={entries.senderData}
          body={entries.bodyData}
          timeStamp={entries.timeStampData}
        ></ChatEntry>
      </div>
    );
  });
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {};

export default ChatLog;
