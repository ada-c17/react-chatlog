import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className="chat-log local">
      {props.entries.map((entry) => (
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
