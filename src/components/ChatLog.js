import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

/**
 *
 * Component for an array[] of all individual chat messages
 *
 * @component
 *
 */

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <div>
        <ChatEntry
          key={entry.id}
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
  /**
   * entries[] of all chat entries
   */
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
