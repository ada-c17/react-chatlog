import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <li className="chat-log" key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          timeStamp={entry.timeStamp}
          body={entry.body}
          liked={entry.liked}
          onUpdate={props.onUpdateLiked}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntries}</ul>
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
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateLiked: PropTypes.func.isRequired,
};

export default ChatLog;
