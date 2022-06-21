import ChatEntry from './ChatEntry';
import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  if (props.entries !== undefined) {
    const messageComponents = props.entries.map((message) => {
      return (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onLike={props.onLike}
        />
      );
    });
    return (
      <section>
        <ul>{messageComponents}</ul>
      </section>
    );
  } else {
    return (
      <section>
        <ul>No Entries</ul>
      </section>
    );
  }
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  onLike: PropTypes.func.isRequired,
};
export default ChatLog;
