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
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={() => {
            props.onEntryToggleLike(entry.id);
          }}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onEntryToggleLike: PropTypes.func,
};

export default ChatLog;
