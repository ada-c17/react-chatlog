import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  return entries.map((entry) => {
    //Mapping each entry of chatMessages array to a chatEntry react component
    return (
      <ChatEntry
        key={entry.id} /* //Look up react keyError */
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ChatLog;
