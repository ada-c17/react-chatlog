import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <div key={entry.id} className="chat-log">
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          colorLocal={props.colorLocal}
          colorRemote={props.colorRemote}
          onUpdate={props.onUpdateHeart}
        />
      </div>
    );
  });
  return <section>{chatComponents};</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  colorLocal: PropTypes.string,
  colorRemote: PropTypes.string,

  onUpdateHeart: PropTypes.func,
};

export default ChatLog;
