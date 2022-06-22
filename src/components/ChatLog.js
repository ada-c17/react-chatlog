// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const entries = props.entries.map(entry => {
    return (
      <section key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onUpdate={props.onUpdateChatLogData}
        ></ChatEntry>
      </section>
      
    )
  });

  return (
    <section>
      {entries}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool
  })),
  onUpdateChatLogData: PropTypes.func.isRequired
};

export default ChatLog;