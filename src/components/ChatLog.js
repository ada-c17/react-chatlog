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
          onUpdateHeart={props.onUpdateHeart}
          odd={i % 2}
          colorForSender1={props.colorForSender1}
          colorForSender2={props.colorForSender2}
        ></ChatEntry>
      </div>
    );
  });

  return entryComponents;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.instanceOf(Date).isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateHeart: PropTypes.func.isRequired,
};
export default ChatLog;
