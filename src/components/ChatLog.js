import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries = props.entries;

  const entryComponents = entries.map((entry, i) => {
    return (
      <div className="chat-log" key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateHeartColorCallback={props.updateHeartColorCallback}
          odd={i % 2}
          colorForSender1={props.colorForSender1}
          colorForSender2={props.colorForSender2}
        />
      </div>
    );
  });

  return entryComponents;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateHeartColorCallback: PropTypes.func,
};
export default ChatLog;
