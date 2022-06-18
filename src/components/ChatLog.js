import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chatEntry) => {
    return (
      <section>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          onUpdate={props.onUpdateEntry}
        ></ChatEntry>
      </section>
    );
  });

  return (
    <section>
      <ul className="chat-log">{chatComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onUpdateEntry: PropTypes.func.isRequired,
};

export default ChatLog;
