import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return props.entries.map((message) => (
    <ChatEntry
      key={message.id}
      id={message.id}
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
      liked={message.liked}
      toggleLiked={props.toggleLiked}
    />
  ));
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ChatLog;
