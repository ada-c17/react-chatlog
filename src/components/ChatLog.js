import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <div key={entry.id}>
        <ChatEntry
          // key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          likedCallback={props.likedCallback}
        />
      </div>
    );
  });
  return chatEntryComponents;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
